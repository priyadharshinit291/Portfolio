import { useState } from "react";

/**
 * Button with a gradient/outline variant and a ripple click effect.
 * Renders as <a> when `href` is passed, otherwise <button>.
 */
export default function GradientButton({
  children,
  variant = "primary",
  href,
  download,
  target,
  onClick,
  icon,
  type = "button",
  ...rest
}) {
  const [ripples, setRipples] = useState([]);

  const spawnRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = Date.now();
    setRipples((r) => [
      ...r,
      {
        id,
        size,
        x: e.clientX - rect.left - size / 2,
        y: e.clientY - rect.top - size / 2,
      },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 620);
  };

  const handleClick = (e) => {
    spawnRipple(e);
    onClick?.(e);
  };

  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-outline"}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
        />
      ))}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cls}
        onClick={handleClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={handleClick} {...rest}>
      {content}
    </button>
  );
}
