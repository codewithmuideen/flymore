import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Add a scroll event listener with a cleanup
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 200);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Div>
      <button
        className={`${visible ? "block" : "none"}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;

  .none {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .block {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    border: none;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 1000;

    &:hover {
      transform: scale(1.1);
      background: linear-gradient(45deg, #2575fc, #6a11cb);
    }

    svg {
      color: white;
      font-size: 1.5rem;
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
      bottom: 30px;
    }
  }
`;

export default ScrollToTop;