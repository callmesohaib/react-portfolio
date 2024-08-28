import React, { useState } from "react";
import "./new.css";
import projectData from "../../Json/project.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const New = () => {
  const [menuItems, SetMenuItem] = useState(projectData);

  const filterItem = (category) => {
    if (category === "All") {
      SetMenuItem(projectData); 
    } else {
      const updateList = projectData.filter((curElement) => {
        return curElement.category === category;
      });
      SetMenuItem(updateList);
    }
  };

  return (
    <section className="pro" id="pro" style={{ color: "white" }}>
      <h2 className="heading" style={{ color: "white" }}>
        <i className="fa-solid fa-laptop-code laptop"></i>
        Projects
      </h2>
      <div className="projectNavbar">
        <button className="projectMenuList" onClick={() => filterItem("All")}>
          All
        </button>
        <button className="projectMenuList" onClick={() => filterItem("Frontend")}>
          Frontend
        </button>
        <button className="projectMenuList" onClick={() => filterItem("Backend")}>
          Backend
        </button>
        <button className="projectMenuList" onClick={() => filterItem("Python")}>
          Python
        </button>
      </div>
      <div className="projects">
        {menuItems.map((project, index) => (
          <div className="project" key={index}>
            <img
              src={require(`../../ProjectImages/${project.img}`)}
              alt={project.title}
            />
            <div className="project_Info">
              <h1>{project.title}</h1>
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
        ))}
      </div>
    </section>
  );
};

export default New;
