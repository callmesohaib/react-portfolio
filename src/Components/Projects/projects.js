import React, { useState, useEffect } from "react";
import projectData from "../../Json/project.json";
import "./project.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setProjects(projectData);
    setVisibleProjects(projectData.slice(0, 4));
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

  const renderProjects = () => {
    return visibleProjects.map((project, index) => {
      const direction = index % 2 === 0 ? "right" : "left";

      return (
        <motion.div
          variants={fadeIn(direction, 0.2)}
          initial="hidden"
          whileInView="show"
          style={{ opacity: 0.5 }}
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="project-box"
        >
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
        </motion.div>
      );
    });
  };

  const handleShowMore = () => {
    setIsExpanded(true);
    const remainingProjects = projects.slice(4);

    remainingProjects.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjects((prevVisibleProjects) => [
          ...prevVisibleProjects,
          project,
        ]);
      }, index * 300);
    });
  };

  const handleShowLess = () => {
    setIsExpanded(false);
    setVisibleProjects(projects.slice(0, 4));
    scrollToProjectSection();
  };

  const scrollToProjectSection = () => {
    const projectSection = document.getElementById("project");
    const offset = -80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = projectSection.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
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
