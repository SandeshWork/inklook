import { useState } from "react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { productCategories } from "../data/siteData.js";

export default function MerchandiseShowcase() {
  const [active, setActive] = useState(productCategories[0].label);
  const activeCategory = productCategories.find((c) => c.label === active);

  return (
    <section id="products" className="section products">
      <div className="container">
        <SectionHeading
          eyebrow="Products"
          heading="Made for every kind of brand moment."
        />

        <Reveal
          as="div"
          className="products__tabs"
          delay={0.1}
          role="tablist"
          aria-label="Product categories"
        >
          {productCategories.map((cat) => (
            <button
              key={cat.label}
              type="button"
              role="tab"
              aria-selected={active === cat.label}
              className={`products__tab ${active === cat.label ? "products__tab--active" : ""}`}
              onClick={() => setActive(cat.label)}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="products__grid" role="tabpanel">
          {activeCategory.items.map((item, i) => (
            <Reveal
              key={item.name}
              as="figure"
              className={`product-tile ${i % 5 === 0 ? "product-tile--tall" : ""}`}
              delay={Math.min(i * 0.05, 0.2)}
            >
              <div className="product-tile__image-wrap">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <figcaption>
                <span className="product-tile__category">
                  {activeCategory.label}
                </span>
                <span className="product-tile__name">{item.name}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
