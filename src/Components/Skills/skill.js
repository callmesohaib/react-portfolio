import React, { useState, useEffect } from "react";
import skillData from "../../Json/skill.json";
import "./skill.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setSkills(skillData);
  }, []);

  const showMoreSkills = () => setShowMore(true);
  const showLessSkills = () => {
    setShowMore(false);
    scrollToSkillsSection();
  };

  const scrollToSkillsSection = () => {
    const skillsSection = document.getElementById("skills");
    const offset = -80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = skillsSection.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i class="bx bx-library lib"></i>
        Skills & Abilities
      </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {skills.map((skill, index) => (
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              style={{ opacity: 0.5 }}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className={`bar ${
                index >= 6 && !showMore ? "hidden" : "visible"
              }`}
            >
              <div className="info">
                <img src={skill.icon} alt="skill" />
                <span>{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        {!showMore ? (
          <div className="btn skill-show" onClick={showMoreSkills}>
            Show more
          </div>
        ) : (
          <div className="btn skill-less" onClick={showLessSkills}>
            Show less
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
