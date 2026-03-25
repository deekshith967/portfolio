import "./Header.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            
            {/* 🔥 LOGO */}
            <div className="logo">
                <h1><span>D</span>eekshith</h1>
            </div>

            {/* 🔥 NAV LINKS */}
            <ul className="links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li> {/* fixed id */}
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* 🔥 SOCIAL ICONS */}
            <ul className="icons">
                
                <li>
                    <a 
                        href="https://github.com/deekshith967" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>

                <li>
                    <a 
                        href="https://www.instagram.com/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>

                <li>
                    <a 
                        href="https://www.linkedin.com/in/sai-deekshith-nagireddi-bbab932b1/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>

            </ul>

        </header>
    );
}

export default Header;