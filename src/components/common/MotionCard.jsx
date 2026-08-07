import { motion } from "framer-motion";

/**
 * Wraps any glass-card content with a subtle hover lift + tap animation,
 * on top of whatever scroll-reveal animation the parent already applies.
 */
export default function MotionCard({ children, className = "", ...rest }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -10, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
