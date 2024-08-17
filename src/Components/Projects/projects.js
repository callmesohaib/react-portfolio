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

  const scrollToProjectSection = () => {
    const projectSection = document.getElementById("project");
    const offset = -80; // Adjust this based on the height of any fixed header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = projectSection.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleShowMore = () => setIsExpanded(true);

  const handleShowLess = () => {
    setIsExpanded(false);
    scrollToProjectSection();
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
        onClick={handleShowMore}
        style={{
          display: isExpanded || projects.length <= 4 ? "none" : "block",
        }}
      >
        Show more
      </div>
      <div
        className="btn less"
        onClick={handleShowLess}
        style={{ display: isExpanded ? "block" : "none" }}
      >
        Show less
      </div>
    </section>
  );
};

export default Project;
