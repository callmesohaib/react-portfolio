import React, { useState } from "react";
import "./contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((response) => response.json())
      .then((result) => {
        toast.update(toastId, {
          render: "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
          limit: 1,
          pauseOnHover: true,
          closeButton: "Close",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          desc: "",
        });
      })
      .catch((error) => {
        toast.update(toastId, {
          render: "Message not sent successfully!",
          type: "error",
          isLoading: false,
          autoClose: 2000,
          closeOnClick: true,
        });
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="hidden"
          name="access_key"
          value="c78a4719-97db-455a-9609-16b7cef884e0"
        />

        <div className="input-group">
          <div className="input-box">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]*"
              inputMode="numeric"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            name="desc"
            id="desc"
            rows="10"
            cols="50"
            placeholder="Your Message"
            value={formData.desc}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
