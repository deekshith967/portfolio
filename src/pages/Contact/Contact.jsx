import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            I am open to internships, collaborations, and opportunities in 
            AI, Machine Learning, Quantum Computing, and Full-Stack Development.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>deekshithnagireddi035@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+91 6305037301</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>India</span>
          </div>

          {/* 🔥 SOCIAL LINKS */}
          <div className="social-links">

            <a 
              href="https://github.com/deekshith967" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/sai-deekshith-nagireddi-bbab932b1/" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;