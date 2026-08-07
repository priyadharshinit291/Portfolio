import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import Reveal from "../common/Reveal";
import MotionCard from "../common/MotionCard";
import { experience } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">
            Training & <span className="gradient-text">Internship</span>
          </h2>
          <p className="section-sub">
            Hands-on learning that shaped how I build and ship applications.
          </p>
        </Reveal>

        <div className="timeline">
          <div className="timeline__line" />
          {experience.map((item, i) => (
            <Reveal
              key={item.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.12}
              className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
            >
              <motion.span
                className="timeline__dot"
                animate={{ scale: [1, 1.35, 1], boxShadow: [
                  "0 0 0 5px rgba(79,124,255,0.15)",
                  "0 0 0 10px rgba(155,92,255,0.08)",
                  "0 0 0 5px rgba(79,124,255,0.15)",
                ] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              />
              <MotionCard className="glass-card timeline__card">
                <div className="timeline__icon"><FiBriefcase /></div>
                <span className="timeline__period">{item.period}</span>
                <h3>{item.title}</h3>
                <span className="timeline__org">{item.org}</span>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
