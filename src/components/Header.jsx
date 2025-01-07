import React, { useState } from "react";
import images from "../constants/images";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Tours", link: "#tour" },
    { name: "Services", link: "#service" },
    { name: "Testimonials", link: "#testimonial" },
    { name: "Attraction Tickets", link: "#recommend" },
    { name: "Contact", link: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  // Function to close the menu after a click
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="shadow-xl w-full fixed top-0 left-0 h-[12vh] z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={images.logo} alt="logo-icon" className="headerlogo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 md:my-0 my-7 font-medium"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-800 duration-500"
                onClick={closeMenu} // Close the menu on click
              >
                {link.name}
              </a>
            </li>
          ))}
               <a
  href="https://wa.me/2348063362208?text=Hello,%20I%20want%20to%20discover%20more%20about%20Flymore%20Travels"
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
