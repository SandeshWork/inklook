import { motion, useReducedMotion } from "framer-motion";

// Snappy "slap it down" reveal: drops in with a slight rotation, like a
// sticker being placed. Renders in its final state under reduced motion.
export default function Reveal({ as = "div", delay = 0, rotate = 0, children, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  if (reduce) return <Tag {...rest}>{children}</Tag>;
  return (
    <Tag
      initial={{ opacity: 0, y: 40, rotate: rotate - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 420, damping: 30, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
