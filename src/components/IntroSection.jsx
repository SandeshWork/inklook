import Reveal from "./Reveal.jsx";

export default function IntroSection() {
  return (
    <section id="about" className="intro">
      <div className="container intro__inner">
        <Reveal as="h2" className="intro__heading">
          More than merchandise.
        </Reveal>

        <div className="intro__body">
          <Reveal as="p" delay={0.05}>
            We don&rsquo;t just print your logo on a T-shirt.
          </Reveal>
          <Reveal as="p" delay={0.1}>
            We help create branded experiences — from the first product idea to
            the moment it lands in someone&rsquo;s hands.
          </Reveal>
        </div>

        <Reveal as="p" className="intro__statement" delay={0.15}>
          The best swag isn&rsquo;t the one people receive.
          <br />
          It&rsquo;s the one they keep.
        </Reveal>
      </div>
    </section>
  );
}
