import React, { useState } from "react";
import "./new.css";
import projectData from "../../Json/project.json";

const New = () => {
  const [menuItems, setMenuItem] = useState(projectData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItem = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItem(projectData);
    } else {
      const updateList = projectData.filter((curElement) => {
        return curElement.category === category;
      });
      setMenuItem(updateList);
    }
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
          <div className="project" key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default New;
