/** @format */

import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center px-2">
        <p>
          &copy; {new Date().getFullYear()} Spakle Lens Photography. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.tiktok.com/@sparkle_lens?_t=8shViF8SuzW&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTiktok size={30} color="black" />
          </a>
          <a
            href="https://www.instagram.com/sparkle_lens_studio/profilecard/?igsh=MXF6OGxneGEwN3R6MA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={30} color="red" />
          </a>
          <a
            href="https://wa.me/+233543496077"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray"
          >
            <FaWhatsapp size={30} color="green" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
