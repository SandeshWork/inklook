import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { eventChecklist } from "../data/siteData.js";
import { siteImages } from "../data/siteImages.js";

export default function Receipt() {
  const reduce = useReducedMotion();
  return (
    <section id="events" className="section events">
      <div className="wrap events__grid">
        <div className="events__copy">
          <p className="tag">Sheet 07 — Running an event?</p>
          <h2 className="h2">
            We&rsquo;ve got the <em>swag</em> covered.
          </h2>
          <p className="lede">
            From 100-person meetups to large-scale conferences, InkLook helps
            manage your merchandise requirements from start to finish.
          </p>
          <figure className="events__photo">
            <img
              src={siteImages.event}
              alt="Attendees at a branded technology event"
              loading="lazy"
              width="1600"
              height="1000"
            />
          </figure>
          <a href="#contact" className="btn btn--pink">
            Plan my event merchandise <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="receipt" aria-label="Event merchandise checklist">
          <div className="receipt__head">
            <strong>INKLOOK</strong>
            <span>EVENT KIT · PACKING LIST</span>
            <span>ORDER Nº 000-EVT</span>
          </div>
          <ul className="receipt__list">
            {eventChecklist.map((item, i) => (
              <motion.li
                key={item}
                initial={reduce ? false : { opacity: 0.25 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
              >
                <span className="receipt__box">
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="receipt__item">{item}</span>
                <span className="receipt__dots" aria-hidden="true" />
                <span className="receipt__qty">✓</span>
              </motion.li>
            ))}
          </ul>
          <div className="receipt__total">
            <span>Partners needed</span>
            <strong>1</strong>
          </div>
          <p className="receipt__thanks">*** THANK YOU · SEE YOU AT THE VENUE ***</p>
          <div className="receipt__barcode" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
