import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Tapes from "./components/Tapes.jsx";
import Manifesto from "./components/Manifesto.jsx";
import Swatches from "./components/Swatches.jsx";
import Configurator from "./components/Configurator.jsx";
import Shelf from "./components/Shelf.jsx";
import JobTicket from "./components/JobTicket.jsx";
import Receipt from "./components/Receipt.jsx";
import Posters from "./components/Posters.jsx";
import Reasons from "./components/Reasons.jsx";
import WorkOrder from "./components/WorkOrder.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/print.css";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Tapes />
        <Manifesto />
        <Swatches />
        <Configurator />
        <Shelf />
        <JobTicket />
        <Receipt />
        <Posters />
        <Reasons />
        <WorkOrder />
      </main>
      <Footer />
    </>
  );
}
