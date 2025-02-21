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
import images from "./constants/images";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const logos = [
    { src: images.templars, alt: "Partner 3" },
    { src: images.waka, alt: "Partner 4" },
    { src: images.arik, alt: "Partner 6" },
  ];

  return (
    <div className="App">
      <GlobalStyles />
      <ScrollToTop />
      <Header />
     <section id="home">
     <Carousel />
     </section>
      <section className="partners-section">
        <h2>Our Partners</h2>
        <PartnersSlider logos={logos} /> {/* PartnersSlider component here */}
      </section>
      <section id="about">
      <About />
      </section>
      <section id="tour">
      <Tours />
      </section>
     <section id="destination">
     <Destinations />
     </section>
      <section id="service">
      <Services />
      </section>
      <WhyUs />
     <section id="testimonial">
     <Testimonial />
     </section>
      <section id="recommend">
      <Recommend />
      </section>
      <section id="contact">
      <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
