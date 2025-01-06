import React from "react";
import styled from "styled-components";
import images from "../constants/images";  
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Tours",
    "Services",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "FAQS",
    "Testimonials",
  ];

  return (
    <Container>
      <div className="upper-footer" style={{margin:'3%'}}>
        <div className="col">
          <div className="brand">
            <div className="logo">
              {/* Replace with your logo */}
              <h2 style={{ fontWeight: 600, fontFamily: 'Tahoma' }}>CONTACT INFO</h2> <br /><br />
            </div>
            <p className="description">
              FlyMore Travels: Your gateway to unforgettable journeys.
            </p>
          </div>
          <ul>
            <li>
              <FaPhoneAlt size={18} /> <span> (+234) 81 3432 4983 </span>
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
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2 style={{ fontWeight: 600, fontFamily: 'Tahoma' }}>SUPPORT</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2 style={{ fontWeight: 600, fontFamily: 'Tahoma' }}>NEWSLETTERS</h2>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
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
          Copyright &copy; 2025 Flymore Travels. Designed by{" "}
          <a href="https://royeweb.vercel.app">OlamiTobi Technologies</a>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${images.aboutImg}); /* Replace 'aboutImg' with your image key */
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
          background-color: rgba(0, 188, 212, 0.7); /* Match with your button color */
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
    }
  }
`;
