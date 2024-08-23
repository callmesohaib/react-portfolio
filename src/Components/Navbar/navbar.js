import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assests/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="pro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>

      <i
        className="bx bx-menu-alt-right mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      ></i>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
