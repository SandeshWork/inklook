import Reveal from "./Reveal.jsx";
import { trustClients } from "../data/siteData.js";
import { staggerContainer, fadeUp } from "../utils/animations.js";
import { motion } from "framer-motion";

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <Reveal as="p" className="trust-strip__headline">
          Built for brands that build communities.
        </Reveal>

        <motion.div
          className="trust-strip__logos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.06)}
        >
          {trustClients.map((client) => (
            <motion.div
              key={client}
              className="trust-strip__logo"
              variants={fadeUp}
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
