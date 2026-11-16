import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MerchSVG, { garmentColors, inkColors, products } from "./MerchSVG.jsx";

export const PREFILL_EVENT = "inklook:prefill";

function Swatch({ name, item, checked, onChange }) {
  return (
    <label className={`dot ${checked ? "is-on" : ""}`} title={item.label}>
      <input
        type="radio"
        name={name}
        value={item.id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="dot__fill" style={{ background: item.fill }} aria-hidden="true" />
      <span className="sr-only">{item.label}</span>
    </label>
  );
}

export default function Configurator() {
  const reduce = useReducedMotion();
  const [product, setProduct] = useState("hoodie");
  const [garment, setGarment] = useState(garmentColors[2]);
  const [ink, setInk] = useState(inkColors[1]);
  const [offset, setOffset] = useState(true);
  const [text, setText] = useState("");

  const brand = text.trim() || "YOUR BRAND";
  const offsetInk = offset ? (ink.id === "pink" ? "#FFE800" : "#FF48B0") : undefined;

  const send = () => {
    const details = `Configurator mock-up: ${products[product].label}, ${garment.label} blank, ${ink.label.toLowerCase()}${offset ? " with a riso offset layer" : ""}, printed "${brand}".`;
    window.dispatchEvent(
      new CustomEvent(PREFILL_EVENT, {
        detail: {
          need: product === "tee" || product === "hoodie" || product === "cap" ? "Custom Apparel" : "Community Swag",
          details,
        },
      }),
    );
    document.getElementById("contact")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="configurator" className="section config">
      <div className="wrap">
        <header className="head head--split">
          <div>
            <p className="tag">Sheet 04 — The mock-up desk</p>
            <h2 className="h2">
              See it before <em>we print it.</em>
            </h2>
          </div>
          <p className="head__aside">
            Type your brand, pick a blank and an ink. It&rsquo;s a rough proof —
            our designers take it from here.
          </p>
        </header>

        <div className="config__grid">
          <div className="config__stage" style={{ "--stage": garment.fill }}>
            <div className="config__halftone" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={product}
                className="config__product"
                initial={reduce ? false : { y: 60, rotate: -8, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                exit={reduce ? undefined : { y: -40, rotate: 6, opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
              >
                <MerchSVG
                  product={product}
                  garment={garment.fill}
                  ink={ink.fill}
                  offsetInk={offsetInk}
                  text={brand}
                />
              </motion.div>
            </AnimatePresence>
            <dl className="spec" aria-label="Proof specification">
              <div>
                <dt>Item</dt>
                <dd>{products[product].label}</dd>
              </div>
              <div>
                <dt>Blank</dt>
                <dd>{garment.label}</dd>
              </div>
              <div>
                <dt>Ink</dt>
                <dd>
                  {ink.label}
                  {offset ? " + offset" : ""}
                </dd>
              </div>
            </dl>
            <span className="config__proof" aria-hidden="true">
              PROOF
            </span>
          </div>

          <div className="config__panel">
            <div className="field">
              <label htmlFor="brand-text" className="field__label">
                01 · Your brand name
              </label>
              <input
                id="brand-text"
                className="input input--big"
                maxLength={18}
                placeholder="YOUR BRAND"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoComplete="organization"
              />
            </div>

            <fieldset className="field">
              <legend className="field__label">02 · Pick a blank</legend>
              <div className="chips">
                {Object.entries(products).map(([id, p]) => (
                  <label key={id} className={`chip ${product === id ? "is-on" : ""}`}>
                    <input
                      type="radio"
                      name="product"
                      value={id}
                      checked={product === id}
                      onChange={() => setProduct(id)}
                      className="sr-only"
                    />
                    {p.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="config__pair">
              <fieldset className="field">
                <legend className="field__label">03 · Blank colour</legend>
                <div className="dots">
                  {garmentColors.map((g) => (
                    <Swatch
                      key={g.id}
                      name="garment"
                      item={g}
                      checked={garment.id === g.id}
                      onChange={() => setGarment(g)}
                    />
                  ))}
                </div>
              </fieldset>
              <fieldset className="field">
                <legend className="field__label">04 · Ink</legend>
                <div className="dots">
                  {inkColors.map((c) => (
                    <Swatch
                      key={c.id}
                      name="ink"
                      item={c}
                      checked={ink.id === c.id}
                      onChange={() => setInk(c)}
                    />
                  ))}
                </div>
              </fieldset>
            </div>

            <label className="toggle">
              <input
                type="checkbox"
                checked={offset}
                onChange={(e) => setOffset(e.target.checked)}
              />
              <span className="toggle__track" aria-hidden="true">
                <span className="toggle__knob" />
              </span>
              Add a second ink, slightly off-register
            </label>

            <button type="button" className="btn btn--ink btn--block" onClick={send}>
              Send this proof to a work order <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
