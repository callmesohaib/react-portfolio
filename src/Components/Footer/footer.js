import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a target="_blank" href="https://www.linkedin.com/in/sohaib-ikram249/">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a target="_blank" href="https://github.com/callmesohaib">
          <i className="bx bxl-github"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/sohaib.__.hoon/?next=%2F">
          <i className="bx bxl-instagram"></i>
        </a>
        <a target="_blank" href="https://www.facebook.com/sohaib.ikram.9461">
          <i className="bx bxl-facebook-circle"></i>
        </a>
      </div>
      <p className="copyright">&copy; Sohaib Ikram | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
