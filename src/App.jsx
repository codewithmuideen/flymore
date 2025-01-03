import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import PartnersSlider from "./components/PartnerSlider"; // Importing PartnersSlider Component

const App = () => {
  const logos = [
    { src: "lagos.webp", alt: "Partner 1" },
    // { src: "olamitobi.png", alt: "Partner 2" },
    { src: "templars.png", alt: "Partner 3" },
    { src: "waka.png", alt: "Partner 4" },
    { src: "airpeace.jpg", alt: "Partner 5" },
    { src: "arik.jpg", alt: "Partner 6" },
    { src: "aiico.png", alt: "Partner 7" },
    { src: "quickteller.png", alt: "Partner 8" },
    // Add more logos here
  ];

  return (
    <div className="App">
      <Header />
      <Carousel />
      <section className="partners-section">
        <h2>Our Partners</h2>
        <PartnersSlider logos={logos} /> {/* PartnersSlider component here */}
      </section>
    </div>
  );
}

export default App;
