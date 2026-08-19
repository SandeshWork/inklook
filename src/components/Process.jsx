import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { processSteps } from "../data/siteData.js";

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          heading="From idea to doorstep."
          supporting="One partner. The entire merchandise journey."
        />

        <ol className="process__timeline">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              className="process__step"
              delay={i * 0.06}
            >
              <span className="process__number">{step.number}</span>
              <div className="process__line" aria-hidden="true" />
              <h3 className="process__title">{step.title}</h3>
              <p className="process__description">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
