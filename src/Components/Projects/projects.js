import React, { useState, useEffect } from "react";
import projectData from "../../Json/project.json";
import "./project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };
  const images = importAll(
    require.context("../../ProjectImages", false, /\.(png|jpe?g|svg)$/)
  );

  const visibleProjects = isExpanded ? projects : projects.slice(0, 4);

  const renderProjects = () => {
    return visibleProjects.map((project, index) => (
      <div key={index} className="project-box visible">
        <div className="img">
          <img src={images[project.img]} alt={project.title} />
        </div>
        <div className="desc">
          <div className="project-heading">{project.title}</div>
          <p>{project.description}</p>
          <a
            href={project.codeLink}
            className="btn code"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    ));
  };

  return (
    <section className="project" id="project">
      <h2 className="heading" style={{ color: "white" }}>
        Projects
      </h2>
      <div className="main-section" id="project-container">
        {renderProjects()}
      </div>
      <div
        className="btn show"
        onClick={() => setIsExpanded(true)}
        style={{
          display: isExpanded || projects.length <= 4 ? "none" : "block",
        }}
      >
        Show more
      </div>
      <a href="#project">
        <div
          className="btn less"
          onClick={() => setIsExpanded(false)}
          style={{ display: isExpanded ? "block" : "none" }}
        >
          Show less
        </div>
      </a>
    </section>
  );
};

export default Project;
