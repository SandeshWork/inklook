import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { productCategories } from "../data/siteData.js";

const tilts = [-3, 2, -1.5, 3, -2.5];
const duos = ["pink", "blue", "yellow", "red", "blue"];

export default function Shelf() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const cat = productCategories[active];

  return (
    <section id="products" className="section shelf">
      <div className="wrap">
        <header className="head head--split">
          <div>
            <p className="tag">Sheet 05 — The stockroom</p>
            <h2 className="h2">
              If it can carry a logo, <em>we&rsquo;ve made it.</em>
            </h2>
          </div>
          <div className="tabs" role="tablist" aria-label="Product categories">
            {productCategories.map((c, i) => (
              <button
                key={c.label}
                role="tab"
                type="button"
                id={`tab-${i}`}
                aria-selected={i === active}
                aria-controls="shelf-panel"
                className={`tab ${i === active ? "is-on" : ""}`}
                onClick={() => setActive(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span> {c.label}
              </button>
            ))}
          </div>
        </header>

        <div id="shelf-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
          <AnimatePresence mode="wait">
            <motion.ul
              key={cat.label}
              className="shelf__grid"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.05 } } }}
            >
              {cat.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  className={`tagcard duo--${duos[i % duos.length]}`}
                  style={{ "--tilt": `${tilts[i % tilts.length]}deg` }}
                  variants={
                    reduce
                      ? {}
                      : {
                          hidden: { opacity: 0, y: -50, rotate: -10 },
                          show: {
                            opacity: 1,
                            y: 0,
                            rotate: 0,
                            transition: { type: "spring", stiffness: 420, damping: 22 },
                          },
                        }
                  }
                >
                  <span className="tagcard__hole" aria-hidden="true" />
                  <div className="tagcard__img">
                    <img src={item.image} alt={item.name} loading="lazy" width="600" height="600" />
                  </div>
                  <div className="tagcard__meta">
                    <span>{item.name}</span>
                    <span className="tagcard__sku">
                      SKU {cat.label.slice(0, 2).toUpperCase()}-{String(i + 1).padStart(3, "0")}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
