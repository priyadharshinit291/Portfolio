import { useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import Reveal from "../common/Reveal";
import MotionCard from "../common/MotionCard";
import Lightbox from "../common/Lightbox";
import { certifications } from "../../data/portfolioData";
import "./Certifications.css";

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title">
            Learning, <span className="gradient-text">validated</span>
          </h2>
          <p className="section-sub">Courses and conferences that have shaped my skill set.</p>
        </Reveal>

        <div className="certs__grid row g-4">
          {certifications.map((c, i) => (
            <div key={c.name} className="col-12 col-md-6">
              <Reveal direction="up" delay={i * 0.1} className="h-100">
                <MotionCard className="glass-card certs__card h-100">
                  {c.images && c.images[0] ? (
                    <button
                      className="certs__media certs__media--img"
                      onClick={() => setActive(c.images)}
                      aria-label={`View ${c.name}`}
                    >
                      <img src={c.images[0].src} alt={c.name} />
                    </button>
                  ) : (
                    <motion.div
                      className="certs__media"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <FiAward size={34} />
                    </motion.div>
                  )}
                  <div className="certs__body">
                    <h3>{c.name}</h3>
                    <span className="certs__org">{c.org}</span>
                    <p>{c.detail}</p>
                    {c.images && c.images.length > 0 ? (
                      <button className="certs__link" onClick={() => setActive(c.images)}>
                        View Certificate{c.images.length > 1 ? "s" : ""} <FiExternalLink size={13} />
                      </button>
                    ) : (
                      <a href={c.link} target="_blank" rel="noopener noreferrer" className="certs__link">
                        View Certificate <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </MotionCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {active && <Lightbox images={active} onClose={() => setActive(null)} />}
    </section>
  );
}
