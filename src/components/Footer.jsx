import { ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <svg aria-hidden="true" className="footer__drips" viewBox="0 0 1000 80" preserveAspectRatio="none">
        <path d="M0 0 H1000 V8 C980 8 978 46 968 46 C958 46 960 8 930 8 H790 C770 8 772 70 760 70 C748 70 752 8 730 8 H540 C525 8 526 32 518 32 C510 32 512 8 495 8 H300 C282 8 284 58 272 58 C260 58 262 8 240 8 H120 C104 8 106 36 98 36 C90 36 92 8 76 8 H0 Z" />
      </svg>
      <div className="wrap">
        <div className="cta">
          <p className="tag tag--light">Last sheet</p>
          <h2 className="cta__title">
            Got an idea? <em>Let&rsquo;s turn it into something people remember.</em>
          </h2>
          <p className="cta__sub">
            Whether you&rsquo;re planning an event, launching a brand, welcoming a
            new team or building a community — let&rsquo;s make something memorable.
          </p>
          <a href="#contact" className="btn btn--yellow">
            Start a project <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="footer__cols">
          <nav aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mono">
            <a href="mailto:hello@inklook.example">hello@inklook.example</a>
            <p>Merchandise. Gifting. Events.</p>
            <p>© 2026 InkLook. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="footer__word" aria-hidden="true">
        <span className="footer__layer footer__layer--pink">INKLOOK</span>
        <span className="footer__layer footer__layer--blue">INKLOOK</span>
        <span className="footer__layer">INKLOOK</span>
      </div>
    </footer>
  );
}
