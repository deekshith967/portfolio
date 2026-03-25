import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <p>
        © {new Date().getFullYear()} Deekshith | All Rights Reserved
      </p>

      <div className="footer-icons">

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

        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

    </footer>
  );
}

export default Footer;