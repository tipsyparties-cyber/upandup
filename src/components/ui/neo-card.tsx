"use client";

import { motion } from "framer-motion";

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
}

export function NeoCard({ children, className = "" }: NeoCardProps) {
  return (
    <motion.div
      className={`rounded-2xl bg-cream p-6 shadow-neo transition-shadow duration-300 ${className}`}
      whileHover={{
        boxShadow: "2px 2px 6px #d1cdc7, -2px -2px 6px #ffffff",
      }}
      whileTap={{
        boxShadow: "inset 4px 4px 8px #d1cdc7, inset -4px -4px 8px #ffffff",
      }}
    >
      {children}
    </motion.div>
  );
}
