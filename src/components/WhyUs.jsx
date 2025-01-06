import React from "react";
import { motion } from "framer-motion";
import images from "../constants/images";

const WhyUs = () => {
  const reasons = [
    {
      id: 1,
      title: "We Love Family",
      description:
        "From family vacations to reunions, we create experiences that bring loved ones closer. Enjoy tailored packages designed for fun, bonding, and shared memories, ensuring every family member has a delightful adventure.",
      image: images.img1,
    },
    {
      id: 2,
      title: "We Love Celebrations",
      description:
        "Turn your milestones into unforgettable moments. Whether it’s a birthday, anniversary, or festive event, we curate celebration packages filled with joy, luxury, and personalized touches to make your special day extraordinary.",
      image: images.img2,
    },
    {
      id: 3,
      title: "We Love Cruising & Yachting",
      description:
        "Sail through pristine waters with unmatched luxury. Our cruising and yachting experiences feature scenic views, exclusive itineraries, and impeccable service, offering relaxation and adventure aboard the world’s most magnificent vessels.",
      image: images.img3,
    },
    {
      id: 4,
      title: "We Love Villa Rentals",
      description:
        "Experience ultimate privacy and comfort with our exclusive villa rentals. Each villa is carefully selected to provide top-notch amenities, breathtaking locations, and the perfect space for intimate gatherings or serene getaways.",
      image: images.img4,
    },
    {
      id: 5,
      title: "We Love Flying Private",
      description:
        "Travel in style and convenience with our private jet services. Avoid long lines and experience unmatched flexibility, personalized routes, and elite onboard amenities for a seamless and luxurious journey.",
      image: images.img5,
    },
    {
      id: 6,
      title: "We Love Special Events",
      description:
        "From weddings to galas, we turn your dreams into reality. Our team handles every detail to create breathtaking experiences, ensuring your special event is flawlessly executed and remembered for years to come.",
      image: images.img6,
    },
  ];

  return (
    <div className="px-10 py-10">
      {/* Main Heading Section */}
      <motion.div
        className="heading-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "left", marginBottom: "30px" }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1C6195" }}>Why Us</h2>
        <p style={{ color: "#555", fontSize: "1.2rem", lineHeight: "1.6" }}>
        Discover why our services are exceptional.</p>
      </motion.div>

      {/* Reasons Section */}
      {reasons.map((reason, index) => (
        <motion.div
          key={reason.id}
          className="one"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          {/* Image Section */}
          <div
            className="pics"
            style={{
              flex: "1",
              position: "relative",
            }}
          >
            <img
              src={reason.image}
              alt={reason.title}
              className="pics"
            />
          </div>

          {/* Text Section */}
          <div
            className="textme"
            style={{
              flex: "1",
              backgroundColor: "lightblue",
              padding: "30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              position: "relative",
              marginLeft: index % 2 === 0 ? "-50px" : "0",
              marginRight: index % 2 !== 0 ? "-50px" : "0",
              zIndex: 1,
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", textAlign: "left" }}>
              {reason.title}
            </h2>
            <p style={{ color: "#555", lineHeight: "1.6", textAlign: "left" }}>
              {reason.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WhyUs;
