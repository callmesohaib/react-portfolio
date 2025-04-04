import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assests/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.querySelector(".navMenu");
      const hamburger = document.querySelector(".hamburger");

      if (
        showMenu &&
        navMenu &&
        hamburger &&
        !navMenu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  const navLinks = [
    { to: "intro", label: "Home", offset: -100 },
    { to: "education", label: "Education", offset: -70 },
    { to: "skills", label: "Skills", offset: -70 },
    { to: "pro", label: "Projects", offset: -70 },
    { to: "contact", label: "Contact", offset: -70 },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="logo" />
        </div>

        <div className="desktopMenu">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              activeClass="active"
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={link.offset}
              className="desktopMenuListItem"
            >
              <span className="nav-text">{link.label}</span>
              <span className="nav-indicator"></span>
            </Link>
          ))}
        </div>

        <button
          className={`hamburger ${showMenu ? "active" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`navMenu ${showMenu ? "show" : ""}`}>
        <div className="mobile-menu-container">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              activeClass="active"
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={link.offset}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {showMenu && (
        <div className="menu-overlay" onClick={() => setShowMenu(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
