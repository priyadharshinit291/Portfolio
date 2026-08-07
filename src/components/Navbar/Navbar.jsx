import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import useActiveSection from "../../hooks/useActiveSection";
import { navLinks, personal } from "../../data/portfolioData";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a
          className="navbar__brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
        >
          <span className="navbar__brand-mark">PT</span>
          <span className="navbar__brand-text">{personal.name}</span>
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${active === link.id ? "is-active" : ""}`}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt4 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`navbar__mobile-link ${active === link.id ? "is-active" : ""}`}
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
