import React, { useState } from "react";
import styled from "styled-components";
import images from "../constants/images";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [email, setEmail] = useState(""); // Email state
  const [emailError, setEmailError] = useState(""); // Email error state

  const quickLinks = [
    { label: "About Us", link: "#about" },
    { label: "Destinations", link: "#recommend" },
    { label: "Tours", link: "#tour" },
    { label: "Services", link: "#services" },
    { label: "Contact Us", link: "#contact" },
  ];

  const supportLinks = [
    { label: "Customer Support", link: "#support" },
    { label: "Privacy Policy", link: "#privacy" },
    { label: "Terms & Condition", link: "#terms" },
    { label: "FAQs", link: "#footer" },
    { label: "Testimonials", link: "#testimonial" },
  ];

  // Handle email subscribe button click
  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      setIsModalOpen(true); // Show modal if email is valid
      setEmailError(""); // Reset any existing errors
    } else {
      setEmailError("Please enter a valid email address."); // Show error if email is invalid
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <h2 style={{ fontWeight: 600, fontFamily: 'Tahoma' }}>CONTACT INFO</h2> <br /><br />
            </div>
            <p className="description">
              FlyMore Travels: Your gateway to unforgettable journeys.
            </p>
          </div>
          <ul>
            <li>
              <FaPhoneAlt size={18} /> <span> (+234) 705 511 5282 </span>
            </li>
            <li>
              <FaEnvelope size={18} /> <span>info@flymoretravels.com</span>
            </li>
            <li>
              <FaMapMarkerAlt size={18} /> <span>5, Weloye Olarinoye Street, Awoyaya, Ajah, Lagos</span>
            </li>
          </ul>
        </div>

        <div className="col">
          <h2 style={{ fontWeight: 600, fontFamily: 'Tahoma' }}>QUICK LINKS</h2>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <h2 style={{ fontWeight: 600, fontFamily: 'Tahoma' }}>SUPPORT</h2>
          <ul>
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <h2 style={{ fontWeight: 600, fontFamily: 'Tahoma' }}>NEWSLETTERS</h2>
          <form>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                required
              />
              <button onClick={handleSubscribe}>Subscribe Now</button>
              {emailError && <span style={{ color: 'red', marginTop: '10px' }}>{emailError}</span>} {/* Show error message */}
            </div>
          </form>
        </div>
      </div>
  
      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3 style={{color:'black'}}>You have subscribed to our newsletter!</h3>
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </ModalOverlay>
      )}

      <div className="social"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0% 1%',
          flexWrap: 'wrap', // Allow wrapping on smaller screens
        }}
      >
        <div className="logo logome">
          <img src={images.logowhite4} alt="logo" />
        </div>

        <div className="social-icons">
          <i>
            <FaFacebook size={20} />
          </i>
          <i>
            <FaInstagram size={20} />
          </i>
          <i>
            <FaTwitter size={20} />
          </i>
          <i>
            <FaLinkedin size={20} />
          </i>
        </div>
      </div>

      <div className="lower-footer">
        <span>
          Copyright &copy; 2025 Flymore Travels. Powered by{" "}
          <a href="https://royeweb.vercel.app">OlamiTobi Technologies</a>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${images.aboutImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  .upper-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 2px solid white;
    gap: 5rem;
    padding-bottom: 2rem;
    padding-top: 2rem;

    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h2 {
        color: white;
        font-size: 1.5rem;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--default-transition);
          color: white;
          display: flex;
          align-items: center;

          span {
            margin-left: 8px;
          }

          &:hover {
            color: var(--primary-color);
          }

          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }

      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 1rem 2rem;
          border: none;
          font-size: 1.1rem;
          color: #000;
          background-color: white;
        }

        button {
          padding: 1rem 2rem;
          background-color: #00bcd4;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #008c99;
        }
      }
    }
  }

  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    color: white;

    a {
      text-decoration: none;
      color: #00bcd4;
      font-weight: bold;
      &:hover {
        color: #008c99;
      }
    }
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    .social-icons {
      display: flex;
      gap: 1rem;

      i {
        background-color: #008c99;
        border-radius: 50%;
        padding: 10px;
        transition: all 0.3s ease;

        &:hover {
          background-color: rgba(0, 188, 212, 0.7);
          transform: scale(1.1);
        }
      }
    }

    .logo img {
      max-width: 200px;
      height: auto;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .upper-footer {
      grid-template-columns: 1fr;
      border-bottom: none;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;

  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: #008c99;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }

  button:hover {
    background-color: #007b8c;
  }
`;
