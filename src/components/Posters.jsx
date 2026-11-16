import { projects } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";

const tilt = [-2.5, 1.8, -1.2];
const duo = ["pink", "blue", "yellow"];

export default function Posters() {
  return (
    <section id="work" className="section posters">
      <div className="wrap">
        <header className="head head--split">
          <div>
            <p className="tag">Sheet 08 — Off the press</p>
            <h2 className="h2">
              Work that left <em>the building.</em>
            </h2>
          </div>
          {/* Fictional showcase projects — replace with real InkLook work. */}
          <p className="head__aside mono">
            Concept projects shown for illustration.
          </p>
        </header>

        <ul className="posters__wall">
          {projects.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 0.08}
              rotate={tilt[i]}
              className={`poster duo--${duo[i]}`}
            >
              <span className="poster__tape" aria-hidden="true" />
              <div className="poster__img">
                <img src={p.image} alt={p.title} loading="lazy" width="1400" height="1000" />
              </div>
              <div className="poster__body">
                <span className="poster__cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <span className="poster__no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
