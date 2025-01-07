import React from "react";
import styled from "styled-components";
import images from "../constants/images"; // Correct import from constants
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion"; // Import framer-motion

export default function Destinations() {
  const data = [
    {
      name: "Cuba City",
      image: images.cuba,
    },
    {
      name: "Paris",
      image: images.paris,
    },
    {
      name: "Japan",
      image: images.japan,
    },
  ];

  return (
    <Section
      id="destination"
      className="py-1 px-1 sm:py-12 sm:px-12"
      style={{ fontFamily: "tahoma", fontSize: "16px" }}
    >
      <motion.div
        className="info"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>
          Top Destinations In The World
        </h2>
        <p>
          Discover breathtaking destinations around the globe, where
          unforgettable experiences, rich cultures, and stunning landscapes
          await. Explore the beauty, adventure, and wonder of the world's most
          iconic locations and start your journey today!
        </p>
        <a
  href="https://wa.me/2347055115282?text=Hello,%20I%20want%20to%20discover%20more%20about%20Flymore%20Travels"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="flex items-center gap-2 text-white md:ml-8 font-semibold px-5 py-5 rounded-full duration-500 md:static"
    style={{ backgroundColor: "#1C6195" }}
  >
    DISCOVER MORE <AiOutlineArrowRight className="w-4 h-4" />
  </button>
</a>

      </motion.div>

      <motion.div
        className="destinations"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {data.map(({ name, image }) => (
          <motion.div
            className="destination"
            key={name}
            whileHover={{ scale: 1.1 }} // Add hover scaling
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="image">
              <img src={image} alt={`${name} destination`} />
            </div>
            <div className="name">
              <h3>{name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 5rem;

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }

  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination {
      position: relative;
      overflow: hidden;
      img {
        height: 20rem;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
        transition: transform 0.5s ease; /* Smooth hover animation */
        cursor: pointer; /* Change cursor on hover */
      }
      img:hover {
        transform: scale(1.1); /* Zoom in effect */
      }
      .name {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, #ffffff14, #000000ae);
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin: 1rem;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
