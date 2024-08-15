import React from "react";
import "./navbar.css";
import logo from "../../assests/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Client</Link>
      </div>
      <button className="desktopMenuBtn">
      <i className='bx bx-message-rounded desktopMenuImg'></i>
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
