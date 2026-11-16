import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/siteData.js";

export function Logo({ className = "" }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label="InkLook, back to top">
      <span className="logo__dot" aria-hidden="true" />
      INK<span className="logo__look">LOOK</span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <motion.div className="nav__ink" style={{ scaleX }} aria-hidden="true" />
      <div className="nav__inner">
        <Logo />
        <nav aria-label="Primary" className="nav__links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--pink btn--sm nav__cta">
          Get a quote
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="nav__mobile">
          {[...navLinks, { label: "Get a quote", href: "#contact" }].map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
