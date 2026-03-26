"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["faster", "stronger", "simpler", "smarter", "scalable", "easier"];

export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        className="text-white"
        initial={{ y: "0.5em", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-0.5em", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ display: "inline-block" }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
