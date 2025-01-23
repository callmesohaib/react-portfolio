import React, { useState, useEffect } from "react";
import "./projects.css";
import projectData from "../../Json/project.json";
import { motion } from "framer-motion";

const Project = () => {
  const [menuItems, setMenuItem] = useState([]);

  useEffect(() => {
    setMenuItem(projectData);
  }, []);

  return (
    <section className="pro" id="pro" style={{ color: "white" }}>
      <h2 className="heading" style={{ color: "white" }}>
        <i className="fa-solid fa-laptop-code laptop"></i>
        Projects
      </h2>
      <div className="projects">
        {menuItems.map((project, index) => (
          <motion.div
            className="project"
            key={index}
            initial={{ opacity: 0.2, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1],
              delay: index * 0.3,
            }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="image">
              <img
                src={require(`../../ProjectImages/${project.img}`)}
                alt={project.title}
              />
              <div className="project_Info">
                <p>{project.description}</p>
                <a
                  href={project.codeLink}
                  className="code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-github git"></i>
                </a>
              </div>
            </div>
            <div className="project_title">
              <h1>{project.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
