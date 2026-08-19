import { ArrowRight } from "lucide-react";

/**
 * Shared button. `variant` is "primary" | "secondary".
 * Renders a <button> by default, or an <a> when `href` is provided
 * (used for in-page anchor CTAs).
 */
export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  showArrow = true,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={18}
          strokeWidth={2.25}
          className="btn__arrow"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
