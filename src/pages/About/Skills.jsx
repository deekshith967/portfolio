import "./Skills.css";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiJavascript
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills">
      
      <div className="title">
        <h2>Skills</h2>
      </div>

      <div className="skills-slider">
        <div className="skills-track">

          {/* Programming */}
          <FaPython title="Python" />
          <SiJavascript title="JavaScript" />

          {/* AI / ML */}
          <SiTensorflow title="TensorFlow" />

          {/* Web Development */}
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />

          {/* Databases */}
          <SiMongodb title="MongoDB" />
          <SiPostgresql title="PostgreSQL" />

          {/* Tools */}
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />

        </div>
      </div>

    </div>
  );
}

export default Skills;