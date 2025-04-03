"use client"

import { useRef, useEffect } from "react"
import "./edu.css"
import { motion, useAnimation, useInView } from "framer-motion"
import schoolImage from "../../assests/school.jpeg";
import collegeImage from "../../assests/pgc.jpg";
import universityImage from "../../assests/uet.jpg";
const Education = () => {

  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 })
  const timelineControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      timelineControls.start("visible")
    }
  }, [isInView, timelineControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    }),
  }

  const yearVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.3,
        duration: 0.5,
        type: "spring",
      },
    }),
  }

  return (
    <section id="education">
      <div className="education-bg">
        <div className="education-bg-overlay"></div>
      </div>

      <div className="education-shape education-shape-1"></div>
      <div className="education-shape education-shape-2"></div>

      <div className="education-container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-title-wrapper">
            <div className="education-title-glow"></div>
            <h2 className="education-heading">
              <i className="bx bxs-graduation cap"></i>
              Education <span>Journey</span>
            </h2>
          </div>
          <p className="education-subtitle">My academic path that has shaped my knowledge and skills</p>
        </motion.div>

        <div className="education-timeline" ref={timelineRef}>
          <motion.div
            className="timeline-line"
            variants={lineVariants}
            initial="hidden"
            animate={timelineControls}
          ></motion.div>

          <motion.div
            className="timeline-dot timeline-dot-1"
            variants={dotVariants}
            custom={0}
            initial="hidden"
            animate={timelineControls}
          ></motion.div>

          <motion.div
            className="timeline-dot timeline-dot-2"
            variants={dotVariants}
            custom={1}
            initial="hidden"
            animate={timelineControls}
          ></motion.div>

          <motion.div
            className="timeline-dot timeline-dot-3"
            variants={dotVariants}
            custom={2}
            initial="hidden"
            animate={timelineControls}
          ></motion.div>

          <motion.div
            className="timeline-dot timeline-dot-4"
            variants={dotVariants}
            custom={3}
            initial="hidden"
            animate={timelineControls}
          ></motion.div>

          <motion.div
            className="education-cards"
            variants={containerVariants}
            initial="hidden"
            animate={timelineControls}
          >
            <motion.div className="education-card" variants={cardVariants} custom={0}>
              <motion.div className="year-marker" variants={yearVariants} custom={0}>
                2018 - 2020
              </motion.div>

              <div className="education-card-inner">
                <div className="education-card-image">
                  <img src={schoolImage} alt="Bab-e-Arqam Model High School" />
                </div>
                <div className="education-card-content">
                  <h3 className="education-card-title">Bab-e-Arqam Model High School</h3>
                  <p className="education-card-program">Science</p>
                  <p className="education-card-description">
                    Completed my high school education with a focus on scientific disciplines, building a strong
                    foundation for my future academic pursuits.
                  </p>
                  <div className="education-card-details">
                    <div className="education-card-date">
                      <i className="bx bx-calendar"></i>
                      <span>2018 - 2020</span>
                    </div>
                    <div className="education-card-status status-completed">
                      <i className="bx bx-check-circle"></i>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="education-card" variants={cardVariants} custom={1}>
              <motion.div className="year2" variants={yearVariants} custom={1}>
                2020 - 2022
              </motion.div>

              <div className="education-card-inner">
                <div className="education-card-image">
                  <img src={collegeImage || "/placeholder.svg"} alt="Punjab Group of Colleges" />
                </div>
                <div className="education-card-content">
                  <h3 className="education-card-title">Punjab Group of Colleges</h3>
                  <p className="education-card-program">Pre-Engineering</p>
                  <p className="education-card-description">
                    Pursued pre-engineering studies, focusing on mathematics, physics, and other technical subjects that
                    prepared me for my engineering degree.
                  </p>
                  <div className="education-card-details">
                    <div className="education-card-date">
                      <i className="bx bx-calendar"></i>
                      <span>2020 - 2022</span>
                    </div>
                    <div className="education-card-status status-completed">
                      <i className="bx bx-check-circle"></i>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="education-card" variants={cardVariants} custom={2}>
              <motion.div className="year-marker" variants={yearVariants} custom={2}>
                2022 - 2026
              </motion.div>

              <div className="education-card-inner">
                <div className="education-card-image">
                  <img src={universityImage || "/placeholder.svg"} alt="University of Engineering and Technology" />
                </div>
                <div className="education-card-content">
                  <h3 className="education-card-title">University of Engineering and Technology</h3>
                  <p className="education-card-program">BS Computer Science</p>
                  <p className="education-card-description">
                    Currently pursuing my Bachelor's degree in Computer Science, where I'm developing expertise in
                    programming, algorithms, software development, and other key areas of computing.
                  </p>
                  <div className="education-card-details">
                    <div className="education-card-date">
                      <i className="bx bx-calendar"></i>
                      <span>2022 - 2026</span>
                    </div>
                    <div className="education-card-status status-pursuing">
                      <i className="bx bx-time"></i>
                      <span>Pursuing</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

