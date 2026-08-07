import { motion } from "framer-motion";
import { FiEye, FiDownload, FiFileText } from "react-icons/fi";
import Reveal from "../common/Reveal";
import MotionCard from "../common/MotionCard";
import GradientButton from "../common/GradientButton";
import { personal } from "../../data/portfolioData";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <Reveal>
          <MotionCard className="glass-card resume__panel">
            <motion.div
              className="resume__icon"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiFileText size={30} />
            </motion.div>
            <h2 className="section-title" style={{ marginBottom: 10 }}>
              Get a copy of my <span className="gradient-text">resume</span>
            </h2>
            <p className="resume__desc">
              View it instantly in your browser or download a PDF copy to keep for later.
            </p>
            <div className="resume__actions">
              <GradientButton variant="primary" href={personal.resumePdf} target="_blank" icon={<FiEye />}>
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
            </div>
          </MotionCard>
        </Reveal>
      </div>
    </section>
  );
}
