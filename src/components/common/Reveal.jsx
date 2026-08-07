import { motion } from "framer-motion";

/**
 * Reusable scroll-reveal wrapper.
 * direction: "up" | "left" | "right" | "zoom" | "none"
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.2,
}) {
  const variants = {
    up: { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -36 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 36 }, show: { opacity: 1, x: 0 } },
    zoom: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
    none: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  }[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
