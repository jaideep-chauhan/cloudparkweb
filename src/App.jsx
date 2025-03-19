import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Oufleet from "./components/Ourfleet";
import WarehousingSolutions from "./components/WarehousingSolutions";
import TruckandTrailer from "./components/TruckandTrailer";
import RequestFormMap from "./components/RequestFormMap";
import Footer from "./components/Footer";
import "./App.css"
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Oufleet />
      <WarehousingSolutions />
      <TruckandTrailer />
      <RequestFormMap />
      <SubscribeSection/>
      <Footer/>
    </>
  );
}

export default App;
