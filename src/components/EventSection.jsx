import { Check } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import { eventChecklist } from "../data/siteData.js";
import { siteImages } from "../data/siteImages.js";
import { slideInLeft, slideInRight } from "../utils/animations.js";

export default function EventSection() {
  return (
    <section className="event-section">
      <div className="container event-section__inner">
        <Reveal
          as="div"
          className="event-section__visual"
          variants={slideInLeft}
        >
          <img
            src={siteImages.event}
            alt="Attendees at a branded technology event"
            loading="lazy"
          />
        </Reveal>

        <div className="event-section__content">
          <Reveal as="p" className="eyebrow" variants={slideInRight}>
            Running an event?
          </Reveal>
          <Reveal
            as="h2"
            className="event-section__heading"
            variants={slideInRight}
            delay={0.06}
          >
            We&rsquo;ve got the swag covered.
          </Reveal>
          <Reveal
            as="p"
            className="event-section__body"
            variants={slideInRight}
            delay={0.12}
          >
            From 100-person meetups to large-scale conferences, InkLook helps
            manage your merchandise requirements from start to finish.
          </Reveal>

          <Reveal
            as="ul"
            className="event-section__list"
            variants={slideInRight}
            delay={0.18}
          >
            {eventChecklist.map((item) => (
              <li key={item}>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </Reveal>

          <Reveal variants={slideInRight} delay={0.24}>
            <Button href="#contact">Plan My Event Merchandise</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
