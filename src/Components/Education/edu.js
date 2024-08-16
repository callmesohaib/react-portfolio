import React from "react";
import "./edu.css";
import scl from "../../assests/school.jpeg";
import clg from "../../assests/pgc.jpg";
import uni from "../../assests/uet.jpg";

const Education = () => {
  return (
    <section id="education">
      <h2 className="heading" style={{ color: "white" }}>
        Education
      </h2>

      <div className="eduBars">
        <div className="eduBar">
          <img src={scl} alt="" className="eduBarImg" />
          <div className="eduBarText">
            <h3>Bab-e-Arqam Model High School</h3>
            <p>Science</p>
            <h4>2018 - 2020</h4>
          </div>
        </div>
        <div className="eduBar">
          <img src={clg} alt="" className="eduBarImg" />
          <div className="eduBarText">
            <h3>Punjab Group of Colleges</h3>
            <p>Pre-Engineering</p>
            <h4>2020 - 2022</h4>
          </div>
        </div>
        <div className="eduBar">
          <img src={uni} alt="" className="eduBarImg" />
          <div className="eduBarText">
            <h3>University of Engineering and Technology</h3>
            <p>Computer Science</p>
            <h4>2022 - Present</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
