import React, { useState, useEffect } from 'react';
import skillData from '../Json/skill.json';
import './skill.css'

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setSkills(skillData);
  }, []);

  const showMoreSkills = () => setShowMore(true);
  const showLessSkills = () => setShowMore(false);

  return (
    <section className="skills" id="skills">
      <h2 className="heading">Skills & <span>Abilities</span></h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`bar ${index >= 6 && !showMore ? 'hidden' : 'visible'}`}
            >
              <div className="info">
                <img src={skill.icon} alt="skill" />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
        {!showMore ? (
          <div className="btn skill-show" onClick={showMoreSkills}>
            Show more
          </div>
        ) : (
          <a href="#skills">
            <div className="btn skill-less" onClick={showLessSkills}>
              Show less
            </div>
          </a>
        )}
      </div>
    </section>
  );
};

export default Skill;
