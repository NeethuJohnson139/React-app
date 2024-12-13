import React, { useState, useEffect } from "react";
import "./navbar.css";
import LOGO from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbarColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar-active-color" : "navbar"}>
      <HiMenu className="menu-bars" onClick={toggle} />
      <a href="/">
        <img src={LOGO} alt="Group_15" className="Group_15" />
      </a>
      <Link to="/classes">
        <a href="/" className="menu-items">
          Classes
        </a>
      </Link>
      <Link to="/pricing">
        <a href="/" className="menu-items">
          Pricing
        </a>
      </Link>
      <Link to="/contact">
        <a href="/" className="menu-items">
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
