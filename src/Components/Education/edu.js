"use client";

import { useEffect, useRef, useState } from "react";
import "./edu.css";
import schoolImage from "../../assests/school.jpeg";
import pgcImage from "../../assests/pgc.jpg";
import uetImage from "../../assests/uet.jpg";

const GraduationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Education data
const educationData = [
  {
    id: 1,
    institution: "Bab-e-Arqam Model High School",
    program: "Science",
    period: "2018 - 2020",
    status: "completed",
    image: schoolImage,
  },
  {
    id: 2,
    institution: "Punjab Group of Colleges",
    program: "Pre-Engineering",
    period: "2020 - 2022",
    status: "completed",
    image: pgcImage,
},
  {
    id: 3,
    institution: "University of Engineering and Technology",
    program: "BS Computer Science",
    period: "2022 - 2026",
    status: "pursuing",
    image: uetImage,
},
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Check if element is in viewport
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  const handleScroll = () => {
    if (sectionRef.current && isInViewport(sectionRef.current)) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="education" ref={sectionRef}>
      <div className="container">
        <div className={`education-header ${isVisible ? "animate" : ""}`}>
          <h2 className="section-title">
            <span> Education &nbsp;</span> & <span>&nbsp; Credentials</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my academic journey and educational
            qualifications
          </p>
        </div>

        <div className="education-cards">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`education-card ${isVisible ? "animate" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.institution}
                />
                <div className="image-overlay"></div>
                <div className="period-badge">{item.period}</div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="institution">{item.institution}</h3>
                  <div className={`status-badge ${item.status}`}>
                    {item.status === "completed" ? (
                      <CheckCircleIcon />
                    ) : (
                      <ClockIcon />
                    )}
                    <span>
                      {item.status === "completed" ? "Completed" : "Pursuing"}
                    </span>
                  </div>
                </div>
                <div className="program">{item.program}</div>           
                <div className="card-footer">
                  <div className="date">
                    <CalendarIcon />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
