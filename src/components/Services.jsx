import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import Framer Motion
import images from "../constants/images"; // Ensure your images are available in this file

export default function Services() {
  const data = [
    {
      icon: images.tic,
      title: "Ticketing",
      subTitle:
        "Book tickets effortlessly for flights, trains, buses, and more with our hassle-free booking services.",
    },
    {
      icon: images.vis,
      title: "Visa Services",
      subTitle:
        "We offer visa application services and provide assistance with required documentation and processing.",
    },
    // {
    //   icon: images.tra,
    //   title: "Travel Abroad",
    //   subTitle:
    //     "Plan and book your international trips with our tailored travel packages and expert advice.",
    // },
    {
      icon: images.tra,
      title: "Study Abroad",
      subTitle:
        "Explore educational opportunities across the globe with our expert study abroad services and guidance.",
    },
    {
      icon: images.cor,
      title: "Corporate Travel",
      subTitle:
        "Organize corporate trips, conferences, and meetings with ease and comfort through our corporate services.",
    },
    {
      icon: images.acc,
      title: "Travel Accommodation",
      subTitle:
        "Find the best accommodations near you or at your destination, from hotels to vacation rentals.",
    },
    {
      icon: images.ins,
      title: "Travel Insurance",
      subTitle:
        "Secure your travel plans with our comprehensive insurance options covering health, baggage, and cancellations.",
    },
    {
      icon: images.cons,
      title: "Travel Consultancy",
      subTitle:
        "Get expert travel advice to plan your trips, ensuring a stress-free and memorable travel experience.",
    },
  ];

  return (
    <Section id="services" style={{ fontFamily: "Tahoma", fontSize: "16px", padding: "2% 4%" }}>
      {/* Heading Section */}
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ color: "#1C6195", fontSize: "28px", fontWeight: "bold", textAlign: "center" }}>
          Our Services
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            maxWidth: "750px",
            margin: "30px auto",
          }}
        >
          We provide a wide range of services designed to meet all your travel needs, whether it's
          booking tickets, planning your trips, or assisting with visas.
        </p>
      </motion.div>
      {/* Services Section */}
      <div className="services">
        {data.map((service, index) => {
          return (
            <motion.div
              className="service mt-4"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon">
                <img src={service.icon} alt={service.title} style={{ width: "50%", height: "auto" }} />
              </div>
              <h3 style={{ color: "#1C6195", fontWeight: 700, fontSize: "20px" }}>{service.title}</h3>
              <p>{service.subTitle}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
  }
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    box-shadow:2px 3px 3px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
    text-align: center;
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .services {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .services {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
