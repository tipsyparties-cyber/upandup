"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 14V2M8 2L3 7M8 2L13 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Button({
  children,
  href,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-neo hover:shadow-neo-hover",
    outline:
      "border-2 border-warm-grey text-warm-grey hover:bg-warm-grey hover:text-cream",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="inline-block">
        <Link href={href} className={styles}>
          {children}
          <ArrowIcon />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={styles}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
      <ArrowIcon />
    </motion.button>
  );
}
