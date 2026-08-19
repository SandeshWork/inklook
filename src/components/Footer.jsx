import { Mail, MessageCircle } from "lucide-react";

// Instagram / LinkedIn glyphs, drawn to match lucide's stroke style —
// lucide-react no longer ships brand/logo icons.
function InstagramIcon({ size = 16, strokeWidth = 1.8, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, strokeWidth = 1.8, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="7.5" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <path d="M11.5 17v-4.2c0-1.5 1-2.3 2.2-2.3 1.2 0 2.1.8 2.1 2.3V17" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
    </svg>
  );
}

const exploreLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Placeholder social links — replace with InkLook's real accounts.
const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Email", href: "mailto:hello@inklook.example", icon: Mail },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">INKLOOK</p>
          <p className="footer__tagline">Merchandise. Gifting. Events.</p>
          <p className="footer__description">
            Custom merchandise and branded experience solutions for brands,
            communities and teams.
          </p>
        </div>

        <div className="footer__col">
          <h3>Explore</h3>
          <ul>
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Connect</h3>
          <ul className="footer__social">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} aria-label={link.label}>
                  <link.icon size={16} strokeWidth={1.8} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 InkLook. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
