import "./Project.css";

// 🔥 IMPORT YOUR NEW IMAGES
import quantum from "../../assets/images/quantum.jpg";
import finvision from "../../assets/images/finvision.jpg";
import mlproject from "../../assets/images/mlproject.jpg";
import cyber from "../../assets/images/cyber.jpg";

const projects = [
  {
    title: "Quantum Time-Series Forecasting",
    img: quantum,
    desc: "Hybrid Quantum-Classical ML model for financial forecasting using PennyLane. Achieved up to 0.96 R² accuracy with quantum autoencoders and variational circuits.",
    skills: ["Python", "PennyLane", "Quantum ML", "Time Series"],
    github: "https://github.com/deekshith967/quantum-time-series-forecasting-qml",
    demo: "#"
  },

  {
    title: "FinVision AI (Full Stack Platform)",
    img: finvision,
    desc: "AI-powered finance platform with transaction analysis, receipt scanning, and insights using Gemini API. Built with Next.js, Supabase, and Prisma.",
    skills: ["Next.js", "Node.js", "Supabase", "AI Integration"],
    github: "https://github.com/deekshith967/finvision-ai",
    demo: "#"
  },

  {
    title: "Malware Detection using ML",
    img: cyber,
    desc: "Machine learning model to classify malware vs safe files using feature extraction and classification algorithms.",
    skills: ["Python", "Scikit-learn", "Cybersecurity", "ML"],
    github: "https://github.com/deekshith967/microsoft-malware-detection",
    demo: "#"
  },

  {
    title: "Face Recognition Attendance System",
    img: mlproject,
    desc: "Computer vision system using OpenCV to detect faces and automate attendance tracking.",
    skills: ["Python", "OpenCV", "Face Recognition", "AI"],
    github: "https://github.com/deekshith967/Attendance-Management-system-using-face-recognition",
    demo: "#"
  }
];

export default function Project() {
  return (
    <section className="project reveal" id="projects">
      
      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <div className="btns">

              <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer" className="btn">
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}