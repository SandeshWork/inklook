import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";
import { projects } from "../data/siteData.js";

export default function CaseStudies() {
  return (
    <section id="work" className="section case-studies">
      <div className="container">
        <SectionHeading
          eyebrow="Our work"
          heading="We’ve made some cool stuff."
        />
        <p className="case-studies__disclaimer">
          Showcase concepts — replace with real InkLook projects as
          they&rsquo;re completed.
        </p>

        <div className="case-studies__list">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              className={`case-study ${i % 2 === 1 ? "case-study--reverse" : ""}`}
              delay={i * 0.08}
            >
              <div className="case-study__image-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="case-study__content">
                <span className="case-study__category">{project.category}</span>
                <h3 className="case-study__title">{project.title}</h3>
                <p className="case-study__description">{project.description}</p>
                <span className="case-study__link">
                  View project{" "}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="case-studies__cta" delay={0.15}>
          <Button href="#contact">Start a Project</Button>
        </Reveal>
      </div>
    </section>
  );
}
