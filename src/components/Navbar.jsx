import React, { useState } from "react";


import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="">
        <img src='./images/assets/fav.png' alt="logo" className="w-[100px] h-[80px] " />
      </Link>
      <div className={`menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/" onClick={handleMenuClose}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleMenuClose}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={handleMenuClose}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={handleMenuClose}>Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleMenuClose}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;