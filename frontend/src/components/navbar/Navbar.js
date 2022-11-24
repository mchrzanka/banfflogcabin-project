import React, { useState } from "react";
import "../../scss/components/_navbar.scss";
import logo from "../../img/logo.png"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <header>
        <nav role="navigation" className="navContainer">
          <div className="logo-container">
            <a href="/">
              <img
                alt="Banff Log Cabin Logo"
                src={logo}
                className="logo"
              />
            </a>
          </div>
          <div className={isActive ? "mobile-menu is-active" : "mobile-menu"}>
            <ul>
              <li className="navitem">
                <a href="/">Home</a>
              </li>
              <li className="navitem">
                <a href="/aboutus">About Us</a>
              </li>{" "}
              <li className="navitem">
                <a href="/ourcabin">Our Cabin</a>
              </li>
              <li className="navitem">
                <a href="/rates">Rates</a>
              </li>
              <li className="navitem">
                <a href="/contact">Contact</a>
              </li>
              <li className="booknow-nav">
                <a href="/bookingterms">Book Now</a>
              </li>
            </ul>
          </div>

          <button
            onClick={handleClick}
            aria-label="Main Menu"
            className={isActive ? "hamburger hammy-is-active" : "hamburger"}
          >
            <span className="roofline"></span>
            <span className="roofline2"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
