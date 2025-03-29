import React, { useState, useEffect } from "react";
import skillData from "../../Json/skill.json";
import "./skill.css";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSkills(skillData);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h2 className="section-title">
          <i className="bx bx-library lib"></i>
          Skills &  Expertise
        </h2>
        <p className="section-subtitle">Technologies I've mastered</p>
      </div>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="skill-icon-container">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="skill-icon"
                  loading="lazy"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;