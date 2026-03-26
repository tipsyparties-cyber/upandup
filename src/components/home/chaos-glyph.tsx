"use client";

import { motion } from "framer-motion";

export function ChaosGlyph() {
  // Random erratic paths for dots bouncing around
  const dots = [
    { id: 0, paths: { cx: [30, 75, 45, 90, 25, 60, 85, 30], cy: [30, 65, 85, 35, 55, 20, 75, 30] }, dur: 6 },
    { id: 1, paths: { cx: [80, 35, 70, 20, 65, 40, 80], cy: [25, 50, 80, 40, 20, 70, 25] }, dur: 5.5 },
    { id: 2, paths: { cx: [50, 85, 25, 70, 35, 90, 50], cy: [70, 30, 45, 85, 25, 60, 70] }, dur: 7 },
    { id: 3, paths: { cx: [20, 60, 90, 40, 75, 30, 20], cy: [50, 90, 45, 20, 70, 85, 50] }, dur: 5 },
    { id: 4, paths: { cx: [65, 25, 80, 45, 90, 35, 65], cy: [40, 75, 55, 25, 80, 45, 40] }, dur: 6.5 },
    { id: 5, paths: { cx: [45, 90, 30, 75, 20, 60, 45], cy: [85, 40, 25, 65, 80, 35, 85] }, dur: 5.8 },
    { id: 6, paths: { cx: [85, 40, 65, 25, 80, 50, 85], cy: [60, 30, 75, 55, 20, 85, 60] }, dur: 6.2 },
  ];

  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-32 h-32 md:w-48 md:h-48">
      {/* Tangled scribble lines — messy, writhing */}
      <motion.path
        stroke="white" strokeWidth="0.4" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1, opacity: 0.25,
          d: [
            "M25 30C45 15 80 25 70 50C60 75 20 85 35 60C50 35 90 45 85 70C80 95 30 90 25 30Z",
            "M30 25C50 20 75 30 65 55C55 80 25 80 40 55C55 30 85 50 80 75C75 90 35 85 30 25Z",
            "M20 35C40 10 85 20 75 45C65 70 15 90 30 65C45 40 95 40 90 65C85 100 25 95 20 35Z",
            "M25 30C45 15 80 25 70 50C60 75 20 85 35 60C50 35 90 45 85 70C80 95 30 90 25 30Z",
          ],
        }}
        transition={{
          pathLength: { duration: 3, delay: 0.5, ease: "easeInOut" },
          opacity: { duration: 1, delay: 0.5 },
          d: { duration: 6, delay: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.path
        stroke="white" strokeWidth="0.3" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1, opacity: 0.2,
          d: [
            "M60 15C30 25 15 60 40 80C65 100 95 75 80 45C65 15 25 40 50 70C75 100 100 50 60 15Z",
            "M55 20C25 30 20 55 45 75C70 95 90 80 75 50C60 20 30 35 55 65C80 95 95 55 55 20Z",
            "M65 10C35 20 10 65 35 85C60 105 100 70 85 40C70 10 20 45 45 75C70 105 105 45 65 10Z",
            "M60 15C30 25 15 60 40 80C65 100 95 75 80 45C65 15 25 40 50 70C75 100 100 50 60 15Z",
          ],
        }}
        transition={{
          pathLength: { duration: 3.5, delay: 1, ease: "easeInOut" },
          opacity: { duration: 1, delay: 1 },
          d: { duration: 7, delay: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.path
        stroke="white" strokeWidth="0.35" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1, opacity: 0.2,
          d: [
            "M70 20C40 10 10 40 30 70C50 100 90 90 85 55C80 20 50 50 35 35C20 20 55 10 70 20Z",
            "M75 25C45 5 15 35 35 65C55 95 85 95 80 60C75 25 55 45 40 30C25 15 60 15 75 25Z",
            "M65 15C35 15 5 45 25 75C45 105 95 85 90 50C85 15 45 55 30 40C15 25 50 5 65 15Z",
            "M70 20C40 10 10 40 30 70C50 100 90 90 85 55C80 20 50 50 35 35C20 20 55 10 70 20Z",
          ],
        }}
        transition={{
          pathLength: { duration: 2.8, delay: 1.5, ease: "easeInOut" },
          opacity: { duration: 1, delay: 1.5 },
          d: { duration: 5.5, delay: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Chaotic bouncing dots — erratic, colliding */}
      {dots.map((dot) => (
        <motion.circle
          key={dot.id}
          r="2.5"
          fill="white"
          fillOpacity="0.6"
          initial={{ cx: dot.paths.cx[0], cy: dot.paths.cy[0], opacity: 0 }}
          animate={{
            cx: dot.paths.cx,
            cy: dot.paths.cy,
            opacity: [0, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
          }}
          transition={{
            duration: dot.dur,
            delay: 0.5 + dot.id * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Collision flashes — brief bright circles that appear where dots cross paths */}
      {[
        { cx: 55, cy: 50, delay: 2.5 },
        { cx: 40, cy: 65, delay: 4 },
        { cx: 75, cy: 40, delay: 3.2 },
        { cx: 30, cy: 45, delay: 5.5 },
        { cx: 65, cy: 75, delay: 6.8 },
        { cx: 50, cy: 30, delay: 4.5 },
        { cx: 80, cy: 60, delay: 7.5 },
        { cx: 35, cy: 80, delay: 3.8 },
      ].map((flash, i) => (
        <motion.circle
          key={`flash-${i}`}
          cx={flash.cx} cy={flash.cy}
          fill="white"
          initial={{ r: 0, opacity: 0 }}
          animate={{
            r: [0, 5, 8, 0],
            opacity: [0, 0.5, 0.15, 0],
          }}
          transition={{
            duration: 0.8,
            delay: flash.delay,
            repeat: Infinity,
            repeatDelay: 4 + i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Broken disconnected arrows — pointing in random directions */}
      {[
        { d: "M20 25L15 18M15 18L22 20", delay: 1 },
        { d: "M90 80L95 87M95 87L88 85", delay: 2 },
        { d: "M85 20L92 18M92 18L88 25", delay: 3 },
        { d: "M15 85L10 90M10 90L18 88", delay: 1.5 },
        { d: "M95 50L100 45M100 45L93 47", delay: 2.8 },
      ].map((arrow, i) => (
        <motion.path
          key={`arrow-${i}`}
          d={arrow.d}
          stroke="white" strokeWidth="0.7" strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.1, 0.4] }}
          transition={{ duration: 2, delay: arrow.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Jittering larger dot in centre — stressed, vibrating */}
      <motion.circle
        cx="55" cy="55" r="3" fill="white" fillOpacity="0.3"
        animate={{
          cx: [55, 57, 53, 56, 54, 58, 52, 55],
          cy: [55, 53, 57, 54, 58, 52, 56, 55],
        }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
