import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import IntroSection from "./components/IntroSection.jsx";
import Services from "./components/Services.jsx";
import MerchandiseShowcase from "./components/MerchandiseShowcase.jsx";
import Process from "./components/Process.jsx";
import EventSection from "./components/EventSection.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import WhyInklook from "./components/WhyInklook.jsx";
import Testimonials from "./components/Testimonials.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/site.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <IntroSection />
        <Services />
        <MerchandiseShowcase />
        <Process />
        <EventSection />
        <CaseStudies />
        <WhyInklook />
        <Testimonials />
        <QuoteForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
