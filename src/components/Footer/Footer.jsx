import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { navLinks, personal } from "../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__inner row g-4">
        <div className="footer__brand col-12 col-md-6 col-lg-5">
          <span className="navbar__brand-mark">PT</span>
          <div>
            <h3>{personal.name}</h3>
            <p>MERN Stack Developer crafting clean, scalable web apps.</p>
          </div>
        </div>

        <div className="footer__links col-6 col-md-3 col-lg-4">
          <span className="footer__heading">Quick Links</span>
          <div className="footer__links-grid">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>
            ))}
          </div>
        </div>

        <div className="footer__socials col-6 col-md-3 col-lg-3">
          <span className="footer__heading">Connect</span>
          <div className="footer__social-icons">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href={`mailto:${personal.email}`} aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <button className="footer__top-btn" onClick={scrollTop} aria-label="Back to top">
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}
