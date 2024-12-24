/** @format */

import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Photography Website. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={30} color="blue" />
          </a>
          <a
            href="https://www.instagram.com"
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
