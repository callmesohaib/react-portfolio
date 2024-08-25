import React from "react";
import "./new.css";
import projectData from "../../Json/project.json";

const New = () => {
  return (
    <section className="pro" id="pro" style={{ color: "white" }}>
      <h2 className="heading" style={{ color: "white" }}>
        <i class="fa-solid fa-laptop-code laptop"></i>
        Projects
      </h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <h1>{project.title}</h1>
            <img
              src={require(`../../ProjectImages/${project.img}`)}
              alt={project.title}
            />
            <p>{project.description}</p>
            <a
              href={project.codeLink}
              className="btn code"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default New;
