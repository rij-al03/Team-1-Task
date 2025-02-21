// import function useState and Image
//import React, { useState } from "react";
//import Logo from "../assets/logo.svg";

const Navbar = () => {
  // use useState for state management
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar fixed w-full transition-all py-4 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <a href="#home">
              <img src={Logo} alt="Logo." className="w-32 md:w-40" />
            </a>
          </div>
          {/* Menu Items */}
          <ul
            className={`md:flex gap-12 items-center md:static absolute w-full left-0 md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in ${
              isOpen ? "top-16" : "-top-96"
            }`}>
            <li className="py-2 md:py-0 text-center">
              <a
                href="#home"
                className="font-medium opacity-75 hover:opacity-100 transition-all">
                Home
              </a>
            </li>
            <li className="py-2 md:py-0 text-center">
              <a
                href="#about"
                className="font-medium opacity-75 hover:opacity-100 transition-all">
                About
              </a>
            </li>
            <li className="py-2 md:py-0 text-center">
              <a
                href="#services"
                className="font-medium opacity-75 hover:opacity-100 transition-all">
                Service
              </a>
            </li>
            <li className="py-2 md:py-0 text-center">
              <a
                href="#projects"
                className="font-medium opacity-75 hover:opacity-100 transition-all">
                Project
              </a>
            </li>
          </ul>
          {/* Social Media & Hamburger */}
          <div className="flex items-center gap-4">
            <div className="social">
              <a
                href="#footer"
                className="bg-blue-500 px-5 py-2 rounded-lg text-white font-bold hover:bg-blue-600 transition-all active:bg-blue-700 transition-all">
                Social Media
              </a>
            </div>
            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="text-3xl md:hidden focus:outline-none">
              <i className={`ri-${isOpen ? "close-line" : "menu-line"}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
