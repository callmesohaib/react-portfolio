import React from "react";
import "./new.css";
import projectData from "../../Json/project.json";
import { Link } from "react-scroll";

const New = () => {
  return (
    <section className="pro" id="pro" style={{ color: "white" }}>
      <h2 className="heading" style={{ color: "white" }}>
        <i class="fa-solid fa-laptop-code laptop"></i>
        Projects
      </h2>
      <div className="projectNavbar">
        <Link className="projectMenuList">All</Link>
        <Link className="projectMenuList">Frontend</Link>
        <Link className="projectMenuList">Backend</Link>
        <Link className="projectMenuList">Python</Link>
      </div>
      <div className="projects">
        {projectData.map((project, index) => (
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
                <i class="bx bxl-github git"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default New;
