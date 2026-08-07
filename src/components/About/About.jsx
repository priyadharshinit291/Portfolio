import { motion } from "framer-motion";
import { FiTarget, FiBookOpen, FiGlobe, FiZap } from "react-icons/fi";
import Reveal from "../common/Reveal";
import MotionCard from "../common/MotionCard";
import { personal, education } from "../../data/portfolioData";
import "./About.css";

const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const listItem = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">working products</span>
          </h2>
          <p className="section-sub">
            A quick look at who I am, what drives me, and where I've studied.
          </p>
        </Reveal>

        <div className="about__grid row g-4 mb-5">
          <div className="col-12 col-lg-7">
            <Reveal direction="left" className="h-100">
              <MotionCard className="about__main glass-card h-100">
                <div className="about__block">
                  <motion.div
                    className="about__icon"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FiZap />
                  </motion.div>
                  <div>
                    <h3>Professional Summary</h3>
                    <p>{personal.summary}</p>
                  </div>
                </div>
                <div className="about__block">
                  <motion.div
                    className="about__icon"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <FiTarget />
                  </motion.div>
                  <div>
                    <h3>Career Objective</h3>
                    <p>{personal.objective}</p>
                  </div>
                </div>
              </MotionCard>
            </Reveal>
          </div>

          <div className="about__side col-12 col-lg-5">
            <Reveal direction="right" delay={0.1}>
              <MotionCard className="about__card glass-card">
                <div className="about__icon"><FiBookOpen /></div>
                <h3>Education</h3>
                <motion.ul
                  className="about__edu-list"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={listStagger}
                >
                  {education.map((e) => (
                    <motion.li key={e.degree} variants={listItem}>
                      <div className="about__edu-top">
                        <span className="about__edu-degree">{e.degree}</span>
                        <span className="about__edu-period">{e.period}</span>
                      </div>
                      <span className="about__edu-inst">{e.institute}</span>
                      <span className="about__edu-detail">{e.detail}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </MotionCard>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <MotionCard className="about__card glass-card">
                <div className="about__icon"><FiGlobe /></div>
                <h3>Languages</h3>
                <motion.div
                  className="about__pills"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={listStagger}
                >
                  {personal.languages.map((l) => (
                    <motion.span key={l} variants={listItem} className="pill">
                      {l}
                    </motion.span>
                  ))}
                </motion.div>
              </MotionCard>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15} className="about__strengths">
          <h3 className="about__strengths-title">Strengths</h3>
          <motion.div
            className="about__strengths-grid row g-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={listStagger}
          >
            {personal.strengths.map((s, i) => (
              <motion.div key={s} variants={listItem} className="col-12 col-sm-6 col-lg-3">
                <MotionCard className="glass-card about__strength h-100">
                  <span className="about__strength-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{s}</p>
                </MotionCard>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
