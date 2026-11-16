import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Factory, Package, PenTool, Search, Send, Truck } from "lucide-react";
import { processSteps } from "../data/siteData.js";

const icons = [Send, PenTool, Search, Factory, Package, Truck];
const colours = ["pink", "blue", "yellow", "red", "green", "pink"];

function useWide() {
  const [wide, setWide] = useState(
    typeof window !== "undefined" && window.matchMedia("(min-width: 960px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 960px)");
    const on = () => setWide(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return wide;
}

function Ticket({ step, i, stamped }) {
  const Icon = icons[i] ?? Send;
  return (
    <li className={`ticket ticket--${colours[i]} ${stamped ? "is-stamped" : ""}`}>
      <div className="ticket__top">
        <span className="ticket__num">{step.number}</span>
        <Icon size={30} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="ticket__title">{step.title}</h3>
      <p className="ticket__desc">{step.description}</p>
      <div className="ticket__perf" aria-hidden="true" />
      <div className="ticket__foot">
        <span>STAGE {i + 1}/6</span>
        <span>{stamped ? "SIGNED OFF" : "IN QUEUE"}</span>
      </div>
      <span className="stamp stamp--ticket" aria-hidden="true">
        Done
      </span>
    </li>
  );
}

export default function JobTicket() {
  const wide = useWide();
  const reduce = useReducedMotion();
  const pinned = wide && !reduce;
  const ref = useRef(null);
  const [active, setActive] = useState(pinned ? -1 : processSteps.length);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (pinned) setActive(Math.floor(v * (processSteps.length + 0.6)) - 1);
  });

  return (
    <section
      id="process"
      ref={ref}
      className={`process ${pinned ? "process--pinned" : ""}`}
    >
      <div className="process__sticky">
        <div className="wrap process__head">
          <p className="tag tag--light">Sheet 06 — How it works</p>
          <h2 className="h2 h2--light">
            From idea <em>to doorstep.</em>
          </h2>
          <p className="process__sub">One partner. The entire merchandise journey.</p>
        </div>
        <motion.ol className="process__track" style={pinned ? { x } : undefined}>
          {processSteps.map((s, i) => (
            <Ticket key={s.number} step={s} i={i} stamped={!pinned || i <= active} />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
