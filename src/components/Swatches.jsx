import { CalendarDays, Gift, PackageCheck, Shirt } from "lucide-react";
import { services } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";

const icons = { Shirt, Gift, CalendarDays, PackageCheck };
const inks = [
  { cls: "pink", code: "IL-805 FLUORO PINK" },
  { cls: "blue", code: "IL-300 RISO BLUE" },
  { cls: "yellow", code: "IL-108 YELLOW" },
  { cls: "red", code: "IL-032 BRIGHT RED" },
];

export default function Swatches() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <header className="head">
          <p className="tag">Sheet 03 — Services</p>
          <h2 className="h2">
            Merchandise, <em>without</em> the headache.
          </h2>
        </header>

        <ul className="swatches">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Shirt;
            const ink = inks[i % inks.length];
            return (
              <Reveal as="li" key={s.title} delay={i * 0.07} className={`swatch swatch--${ink.cls}`}>
                <div className="swatch__chip">
                  <span className="swatch__num">{s.number}</span>
                  <Icon size={44} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div className="swatch__body">
                  <span className="swatch__code">{ink.code}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
