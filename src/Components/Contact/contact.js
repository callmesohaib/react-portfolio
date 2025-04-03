"use client";

import { useState, useEffect } from "react";
import "./contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Basic validation
    const errors = {};
    if (formData.name && formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (
      formData.phone &&
      !/^[0-9]{10,15}$/.test(formData.phone.replace(/\D/g, ""))
    ) {
      errors.phone = "Please enter a valid phone number";
    }
    if (formData.message && formData.message.length < 5) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isFormValid || isSubmitting) return;
  
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");
  
    try {
      // Create FormData object with a different name
      const submissionFormData = new FormData();
      submissionFormData.append('access_key', 'c78a4719-97db-455a-9609-16b7cef884e0');
      submissionFormData.append('name', formData.name);
      submissionFormData.append('email', formData.email);
      submissionFormData.append('phone', formData.phone);
      submissionFormData.append('subject', formData.subject);
      submissionFormData.append('message', formData.message);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionFormData,
        headers: {
          'Accept': 'application/json'
        }
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast.update(toastId, {
          render: "Message sent successfully! I'll get back to you soon.",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.update(toastId, {
        render: error.message || "Failed to send message. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <section className="contact" id="contact">
      <div className="contact-bg">
        <div className="contact-bg-overlay"></div>
      </div>

      <div className="contact-shape contact-shape-1"></div>
      <div className="contact-shape contact-shape-2"></div>

      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-title-wrapper">
            <div className="contact-title-glow"></div>
            <h2 className="contact-heading">
              <i className="fa-solid fa-headset headset"></i>
              Contact <span>Me</span>
            </h2>
          </div>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="contact-form-container">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3 className="contact-card-title">Location</h3>
              </div>
              <p className="contact-card-content">
                Pak Arab Society, Lahore, Pakistan
              </p>
            </motion.div>

            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h3 className="contact-card-title">Email</h3>
              </div>
              <a
                href="mailto:sohaibikram249@gmail.com"
                className="contact-card-link"
              >
                sohaibikram249@gmail.com
              </a>
              <a
                href="mailto:sohaibikram621@gmail.com"
                className="contact-card-link"
              >
                sohaibikram621@gmail.com
              </a>
            </motion.div>

            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h3 className="contact-card-title">Call Me</h3>
              </div>
              <a href="tel:+923484538217" className="contact-card-link">
                +92 348 4538217
              </a>
            </motion.div>

            <motion.div className="contact-card" variants={itemVariants}>
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
                <h3 className="contact-card-title">Social Profiles</h3>
              </div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/sohaib-ikram249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/callmesohaib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/sohaib.__.hoon/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/sohaib.ikram.9461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-container">
              <h3 className="form-title">Send Me a Message</h3>

              <form onSubmit={handleSubmit} autoComplete="off" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="c78a4719-97db-455a-9609-16b7cef884e0"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />

                <div className="form-row">
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-input"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-input"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-control">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-input"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-input"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message" 
                    id="message"
                    rows="6"
                    className="form-textarea"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  disabled={isSubmitting || !isFormValid}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
