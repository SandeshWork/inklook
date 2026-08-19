import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../utils/animations.js";

/**
 * Wraps children in a scroll-triggered reveal animation. Fires once when the
 * element enters the viewport. Falls back to a plain wrapper (no motion) when
 * the user prefers reduced motion.
 */
export default function Reveal({
  children,
  as = "div",
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (prefersReducedMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  // Variant-level transitions take priority over the `transition` prop in
  // Framer Motion, so merge `delay` directly into the variant to stagger
  // instances of the same variant.
  const delayedVariants = delay
    ? {
        ...variants,
        show: {
          ...variants.show,
          transition: { ...variants.show?.transition, delay },
        },
      }
    : variants;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={delayedVariants}
      {...rest}
    >
      {children}
    </Component>
  );
}
