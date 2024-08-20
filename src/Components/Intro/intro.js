import React from "react";
import "./intro.css";
import bg from "../../assests/sohaibCrop.png";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import CV from "../../CV.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Intro = () => {
  return (
    <section id="intro">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="introContent"
      >
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sohaib </span>Ikram
          <br />
          <span className="introJob">
            <TypeAnimation
              sequence={[
                "Mern Stack Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Programmer",
                1000,
                "Code Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </span>
        <p className="introPara">
          I'm a passionate and dedicated Mern Stack Web Developer with a knack
          for solving complex problems and a love for crafting elegant and
          efficient web solutions.
        </p>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          style={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          className="social"
        >
          <a href="https://www.linkedin.com/in/sohaib-ikram249/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/callmesohaib">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/ufff_yawrrr_/?next=%2F">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.facebook.com/sohaib.ikram.9461">
            <i className="bx bxl-facebook-circle"></i>
          </a>
        </motion.div>

        <div className="buttons">
          <a href={CV} download="Sohaib-CV.pdf" className=" Resume btn">
            Resume
            <i className="bx bxs-note cv"></i>
          </a>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <button className="btn">
              Hire Me
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </Link>
        </div>
      </motion.div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
