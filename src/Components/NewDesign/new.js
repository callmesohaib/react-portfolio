import React, { useState, useEffect } from "react";
import "./new.css";
import projectData from "../../Json/project.json";
import { motion } from "framer-motion";

const New = () => {
  const [menuItems, setMenuItem] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const timeouts = [];

  const renderProjects = (projects) => {
    setMenuItem([]);

    timeouts.forEach((timeout) => clearTimeout(timeout));
    timeouts.length = 0;

    projects.forEach((project, index) => {
      const timeoutId = setTimeout(() => {
        setMenuItem((prevItems) => [...prevItems, project]);
      }, index * 300);
      timeouts.push(timeoutId);
    });
  };

  useEffect(() => {
    renderProjects(projectData);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const filterItem = (category) => {
    setActiveCategory(category);
    const filteredProjects =
      category === "All"
        ? projectData
        : projectData.filter((curElement) => curElement.category === category);

    renderProjects(filteredProjects);
  };

  return (
    <section className="pro" id="pro" style={{ color: "white" }}>
      <h2 className="heading" style={{ color: "white" }}>
        <i className="fa-solid fa-laptop-code laptop"></i>
        Projects
      </h2>
      <div className="projectNavbar">
        <button
          className={`projectMenuList ${
            activeCategory === "All" ? "active" : ""
          }`}
          onClick={() => filterItem("All")}
        >
          All
        </button>
        <button
          className={`projectMenuList ${
            activeCategory === "Frontend" ? "active" : ""
          }`}
          onClick={() => filterItem("Frontend")}
        >
          Frontend
        </button>
        <button
          className={`projectMenuList ${
            activeCategory === "Backend" ? "active" : ""
          }`}
          onClick={() => filterItem("Backend")}
        >
          Backend
        </button>
        <button
          className={`projectMenuList ${
            activeCategory === "Coding" ? "active" : ""
          }`}
          onClick={() => filterItem("Coding")}
        >
          Coding
        </button>
      </div>
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

export default New;
