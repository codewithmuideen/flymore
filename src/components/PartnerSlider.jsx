import React from "react";

const PartnersSlider = ({ logos }) => {
  return (
    <div className="partners-slider-container">
      <div className="partners-slider">
        {logos.map((logo, index) => (
          <div className="partner-item" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSlider;
