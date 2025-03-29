import React, { useState, useEffect } from "react";
import skillData from "../../Json/skill.json";
import "./skill.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setSkills(skillData);
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setVisibleCount(mobile ? (showMore ? skillData.length : 6) : skillData.length);
    };
    
    setReduceMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [showMore]);

  const toggleShowMore = () => {
    const newShowMore = !showMore;
    setShowMore(newShowMore);
    
    if (!newShowMore) {
      setTimeout(() => {
        const skillsHeader = document.querySelector(".skills-header");
        if (skillsHeader) {
          const offset = 125; 
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = skillsHeader.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
      }
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
        <motion.div
          variants={reduceMotion ? {} : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: isMobile ? 0.1 : 0.2 }}
          className="skills-grid"
        >
          {skills.slice(0, visibleCount).map((skill, index) => (
            <motion.div
              variants={reduceMotion ? {} : fadeIn("up", 0.2)}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? false : "show"}
              whileHover={isMobile || reduceMotion ? {} : { scale: 1.05, opacity: 1 }}
              viewport={{ once: false, amount: isMobile ? 0.1 : 0.2 }}
              transition={{ 
                type: "tween",
                ease: "easeOut",
                duration: isMobile ? 0.3 : 0.5
              }}
              key={index}
              className="skill-card"
            >
              <div className="skill-inner">
                <div className="skill-icon">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    loading="lazy"
                    decoding="async"
                    width="36"
                    height="36"
                  />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
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