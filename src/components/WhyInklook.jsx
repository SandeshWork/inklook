import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { whyReasons } from "../data/siteData.js";

export default function WhyInklook() {
  return (
    <section className="section why">
      <div className="container">
        <SectionHeading
          eyebrow="Why InkLook"
          heading="Merchandise shouldn’t feel like an afterthought."
        />

        <div className="why__list">
          {whyReasons.map((reason, i) => (
            <Reveal
              as="div"
              key={reason.title}
              className="why__item"
              delay={i * 0.05}
            >
              <span className="why__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="why__title">{reason.title}</h3>
                <p className="why__description">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
