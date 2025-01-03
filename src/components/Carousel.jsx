import React, { useState, useEffect, useRef } from "react";
import images from "../constants/images";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const timeRunning = 3000; // Time for transition effect
  const timeAutoNext = 7000; // Auto transition every 7 seconds
  let runTimeOut;
  let runNextAuto;

  const slides = [
    {
      img: images.hotel,
      title: "Effortless Ticketing Solutions",
      description:
        "Seamlessly book tickets anywhere in the world. Experience convenience, speed, and reliability with Flymore Travels, ensuring smooth journeys and unforgettable adventures. Your hassle-free travel experience starts here!",
    },
    {
      img: images.student,
      title: "Visa Services Made Easy",
      description:
        "Navigate your visa application with ease. Our experts ensure smooth processing, quick approvals, and personalized guidance. Trust Flymore Travels for a stress-free visa journey tailored to your needs.",
    },
    {
      img: images.hotel2,
      title: "Explore the World Stress-Free",
      description:
        "Plan your perfect getaway with our all-in-one travel services. From accommodations to insurance, Flymore Travels covers every detail, offering you a seamless and stress-free travel experience.",
    },
    {
      img: images.resort,
      title: "Corporate & Personal Travel Experts",
      description:
        "Whether for work or leisure, trust Flymore Travels to handle every detail. Experience excellence, personalized service, and unparalleled travel expertise for both corporate and personal journeys.",
    },
  ];
  

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, timeAutoNext);

    return () => {
      clearInterval(autoSlide);
      clearTimeout(runNextAuto);
    };
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    showSlider("next");
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    showSlider("prev");
  };

  const showSlider = (type) => {
    const carouselDom = carouselRef.current;
    carouselDom.classList.add(type);

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next", "prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={slide.img} alt={`Slide ${index}`} />
            <div className="overlay"></div>
            <div className="content">
              <div className="title md:whitespace-nowrap whitespace-normal text-sm md:text-base">
                {slide.title}
              </div>
              <div className="des">{slide.description}</div>
              <div className="buttons">
                <button
                  style={{
                    background: "white",
                    color: "black",
                  }}
                >
                  SEE MORE
                </button>
                <button
                  style={{
                    border: "2px solid white",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Carousel;
