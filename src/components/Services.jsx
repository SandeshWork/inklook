import {
  Shirt,
  Gift,
  CalendarDays,
  PackageCheck,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";
import { services } from "../data/siteData.js";

const icons = { Shirt, Gift, CalendarDays, PackageCheck };

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          heading="Merchandise, without the headache."
        />

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                key={service.number}
                as="article"
                className={`service-card service-card--${i % 2 === 0 ? "a" : "b"}`}
                delay={i * 0.06}
              >
                <div className="service-card__top">
                  <span className="service-card__number">{service.number}</span>
                  {Icon && (
                    <Icon
                      size={26}
                      strokeWidth={1.6}
                      className="service-card__icon"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">
                  {service.description}
                </p>
                <ArrowUpRight
                  size={20}
                  strokeWidth={2}
                  className="service-card__arrow"
                  aria-hidden="true"
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal className="services__cta" delay={0.2}>
          <Button href="#products" variant="secondary">
            Explore Merchandise
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
