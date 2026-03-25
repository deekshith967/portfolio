import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">

      {/* 🔥 CLEAN BACKGROUND */}
      <div className="hero-bg"></div>

      {/* 🔥 CONTENT */}
      <div className="hero-content">
        
        <h1>Hi, I'm Deekshith 👋</h1>

        <h2>AI Engineer | Quantum ML Researcher</h2>

        <p>
          B.Tech CSE (AI) student with experience in Quantum Machine Learning, 
          Full-Stack Development, and real-world AI systems. 
          Research Intern at IIT (BHU).
        </p>

        {/* Highlights */}
        <ul className="highlights">
          <li>🚀 Built Quantum ML models with 0.96 R² accuracy</li>
          <li>📊 Developed AI-powered finance platform</li>
          <li>🧠 Specialized in ML, Deep Learning & Time Series</li>
        </ul>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects">
            <button>View My Work</button>
          </a>

          <a href="/resume.pdf" download>
            <button>Download Resume</button>
          </a>

          <a href="https://github.com/deekshith967" target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>
        </div>

      </div>

    </div>
  );
}