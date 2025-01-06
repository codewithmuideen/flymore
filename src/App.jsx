import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import PartnersSlider from "./components/PartnerSlider"; 
import About from "./components/About";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import WhyUs from "./components/Whyus";
import Tours from "./components/Tours";
import Testimonial from "./components/Testimonial";
import Recommend from "./components/Recommend";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import GlobalStyles from "./GlobalStyles";


const App = () => {
  const logos = [
    { src: "templars.png", alt: "Partner 3" },
    { src: "waka.png", alt: "Partner 4" },
    { src: "arik.png", alt: "Partner 6" },
  ];

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Carousel />
      <section className="partners-section">
        <h2>Our Partners</h2>
        <PartnersSlider logos={logos} /> {/* PartnersSlider component here */}
      </section>
      <About />
      <Tours />
      <Destinations />
      <Services />
      <WhyUs />
      <Testimonial />
      <Recommend />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
