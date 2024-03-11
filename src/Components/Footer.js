import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/search">Services</Link>
      </div>
      <div className="footer-social">
        <a href="https://github.com/Devenkapoor7303" className="social-link">
          <FaGithub />
        </a>
        <a href="#" className="social-link">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/deven-kapoor-b2b7851b8/" className="social-link">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="footer-text">&copy; 2023 moviesFo. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
