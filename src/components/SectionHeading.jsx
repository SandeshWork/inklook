import Reveal from "./Reveal.jsx";

/**
 * Consistent section intro: small uppercase eyebrow + large heading,
 * with an optional supporting line. `align` = "left" | "center".
 */
export default function SectionHeading({
  eyebrow,
  heading,
  supporting,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${className}`.trim()}
    >
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className="section-heading__title" delay={0.08}>
        {heading}
      </Reveal>
      {supporting && (
        <Reveal as="p" className="section-heading__supporting" delay={0.14}>
          {supporting}
        </Reveal>
      )}
    </div>
  );
}
