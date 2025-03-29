"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./projects.css"
import projectData from "../../Json/project.json"

const Project = () => {
  const [projects, setProjects] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  // Determine how many slides to show based on screen size
  const slidesToShow = isMobile ? 1 : 3

  useEffect(() => {
    // Set projects from data
    setProjects(projectData)

    // Check if mobile on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Calculate total number of pages
  const totalPages = Math.ceil(projects.length / slidesToShow)

  // Calculate current page
  const currentPage = Math.floor(currentIndex / slidesToShow)

  // Calculate max index (last valid starting index)
  const maxIndex = Math.max(0, Math.floor(projects.length / slidesToShow) * slidesToShow)

  // Modified to advance by slidesToShow
  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesToShow
      return nextIndex >= projects.length ? 0 : nextIndex
    })
  }, [projects.length, slidesToShow])

  // Modified to go back by slidesToShow
  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => {
      const prevPage = Math.floor(prevIndex / slidesToShow) - 1
      return prevPage < 0 ? maxIndex : prevPage * slidesToShow
    })
  }, [maxIndex, slidesToShow])

  // Modified to go to specific page
  const goToSlide = useCallback(
    (pageIndex) => {
      const targetIndex = pageIndex * slidesToShow
      setDirection(targetIndex > currentIndex ? 1 : -1)
      setCurrentIndex(targetIndex)
    },
    [currentIndex, slidesToShow],
  )

  // Auto-slide functionality
  useEffect(() => {
    let interval

    if (isPlaying && !isHovering) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, isHovering, nextSlide])

  // Get visible projects based on current index and slides to show
  const visibleProjects = projects.slice(currentIndex, Math.min(currentIndex + slidesToShow, projects.length))

  // If we're on the last page and don't have enough projects to fill the page,
  // we need to pad with empty slots
  const emptySlots = currentIndex + slidesToShow > projects.length ? currentIndex + slidesToShow - projects.length : 0

  // Animation variants
  const sliderVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  }

  return (
    <section className="pro" id="pro" style={{ color: "white" }}>
      <h2 className="heading" style={{ color: "white" }}>
        <i className="fa-solid fa-laptop-code laptop"></i>
        Projects
      </h2>

      <div
        className="slider-container"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="nav-arrow nav-arrow-left" aria-label="Previous slide">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button onClick={nextSlide} className="nav-arrow nav-arrow-right" aria-label="Next slide">
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="play-pause-btn"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        </button>

        {/* Slider */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage} // Use page index as key instead of currentIndex
            custom={direction}
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="projects"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${slidesToShow}, 1fr)`,
              width: "100%",
              gap: "1rem",
            }}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                className="project"
                key={index}
                initial={{ opacity: 0.2, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.42, 0, 0.58, 1],
                  delay: index * 0.2,
                }}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={require(`../../ProjectImages/${project.img || "/placeholder.svg"}`)} alt={project.title} />
                    <div className="project-category">
                      <span>{project.category}</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-footer">
                      <a href={project.codeLink} className="github-link" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-github"></i>
                        <span>View Code</span>
                      </a>
                      <div className="project-tech">
                        {project.technologies && project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Add empty slots if needed on the last page */}
            {Array.from({ length: emptySlots }).map((_, index) => (
              <div key={`empty-${index}`} className="project empty"></div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="progress-container">
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{
              width: `${(currentPage / (totalPages - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Dots Navigation - now based on pages, not individual slides */}
        <div className="dots-container">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentPage ? "active" : ""}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
