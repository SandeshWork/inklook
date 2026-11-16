import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MoveHorizontal, RotateCcw } from "lucide-react";
import MerchSVG from "./MerchSVG.jsx";

const pulls = [
  { garment: "#F7F2E6", ink: "#141210", offset: "#FF48B0", name: "black + pink" },
  { garment: "#0078BF", ink: "#FFFFFF", offset: "#FFE800", name: "white + yellow" },
  { garment: "#1B1916", ink: "#FF48B0", offset: "#0078BF", name: "pink + blue" },
  { garment: "#FFE800", ink: "#141210", offset: "#FF4F28", name: "black + red" },
];

function Misregistered({ children, className }) {
  return (
    <span className={`misreg ${className || ""}`} data-text={children}>
      {children}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [pull, setPull] = useState(0);
  const [count, setCount] = useState(1);
  const done = progress >= 98;
  const colour = pulls[pull % pulls.length];

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--mx", mx.toFixed(3));
    e.currentTarget.style.setProperty("--my", my.toFixed(3));
  };

  const nextPull = () => {
    setPull((p) => p + 1);
    setCount((c) => c + 1);
    setProgress(0);
  };

  return (
    <section id="top" className="hero" onPointerMove={onMove}>
      <div className="hero__meta" aria-hidden="true">
        <span>JOB Nº IL-2026</span>
        <span>SHEET 01 / 12</span>
        <span>3-COLOUR SCREEN PRINT</span>
        <span className="hero__reg">⊕</span>
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <motion.p
            className="tag"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Merchandise ✶ Gifting ✶ Events
          </motion.p>

          <h1 className="hero__title">
            <Misregistered>Your</Misregistered>{" "}
            <Misregistered>brand.</Misregistered>
            <span className="hero__serif">
              made <em className="marker">tangible.</em>
            </span>
          </h1>

          <p className="hero__lede">
            From custom apparel and corporate gifting to event kits and complete
            merchandise fulfilment, InkLook turns your identity into something
            people can wear, use, share and <strong>keep</strong>.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--ink">
              Start a project <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#configurator" className="btn btn--paper">
              Build your merch
            </a>
          </div>
        </div>

        <div className="press">
          <div className="press__label">
            <span>Try the press</span>
            <span>
              Pull Nº {String(count).padStart(4, "0")} · {colour.name}
            </span>
          </div>

          <div className={`press__frame ${done ? "is-done" : ""}`}>
            <div className="press__mesh" aria-hidden="true" />
            <div className="press__tee">
              <MerchSVG
                product="tee"
                garment={colour.garment}
                printed={false}
                className="press__blank"
                title="Blank T-shirt on the press"
              />
              <div
                className="press__ink"
                style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
              >
                <MerchSVG
                  product="tee"
                  garment={colour.garment}
                  ink={colour.ink}
                  offsetInk={colour.offset}
                  text="INKLOOK"
                  title="T-shirt printed with the InkLook mark"
                />
              </div>
            </div>

            <div
              className="squeegee"
              style={{ left: `${progress}%` }}
              aria-hidden="true"
            >
              <span className="squeegee__blade" />
              <span className="squeegee__grip">
                <MoveHorizontal size={18} />
              </span>
            </div>

            <label className="sr-only" htmlFor="squeegee">
              Drag the squeegee to print the T-shirt
            </label>
            <input
              id="squeegee"
              className="press__range"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
            />

            {done && (
              <motion.div
                className="stamp stamp--hero"
                initial={reduce ? false : { scale: 2.4, opacity: 0, rotate: -24 }}
                animate={{ scale: 1, opacity: 1, rotate: -12 }}
                transition={{ type: "spring", stiffness: 500, damping: 22 }}
                role="status"
              >
                Printed!
              </motion.div>
            )}
          </div>

          <div className="press__foot">
            {done ? (
              <button type="button" className="btn btn--yellow btn--sm" onClick={nextPull}>
                <RotateCcw size={16} aria-hidden="true" /> Pull another colourway
              </button>
            ) : (
              <p className="press__hint">
                <span className="press__arrow" aria-hidden="true">
                  →
                </span>{" "}
                Drag the squeegee across the screen
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
