import { whyReasons, testimonials } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";

const floods = ["pink", "blue", "yellow", "red", "green"];

export default function Reasons() {
  return (
    <section className="section reasons">
      <div className="wrap">
        <header className="head">
          <p className="tag">Sheet 09 — Why InkLook</p>
          <h2 className="h2 h2--xl">
            Merchandise shouldn&rsquo;t feel like an <s>afterthought.</s>
          </h2>
        </header>

        <ol className="reasons__list">
          {whyReasons.map((r, i) => (
            <li key={r.title} className={`reason flood--${floods[i]}`}>
              <span className="reason__num">0{i + 1}</span>
              <h3 className="reason__title">{r.title}</h3>
              <p className="reason__desc">{r.description}</p>
            </li>
          ))}
        </ol>

        {/* Placeholder testimonials — replace with real client quotes. */}
        <div className="notes">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={i}
              rotate={i % 2 ? 2 : -2}
              delay={i * 0.08}
              className={`note note--${i % 2 ? "blue" : "yellow"}`}
            >
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                — {t.name}, {t.role} · {t.company}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
