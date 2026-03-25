import "./Services.css";
import { FaBrain, FaAtom, FaLaptopCode } from "react-icons/fa";

function Services() {

  return (
    <div className="services" id="serv">

      <div className="title">
        <h2>What I Do</h2>
      </div>

      <div className="services-container">

        {/* 🔥 AI & ML */}
        <div className="service-card">
          <FaBrain className="service-icon"/>
          <h3>AI & Machine Learning</h3>
          <p>
            I build intelligent systems using Machine Learning and Deep Learning 
            techniques to solve real-world problems with data-driven approaches.
          </p>
        </div>

        {/* 🔥 Quantum ML */}
        <div className="service-card">
          <FaAtom className="service-icon"/>
          <h3>Quantum Machine Learning</h3>
          <p>
            Designing hybrid quantum-classical models using parameterized quantum circuits 
            and quantum autoencoders for advanced problem solving.
          </p>
        </div>

        {/* 🔥 Full Stack */}
        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Full Stack AI Applications</h3>
          <p>
            Developing scalable web applications with AI integration using Next.js, 
            Node.js, and modern backend technologies.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Services;