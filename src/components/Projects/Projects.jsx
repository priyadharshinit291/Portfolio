import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi";
import Reveal from "../common/Reveal";
import Lightbox from "../common/Lightbox";
import { projects } from "../../data/portfolioData";
import "./Projects.css";

function ProjectCard({ project, index, onOpenGallery }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ ry: (x - 0.5) * 14, rx: (0.5 - y) * 14 });
    setGlow({ x: x * 100, y: y * 100 });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  const hasGallery = project.screenshots && project.screenshots.length > 0;

  return (
    <Reveal direction="up" delay={index * 0.08} className="project-card-wrap h-100">
      <motion.div
        ref={cardRef}
        className="project-card glass-card"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
        style={{
          "--glow-x": `${glow.x}%`,
          "--glow-y": `${glow.y}%`,
          "--card-accent": project.color,
        }}
      >
        <div className="project-card__glow" />

        {project.image ? (
          <button
            className="project-card__media project-card__media--img"
            onClick={() => hasGallery && onOpenGallery(project.screenshots)}
            style={{ cursor: hasGallery ? "pointer" : "default" }}
          >
            <img src={project.image} alt={project.name} />
            <span className="project-card__date">{project.date}</span>
            {hasGallery && (
              <span className="project-card__gallery-hint">
                <FiImage size={13} /> {project.screenshots.length} screenshots
              </span>
            )}
          </button>
        ) : (
          <div className="project-card__media" style={{ background: project.color }}>
            <span className="project-card__initials">
              {project.name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </span>
            <span className="project-card__date">{project.date}</span>
          </div>
        )}

        <div className="project-card__body">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-card__tech">
            {project.tech.map((t) => (
              <span key={t} className="pill pill--sm">{t}</span>
            ))}
          </div>
          <div className="project-card__actions">
            {hasGallery ? (
              <button className="project-link" onClick={() => onOpenGallery(project.screenshots)}>
                <FiImage /> View Screenshots
              </button>
            ) : (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiExternalLink /> Live Demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FiGithub /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const [gallery, setGallery] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">shipped</span>
          </h2>
          <p className="section-sub">
            A selection of full-stack and frontend projects built while learning and applying
            the MERN stack.
          </p>
        </Reveal>

        <div className="projects__grid row g-4">
          {projects.map((p, i) => (
            <div key={p.id} className="col-12 col-md-6">
              <ProjectCard project={p} index={i} onOpenGallery={setGallery} />
            </div>
          ))}
        </div>
      </div>

      {gallery && <Lightbox images={gallery} onClose={() => setGallery(null)} />}
    </section>
  );
}
