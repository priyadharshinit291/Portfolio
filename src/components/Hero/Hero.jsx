import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiEye,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";
import GradientButton from "../common/GradientButton";
import { personal } from "../../data/portfolioData";
import profilePhoto from "../../assets/profile.png";
import "./Hero.css";

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const socials = (p) => [
  { icon: <FiGithub />, href: p.github, label: "GitHub" },
  { icon: <FiLinkedin />, href: p.linkedin, label: "LinkedIn" },
  { icon: <FiMail />, href: `mailto:${p.email}`, label: "Email" },
  {
    icon: <FiMapPin />,
    href: `https://www.google.com/maps/search/${encodeURIComponent(p.location)}`,
    label: "Location",
  },
];

export default function Hero() {
  const typed = useTypewriter(personal.taglineWords);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero__orbs" aria-hidden="true">
        <span className="orb orb--blue" />
        <span className="orb orb--purple" />
      </div>

      <div className="container hero__grid row align-items-center gy-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hero__content col-12 col-lg-7"
        >
          <span className="eyebrow">Available for opportunities</span>
          <h1 className="hero__name">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>
          <h2 className="hero__role">
            <span className="hero__typed">{typed}</span>
            <span className="hero__cursor" />
          </h2>
          <p className="hero__desc">{personal.summary}</p>

          <div className="hero__actions d-flex flex-wrap gap-3">
            <GradientButton
              variant="primary"
              href={personal.resumePdf}
              target="_blank"
              icon={<FiEye />}
            >
              View Resume
            </GradientButton>
            <GradientButton
              variant="outline"
              href={personal.resumePdf}
              download="Priyadharshini_T_Resume.pdf"
              icon={<FiDownload />}
            >
              Download Resume
            </GradientButton>
            <GradientButton variant="outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </GradientButton>
          </div>

          <div className="hero__socials d-flex gap-3">
            {socials(personal).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="hero__portrait col-12 col-lg-5 d-flex justify-content-center"
        >
          <div className="hero__portrait-ring" />
          <div className="hero__portrait-frame glass-card">
            <img
              src={profilePhoto}
              alt="Priyadharshini T — MERN Stack Developer"
              className="hero__portrait-img"
            />
          </div>
          <span className="hero__float hero__float--1">{"</>"}</span>
          <span className="hero__float hero__float--2">DB</span>
          <span className="hero__float hero__float--3">API</span>
        </motion.div>
      </div>

      <button className="hero__scroll-cue" onClick={() => scrollTo("about")} aria-label="Scroll down">
        <FiArrowDown />
      </button>
    </section>
  );
}
