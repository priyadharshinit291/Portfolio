import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Lightbox.css";

/**
 * Fullscreen image lightbox with prev/next navigation.
 * images: array of { src, caption }
 * startIndex: which image to open on
 * onClose: called to dismiss
 */
export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;
  const current = images[index];

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button className="lightbox__close" onClick={onClose} aria-label="Close">
          <FiX size={22} />
        </button>

        {images.length > 1 && (
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
          >
            <FiChevronLeft size={26} />
          </button>
        )}

        <motion.div
          key={index}
          className="lightbox__body"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={current.src} alt={current.caption || "Preview"} />
          {current.caption && <p className="lightbox__caption">{current.caption}</p>}
          {images.length > 1 && (
            <span className="lightbox__count">
              {index + 1} / {images.length}
            </span>
          )}
        </motion.div>

        {images.length > 1 && (
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
            aria-label="Next image"
          >
            <FiChevronRight size={26} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
