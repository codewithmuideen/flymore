import React, { useState } from "react";
import images from "../constants/images";
// import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Tours", link: "/" },
    { name: "Services", link: "/" }, // Changed link to '#' to prevent navigation
    { name: "Testimonials", link: "/" },
    { name: "Attraction Tickets", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="shadow-xl w-full fixed top-0 left-0 h-[12vh] z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={images.logo} alt="logo-icon" className="headerlogo" />
        </div>
        {/* Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link Items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className={`md:ml-8 md:my-0 my-7 font-semibold relative ${
                link.name === "Services" ? "dropdown" : ""
              }`}
              onMouseEnter={link.name === "Services" ? toggleDropdown : null}
              onMouseLeave={link.name === "Services" ? toggleDropdown : null}
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-800 duration-500"
                onClick={link.name === "Services" ? toggleDropdown : null}
              >
                {link.name}
              </a>
              {/* Dropdown Menu for Services */}
              {link.name === "Services" && dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg">
                  <li className="px-4 py-2 hover:bg-gray-200">Ticketing</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Visa Services</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Travel Abroad</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Corperate Travel</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Travel Accomodation</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Travel Insurance</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Travel COnsultancy</li>
                </ul>
              )}
            </li>
          ))}
          <button
            className="flex items-center gap-2 text-white md:ml-8 font-semibold px-5 py-5 rounded-full duration-500 md:static"
            style={{ backgroundColor: "#1C6195" }}
          >
            BOOK NOW <AiOutlineArrowRight className="w-4 h-4" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
