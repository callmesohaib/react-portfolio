import React, { useState, useEffect } from "react";
import skillData from "../../Json/skill.json";
import "./skill.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSkills(skillData);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleShowMore = () => {
    const newShowMore = !showMore;
    setShowMore(newShowMore);
    
    if (!newShowMore) {
      setTimeout(() => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
          skillsSection.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }, 100);
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2 className="heading">
          <i className="bx bx-library lib"></i>
          <span>Skills & <span className="highlight">Expertise</span></span>
        </h2>
        <p className="subheading">Technologies I work with</p>
      </div>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.05, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              className={`skill-card ${
                (index >= 6 && !showMore && isMobile) ? "hidden" : "visible"
              }`}
            >
              <div className="skill-inner">
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} loading="lazy" />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {(isMobile && skills.length > 6) && (
          <button className="show-more-btn" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
            <i className={`bx bx-chevron-${showMore ? 'up' : 'down'}`}></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default Skill;