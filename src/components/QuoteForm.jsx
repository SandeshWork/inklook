import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";
import { quoteNeedOptions, quoteQuantityOptions } from "../data/siteData.js";

const initialForm = {
  name: "",
  email: "",
  company: "",
  need: "",
  quantity: "",
  details: "",
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your work email.";
    else if (!isValidEmail(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.company.trim())
      next.company = "Please enter your company or organisation.";
    if (!form.need) next.need = "Please select what you need.";
    if (!form.quantity) next.quantity = "Please select an estimated quantity.";
    if (!form.details.trim())
      next.details = "Tell us a little about what you're building.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // No backend is wired up yet — log the payload for now and show a
    // confirmation state. Replace this block with a real submission
    // (API call, form service, etc.) when one is available.
    console.log("InkLook project enquiry:", form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section quote">
      <div className="container quote__inner">
        <SectionHeading
          eyebrow="Get a quote"
          heading="Tell us what you’re building."
          supporting="Every project is different. Share your requirements and we’ll help you figure out the right products, quantities and budget."
        />

        {submitted ? (
          <Reveal className="quote-form__success" role="status">
            <CheckCircle2 size={40} strokeWidth={1.5} aria-hidden="true" />
            <h3>You&rsquo;re on the list.</h3>
            <p>
              Thanks — we&rsquo;ve received your project details. We&rsquo;ll be
              in touch soon.
            </p>
          </Reveal>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit} noValidate>
            <div className="quote-form__row">
              <div className="quote-form__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <span
                    className="quote-form__error"
                    id="name-error"
                    role="alert"
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="quote-form__field">
                <label htmlFor="email">Work Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <span
                    className="quote-form__error"
                    id="email-error"
                    role="alert"
                  >
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="quote-form__field">
              <label htmlFor="company">Company / Organisation</label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={update("company")}
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "company-error" : undefined}
                required
              />
              {errors.company && (
                <span
                  className="quote-form__error"
                  id="company-error"
                  role="alert"
                >
                  {errors.company}
                </span>
              )}
            </div>

            <div className="quote-form__row">
              <div className="quote-form__field">
                <label htmlFor="need">What do you need?</label>
                <select
                  id="need"
                  value={form.need}
                  onChange={update("need")}
                  aria-invalid={Boolean(errors.need)}
                  aria-describedby={errors.need ? "need-error" : undefined}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {quoteNeedOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.need && (
                  <span
                    className="quote-form__error"
                    id="need-error"
                    role="alert"
                  >
                    {errors.need}
                  </span>
                )}
              </div>

              <div className="quote-form__field">
                <label htmlFor="quantity">Estimated Quantity</label>
                <select
                  id="quantity"
                  value={form.quantity}
                  onChange={update("quantity")}
                  aria-invalid={Boolean(errors.quantity)}
                  aria-describedby={
                    errors.quantity ? "quantity-error" : undefined
                  }
                  required
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {quoteQuantityOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.quantity && (
                  <span
                    className="quote-form__error"
                    id="quantity-error"
                    role="alert"
                  >
                    {errors.quantity}
                  </span>
                )}
              </div>
            </div>

            <div className="quote-form__field">
              <label htmlFor="details">What are you looking to create?</label>
              <textarea
                id="details"
                rows={5}
                value={form.details}
                onChange={update("details")}
                aria-invalid={Boolean(errors.details)}
                aria-describedby={errors.details ? "details-error" : undefined}
                required
              />
              {errors.details && (
                <span
                  className="quote-form__error"
                  id="details-error"
                  role="alert"
                >
                  {errors.details}
                </span>
              )}
            </div>

            <Button type="submit" className="quote-form__submit">
              Start My Project
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
