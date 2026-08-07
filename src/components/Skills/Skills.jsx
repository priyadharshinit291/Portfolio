import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import Reveal from "../common/Reveal";
import MotionCard from "../common/MotionCard";
import { skills } from "../../data/portfolioData";
import "./Skills.css";

const icons = {
  Frontend: <FiCode />,
  Backend: <FiServer />,
  Database: <FiDatabase />,
  Tools: <FiTool />,
};

const badgeStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">
            Tools I use to <span className="gradient-text">build things</span>
          </h2>
          <p className="section-sub">
            A snapshot of the technologies I work with across the full MERN stack.
          </p>
        </Reveal>

        <div className="skills__grid row g-4">
          {Object.entries(skills).map(([category, list], ci) => (
            <div key={category} className="col-12 col-sm-6 col-lg-3">
              <Reveal direction="up" delay={ci * 0.08} className="h-100">
                <MotionCard className="glass-card skills__card h-100">
                  <div className="skills__card-head">
                    <motion.span
                      className="skills__card-icon"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {icons[category]}
                    </motion.span>
                    <h3>{category}</h3>
                  </div>
                  <motion.div
                    className="skills__badges"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={badgeStagger}
                  >
                    {list.map((s) => (
                      <motion.span
                        key={s.name}
                        className="skills__badge"
                        variants={badgeItem}
                        whileHover={{ scale: 1.08, y: -3 }}
                      >
                        {s.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </MotionCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
