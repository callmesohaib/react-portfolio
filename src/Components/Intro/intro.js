"use client";

import { useState, useEffect, useRef } from "react";
import "./intro.css";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CV from "../../CV.pdf?url";
import sohaibImage from "../../assests/intro.webp";

const Intro = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const introRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      if (introRef.current) {
        const { left, top, width, height } =
          introRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.2 + i * 0.1,
      },
    }),
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="intro" ref={introRef}>
      <div className="intro-grid">
        <div className="intro-grid-overlay"></div>
      </div>

      <div className="intro-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="intro-container">
        <motion.div
          className="intro-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="intro-left">
            <motion.div className="intro-tag" variants={itemVariants}>
              <span className="tag-icon">👋</span>
              <span className="tag-text">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 className="intro-name" variants={itemVariants}>
              I'm <span className="highlight-text">Sohaib Ikram</span>
            </motion.h1>

            <motion.div className="intro-title" variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  "Mern Stack Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Programmer",
                  1000,
                  "Code Analyst",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>

            <motion.p className="intro-bio" variants={itemVariants}>
              Transforming ideas into exceptional digital experiences. I
              specialize in creating modern, responsive web applications with
              clean code and intuitive user interfaces.
            </motion.p>

            <motion.div className="intro-stats" variants={itemVariants}>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </motion.div>

            <motion.div className="intro-actions" variants={itemVariants}>
              <a href={CV} download="Sohaib_CV.pdf" className="btn btn-primary">
                Download Resume
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16L12 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 13L12 16L15 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 20H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-outline"
              >
                Contact Me
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="intro-right">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="intro-image-wrapper"
            >
              <motion.div
                className="intro-image"
                ref={imageRef}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isImageLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                style={{
                  transform: isDesktop
                    ? `perspective(1200px) rotateY(${
                        mousePosition.x * 10
                      }deg) rotateX(${-mousePosition.y * 10}deg)`
                    : "none",
                  willChange: "transform, opacity", // improves animation performance
                }}
              >
                <div className="image-container">
                  <img
                    src={sohaibImage || "/placeholder.svg"}
                    alt="Sohaib Ikram"
                    className={isDesktop ? "desktop-img" : "mobile-img"}
                    onLoad={() => setIsImageLoaded(true)}
                    loading="lazy"
                  />
                </div>

                <div className="image-decoration">
                  <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="decoration-svg"
                  >
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="190"
                      stroke="var(--secondary-color)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    <motion.path
                      d="M200,10 A190,190 0 0,1 390,200"
                      stroke="var(--secondary-color)"
                      strokeWidth="4"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  </motion.svg>
                </div>

                <div className="image-badge top">
                  <span className="badge-icon">💻</span>
                  <span className="badge-text">Full Stack</span>
                </div>

                <div className="image-badge bottom">
                  <span className="badge-icon">🚀</span>
                  <span className="badge-text">Problem Solver</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="intro-footer">
          <div className="social-links">
            {[
              {
                icon: "bxl-linkedin",
                url: "https://www.linkedin.com/in/sohaib-ikram249/",
              },
              { icon: "bxl-github", url: "https://github.com/callmesohaib" },
              {
                icon: "bxl-instagram",
                url: "https://www.instagram.com/sohaib.__.hoon/?next=%2F",
              },
              {
                icon: "bxl-facebook-circle",
                url: "https://www.facebook.com/sohaib.ikram.9461",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
              >
                <i className={`bx ${social.icon}`}></i>
              </motion.a>
            ))}
          </div>

          <div className="scroll-prompt">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M8 4L8 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                />
                <motion.path
                  d="M3 15L8 20L13 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
