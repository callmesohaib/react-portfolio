import React from "react";
import "./intro.css";
import bg from "../../assests/sohaibCrop.png";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
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

        <Link>
          <button className="btn">
            Hire Me
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
