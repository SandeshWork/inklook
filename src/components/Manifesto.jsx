import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const lines = [
  "We don't just print your logo on a T-shirt.",
  "We help create branded experiences — from the first product idea to the moment it lands in someone's hands.",
];

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span className="manifesto__word" style={{ opacity }}>
      {children}{" "}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = lines.join(" ").split(" ");

  return (
    <section id="about" className="manifesto" ref={ref}>
      <div className="wrap">
        <p className="tag">Sheet 02 — More than merchandise</p>
        <p className="manifesto__text">
          {reduce
            ? lines.join(" ")
            : words.map((w, i) => (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[i / words.length, (i + 1) / words.length]}
                >
                  {w}
                </Word>
              ))}
        </p>
        <div className="manifesto__kicker">
          <p>The best swag isn&rsquo;t the one people receive.</p>
          <p className="manifesto__keep">
            It&rsquo;s the one they <span className="circled">keep.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
