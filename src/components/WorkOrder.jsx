import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { quoteNeedOptions, quoteQuantityOptions } from "../data/siteData.js";
import { PREFILL_EVENT } from "./Configurator.jsx";

const initial = { name: "", email: "", company: "", need: "", quantity: "", details: "" };
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your work email.";
  else if (!isEmail(f.email)) e.email = "Please enter a valid email address.";
  if (!f.company.trim()) e.company = "Please enter your company or organisation.";
  if (!f.need) e.need = "Please select what you need.";
  if (!f.quantity) e.quantity = "Please select an estimated quantity.";
  if (!f.details.trim()) e.details = "Tell us a little about what you're building.";
  return e;
}

function Line({ id, label, error, children }) {
  return (
    <div className={`line ${error ? "has-error" : ""}`}>
      <label htmlFor={id} className="line__label">
        {label}
      </label>
      {children}
      {error && (
        <p className="line__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

function ChipGroup({ name, legend, options, value, onChange, error }) {
  return (
    <fieldset className={`line ${error ? "has-error" : ""}`} aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="line__label">{legend}</legend>
      <div className="chips">
        {options.map((o) => (
          <label key={o} className={`chip ${value === o ? "is-on" : ""}`}>
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="sr-only"
            />
            {o}
          </label>
        ))}
      </div>
      {error && (
        <p className="line__error" id={`${name}-error`}>
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function WorkOrder() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [orderNo, setOrderNo] = useState(null);
  const [flash, setFlash] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const onPrefill = (e) => {
      setForm((f) => ({ ...f, ...e.detail }));
      setFlash(true);
      setTimeout(() => setFlash(false), 1600);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const set = (field) => (v) => {
    setForm((f) => ({ ...f, [field]: v }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };
  const onInput = (field) => (e) => set(field)(e.target.value);

  const submit = (e) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    // No backend yet — replace with a real submission (API, form service).
    console.log("InkLook work order:", form);
    setOrderNo(`IL-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  const aria = (f) => ({
    "aria-invalid": Boolean(errors[f]),
    "aria-describedby": errors[f] ? `${f}-error` : undefined,
  });

  return (
    <section id="contact" className="section order">
      <div className="wrap order__grid">
        <div className="order__intro">
          <p className="tag">Sheet 10 — Work order</p>
          <h2 className="h2">
            Tell us what <em>you&rsquo;re building.</em>
          </h2>
          <p className="lede">
            Fill in the slip. A real person reads every one and comes back with
            ideas, options and a quote.
          </p>
          <ul className="order__promise mono">
            <li>→ Any quantity, any brief</li>
            <li>→ One partner, design to doorstep</li>
            <li>→ No obligation</li>
          </ul>
        </div>

        <div className={`slip ${flash ? "is-flash" : ""}`}>
          <div className="slip__head">
            <span>WORK ORDER</span>
            <span>COPY 1 OF 3 · CUSTOMER</span>
          </div>

          {orderNo ? (
            <div className="slip__done" role="status">
              <motion.span
                className="stamp stamp--big"
                initial={reduce ? false : { scale: 3, opacity: 0, rotate: -30 }}
                animate={{ scale: 1, opacity: 1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 520, damping: 20 }}
              >
                Received
              </motion.span>
              <p className="slip__doneTitle">Order {orderNo} is on the board.</p>
              <p>Thanks, {form.name.split(" ")[0]}. We&rsquo;ll be in touch at {form.email}.</p>
              <button
                type="button"
                className="btn btn--paper btn--sm"
                onClick={() => {
                  setForm(initial);
                  setOrderNo(null);
                }}
              >
                Start another order
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={submit} noValidate className="slip__form">
              <div className="slip__row">
                <Line id="name" label="Name" error={errors.name}>
                  <input id="name" name="name" className="input" autoComplete="name" value={form.name} onChange={onInput("name")} {...aria("name")} />
                </Line>
                <Line id="email" label="Work email" error={errors.email}>
                  <input id="email" name="email" type="email" className="input" autoComplete="email" value={form.email} onChange={onInput("email")} {...aria("email")} />
                </Line>
              </div>
              <Line id="company" label="Company / organisation" error={errors.company}>
                <input id="company" name="company" className="input" autoComplete="organization" value={form.company} onChange={onInput("company")} {...aria("company")} />
              </Line>
              <ChipGroup name="need" legend="What do you need?" options={quoteNeedOptions} value={form.need} onChange={set("need")} error={errors.need} />
              <ChipGroup name="quantity" legend="Estimated quantity" options={quoteQuantityOptions} value={form.quantity} onChange={set("quantity")} error={errors.quantity} />
              <Line id="details" label="The brief" error={errors.details}>
                <textarea id="details" name="details" rows={4} className="input input--area" value={form.details} onChange={onInput("details")} placeholder="Event, dates, audience, vibe…" {...aria("details")} />
              </Line>
              <button type="submit" className="btn btn--ink btn--block">
                Submit work order <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
