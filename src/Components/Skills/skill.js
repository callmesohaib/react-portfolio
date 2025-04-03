"use client"

import { useState, useEffect, useRef } from "react"
import "./skill.css"
import skillsData from "../../Json/skill.json"

export default function SkillsSection() {
  const [skills, setSkills] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [categories, setCategories] = useState([])
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    setSkills(skillsData)

    // Extract unique categories
    const uniqueCategories = ["All", ...new Set(skillsData.map((skill) => skill.category))]
    setCategories(uniqueCategories)

    // Initialize particles
    initParticles()

    return () => {
      // Clean up particles if needed
      const canvas = document.getElementById("skill-particles")
      if (canvas) canvas.remove()
    }
  }, [])

  const initParticles = () => {
    const canvas = document.createElement("canvas")
    canvas.id = "skill-particles"
    canvas.className = "particles-canvas"

    const section = document.getElementById("skills")
    if (section) {
      section.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      const particles = []

      const resizeCanvas = () => {
        canvas.width = section.offsetWidth
        canvas.height = section.offsetHeight
      }

      resizeCanvas()
      window.addEventListener("resize", resizeCanvas)

      // Create particles
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: `rgba(255, 255, 255, ${Math.random() * 0.2})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        })
      }

      // Animate particles
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle) => {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.fill()

          // Move particles
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0
        })

        requestAnimationFrame(animate)
      }

      animate()
    }
  }

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    // Apply perspective effect to cards
    const cards = document.querySelectorAll(".skill-hexagon")
    cards.forEach((card) => {
      const cardX = (card.getBoundingClientRect().left - left) / width - 0.5
      const cardY = (card.getBoundingClientRect().top - top) / height - 0.5
      const distance = Math.sqrt(Math.pow(x - cardX, 2) + Math.pow(y - cardY, 2))

      if (distance < 0.25) {
        const intensity = (0.25 - distance) * 4
        card.style.transform = `scale(${1 + intensity * 0.05}) rotate(${intensity * 5}deg)`
        card.style.boxShadow = `0 ${10 + intensity * 10}px ${20 + intensity * 20}px rgba(0, 0, 0, 0.3)`
      } else {
        card.style.transform = ""
        card.style.boxShadow = ""
      }
    })
  }

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="title-glow"></div>
          <h2 className="section-title">
            <span className="title-icon">{"<"}</span>
            Skills & Expertise
            <span className="title-icon">{"/>"}</span>
          </h2>
          <p className="section-subtitle">My Technical Toolkit</p>
        </div>

        <div className="categories-nav">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-honeycomb" ref={containerRef} onMouseMove={handleMouseMove}>
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-hexagon"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="hexagon-inner">
                <div className="skill-icon-container">
                  <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="skill-icon" loading="lazy" />
                </div>
                <h3 className="skill-name">{skill.name}</h3>

                <div className="skill-level">
                  <div className="level-dots">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`level-dot ${i < Math.floor(skill.proficiency / 20) ? "active" : ""}`}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>

              {hoveredSkill === skill && (
                <div className="skill-tooltip">
                  <strong>{skill.name}</strong>
                  <div className="tooltip-progress">
                    <div className="tooltip-bar" style={{ width: `${skill.proficiency}%` }}></div>
                    <span>{skill.proficiency}%</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

