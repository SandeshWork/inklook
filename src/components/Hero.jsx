import { motion, useReducedMotion } from "framer-motion";
import Button from "./Button.jsx";
import { siteImages } from "../data/siteImages.js";
import { fadeUp } from "../utils/animations.js";

const floatingItems = [
  {
    key: "tshirt",
    src: siteImages.heroTshirt,
    alt: "Folded custom-branded t-shirt",
    className: "hero__item hero__item--tshirt",
  },
  {
    key: "tote",
    src: siteImages.heroTote,
    alt: "Custom branded tote bag",
    className: "hero__item hero__item--tote",
  },
  {
    key: "cap",
    src: siteImages.heroCap,
    alt: "Custom embroidered cap",
    className: "hero__item hero__item--cap",
  },
  {
    key: "bottle",
    src: siteImages.heroBottle,
    alt: "Branded reusable bottle",
    className: "hero__item hero__item--bottle",
  },
  {
    key: "badge",
    src: siteImages.heroBadge,
    alt: "Event badge and lanyard",
    className: "hero__item hero__item--badge",
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            Merchandise • Gifting • Events
          </motion.p>

          <motion.h1
            className="hero__headline"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.08 }}
          >
            Your Brand.
            <br />
            Made Tangible.
          </motion.h1>

          <motion.p
            className="hero__supporting"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.16 }}
          >
            From custom apparel and corporate gifting to event kits and complete
            merchandise fulfilment, InkLook helps brands turn their identity
            into something people can wear, use, share and remember.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.24 }}
          >
            <Button href="#contact">Start a Project</Button>
            <Button href="#work" variant="secondary" showArrow={false}>
              View Our Work
            </Button>
          </motion.div>

          <motion.p
            className="hero__note"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            Built for brands, communities &amp; events.
          </motion.p>
        </div>

        <div className="hero__visual" aria-hidden={false}>
          {floatingItems.map((item, i) => (
            <motion.figure
              key={item.key}
              className={item.className}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: [0, -14, 0] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.6, delay: 0.1 * i }
                  : {
                      opacity: { duration: 0.6, delay: 0.1 * i },
                      y: {
                        duration: 4 + i * 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1 * i,
                      },
                    }
              }
              whileHover={
                prefersReducedMotion ? undefined : { scale: 1.05, rotate: 1 }
              }
            >
              <img src={item.src} alt={item.alt} loading="eager" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
