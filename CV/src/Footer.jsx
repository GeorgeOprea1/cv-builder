import { FaGithub } from "react-icons/fa";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright George Oprea © 2023</p>
      <a
        href="https://github.com/GeorgeOprea1/cv-builder"
        target="_blank"
        rel="noreferrer"
        alt="github icon"
      >
        <FaGithub id="icon" />
      </a>
    </footer>
  );
};

export default Footer;
