import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

// ✅ IMPORT IMAGES (IMPORTANT FIX)
import profile from "../../assets/images/profile.jpg";
import tech from "../../assets/images/tech.jpg";

function About() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">
      
      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        {/* 🔥 IMAGE CARD */}
        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >
          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}
            <div className="photo-front">
              <img src={profile} alt="profile" />
            </div>

            {/* BACK IMAGE */}
            <div className="photo-back">
              <img src={tech} alt="tech" />
            </div>

          </div>
        </div>

        {/* 🔥 TEXT CONTENT */}
        <div className="text-about">
          <p>
            Hi, I'm Deekshith, a B.Tech Computer Science student specializing in Artificial Intelligence. 
            I have strong experience in Machine Learning, Quantum Computing, and Full-Stack Development.
          </p>

          <p>
            I worked as a Research Intern at IIT (BHU), where I built hybrid Quantum-Classical Machine Learning 
            models for financial time-series forecasting, achieving up to 0.96 R² accuracy.
          </p>

          <p>
            I enjoy solving real-world problems using AI and building scalable applications. 
            My projects range from Quantum ML models to full-stack AI-powered platforms.
          </p>

          <p>
            Currently, I am focused on advancing my skills in AI, Deep Learning, and Cybersecurity 
            to build impactful and intelligent systems.
          </p>

          {/* 🔥 HIGHLIGHTS */}
          <ul className="about-highlights">
            <li>🎓 B.Tech CSE (AI) Student</li>
            <li>🏢 Research Intern @ IIT (BHU)</li>
            <li>⚡ AI + Quantum Machine Learning</li>
            <li>💻 Full Stack Developer (Next.js, Node.js)</li>
          </ul>

        </div>

      </div>

      {/* Skills Section */}
      <Skills />

    </div>
  );
}

export default About;