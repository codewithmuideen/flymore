import React from "react";
import styled from "styled-components";
import images from "../constants/images";

export default function Testimonial() {
  return (
    <Section id="blog" className="px-10">
      <div className="title">
        <h1>What our Happy Customers Say About Us</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={images.testimonial1} alt="testimonials" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={images.avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Olumide Apata</h3>
              {/* <span>Full Stack Developer</span> */}
            </div>
          </div>
          <p className="desrciption">
            Flymore Travels planned my dream vacation seamlessly. From flights to hotels, 
            their team ensured everything was perfect. Amazing service and care! Highly 
            recommend for stress-free travel!
          </p>
        </div>
        <div className="testimonial-image-two">
          <img src={images.testimonial2} alt="testimonials" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .testimonials {
    display: flex;
    gap: 4rem;
    .testimonial {
      margin-top: 4rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-top: 0.5rem solid var(--primary-color);
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 3rem;
          }
        }
        .info {
          span {
            color: var(--primary-color);
          }
        }
      }
      .desrciption {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 5rem;
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .testimonials {
      flex-direction: column;
      overflow: hidden;
      .testimonial-image-one,
      .testimonial-image-two {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;
