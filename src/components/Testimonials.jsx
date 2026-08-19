import { Quote } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { testimonials } from "../data/siteData.js";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <p className="eyebrow">What people say</p>
        <p className="testimonials__note">
          Placeholder quotes shown below — to be replaced with real client
          testimonials.
        </p>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name + i}
              className="testimonial-card"
              delay={i * 0.08}
            >
              <Quote
                size={32}
                strokeWidth={1.5}
                className="testimonial-card__icon"
                aria-hidden="true"
              />
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
