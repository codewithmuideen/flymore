import React from "react";
import { motion } from "framer-motion";
import images from "../constants/images";
import { AiOutlineArrowRight } from "react-icons/ai";
const About = () => {
  // Framer Motion Variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeInOut" } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeInOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2, ease: "easeInOut" } },
    hover: { scale: 1.05, transition: { duration: 2 } },
  };

  const buttonHover = {
    hover: { scale: 1.1, transition: { duration: 2, type: "spring", stiffness: 300 } },
  };

  return (
    <section
      className="py-1 px-10"
      style={{ fontFamily: "Tahoma", fontSize: "16px" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Content Section */}
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <motion.p
            className="text-green-600 font-semibold mb-2"
            style={{ fontWeight: 800, fontSize: "30px", color: "#1C6195" }}
          >
            About Us
          </motion.p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 pt-5">
            Explore all tours of the world with us.
          </h2>

          <p className="text-gray-600 mb-6">
            At Flymore, we offer exceptional travel experiences that go beyond
            just touring. With our expertise and passion for adventure, we
            ensure that every trip is unforgettable and tailored to your needs.
            Let us help you explore the world in the most exciting and
            comfortable way possible.
          </p>

          {/* Feature List */}
          <motion.ul
            className="space-y-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature Item 1 */}
            <motion.li
              className="flex items-start gap-4"
              variants={listItemVariants}
            >
              <div className="rounded-full text-xl flex items-center justify-center">
                <motion.img
                  src={images.plane}
                  style={{
                    width: "100%",
                    boxShadow: "3px 4px 4px lightgray",
                    borderRadius: "50%",
                  }}
                  alt="Tour Guide Icon"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div>
                <h3
                  className="text-lg font-medium text-gray-800"
                  style={{ fontWeight: 800 }}
                >
                  Expert Tour Guides
                </h3>
                <p className="text-gray-600">
                  Our experienced and passionate tour guides are dedicated to
                  ensuring that your journey is not only informative but also
                  fun and full of discoveries. At Flymore, we make every
                  destination an exciting adventure.
                </p>
              </div>
            </motion.li>

            {/* Feature Item 2 */}
            <motion.li
              className="flex items-start gap-4"
              variants={listItemVariants}
            >
              <div className="rounded-full text-xl flex items-center justify-center">
                <motion.img
                  src={images.brief}
                  style={{
                    width: "100%",
                    boxShadow: "3px 4px 4px lightgray",
                    borderRadius: "50%",
                  }}
                  alt="Affordable Pricing Icon"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div>
                <h3
                  className="text-lg font-medium text-gray-800"
                  style={{ fontWeight: 800 }}
                >
                  Affordable & Flexible Pricing
                </h3>
                <p className="text-gray-600">
                  We believe that travel should be accessible to everyone.
                  Flymore offers competitive and flexible pricing options to fit
                  all budgets without compromising on the quality of your
                  experience.
                </p>
              </div>
            </motion.li>

            {/* Feature Item 3 */}
            <motion.li
              className="flex items-start gap-4"
              variants={listItemVariants}
            >
              <div className="rounded-full text-xl flex items-center justify-center">
                <motion.img
                  src={images.enjoy}
                  style={{
                    width: "100%",
                    boxShadow: "3px 4px 4px lightgray",
                    borderRadius: "50%",
                  }}
                  alt="Reliability & Comfort Icon"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div>
                <h3
                  className="text-lg font-medium text-gray-800"
                  style={{ fontWeight: 800 }}
                >
                  Reliability & Comfort
                </h3>
                <p className="text-gray-600">
                  Flymore guarantees a safe and comfortable journey, so you can
                  relax and enjoy your trip. With our reliable service and
                  trusted partners, every tour is meticulously planned to ensure
                  your comfort.
                </p>
              </div>
            </motion.li>
          </motion.ul>

          {/* Call to Action */}
          <a
  href="https://wa.me/2347055115282?text=Hello,%20I%20want%20to%20discover%20more%20about%20Flymore%20Travels"
  target="_blank"
  rel="noopener noreferrer"
> 
          <button
            className="flex items-center gap-2 text-white md:ml-8 font-semibold px-5 py-5 rounded-full duration-500 md:static"
            style={{ backgroundColor: "#1C6195" }}
          >
            BOOK NOW <AiOutlineArrowRight className="w-4 h-4" />
          </button>
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src={images.lady}
            alt="Tour Guide"
            className="w-full max-w-md md:max-w-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
