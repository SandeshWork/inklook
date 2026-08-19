import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";

export default function FinalCTA() {
  return (
    <section className="section section--dark final-cta">
      <div className="container final-cta__inner">
        <Reveal as="p" className="final-cta__eyebrow">
          Got an idea?
        </Reveal>
        <Reveal as="h2" className="final-cta__heading" delay={0.06}>
          Let&rsquo;s turn it into something people remember.
        </Reveal>
        <Reveal as="p" className="final-cta__body" delay={0.12}>
          Whether you&rsquo;re planning an event, launching a brand, welcoming a
          new team or building a community — let&rsquo;s make something
          memorable.
        </Reveal>
        <Reveal delay={0.18}>
          <Button
            href="#contact"
            variant="secondary"
            className="final-cta__button"
          >
            Start a Project
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
