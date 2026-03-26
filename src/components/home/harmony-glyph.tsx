"use client";

import { motion } from "framer-motion";

export function HarmonyGlyph() {
  const mergeX = 65;
  const mergeY = 55;
  const startYs = [8, 18, 28, 38, 48, 62, 72, 82, 95];

  return (
    <svg viewBox="0 0 120 110" fill="none" className="w-40 h-36 md:w-56 md:h-48">
      {/* Fan lines that merge */}
      {startYs.map((startY, i) => (
        <motion.path
          key={`line-${i}`}
          stroke="white"
          strokeWidth={0.4 + (i % 3) * 0.1}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.3 + (i % 4) * 0.08,
            d: [
              `M0 ${startY} C${30 + i * 2} ${startY} ${mergeX - 15} ${mergeY + (startY - mergeY) * 0.3} ${mergeX} ${mergeY}`,
              `M0 ${startY + 4} C${30 + i * 2} ${startY + 6} ${mergeX - 15} ${mergeY + (startY - mergeY) * 0.2} ${mergeX} ${mergeY}`,
              `M0 ${startY - 4} C${30 + i * 2} ${startY - 5} ${mergeX - 15} ${mergeY + (startY - mergeY) * 0.35} ${mergeX} ${mergeY}`,
              `M0 ${startY} C${30 + i * 2} ${startY} ${mergeX - 15} ${mergeY + (startY - mergeY) * 0.3} ${mergeX} ${mergeY}`,
            ],
          }}
          transition={{
            pathLength: { duration: 1.5, delay: 0.3 + i * 0.12, ease: [0.15, 0.8, 0.3, 1] },
            opacity: { duration: 0.8, delay: 0.3 + i * 0.12 },
            d: { duration: 4 + i * 0.3, delay: 2 + i * 0.1, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Single merged line — the trunk */}
      <motion.line
        x1={mergeX} y1={mergeY} x2={95} y2={mergeY}
        stroke="white" strokeWidth="0.8" strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 2 }}
      />

      {/* Comet head — solid bright circle moving forward */}
      <motion.circle
        cy={mergeY}
        fill="white"
        r="3.5"
        initial={{ cx: mergeX, opacity: 0 }}
        animate={{ cx: [mergeX, 105], opacity: [0, 1, 1] }}
        transition={{
          cx: { duration: 1.5, delay: 2, ease: [0.15, 0.8, 0.3, 1] },
          opacity: { duration: 0.5, delay: 2 },
        }}
      />

      {/* Comet tail — multiple trailing lines behind the head */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.line
          key={`tail-${i}`}
          y1={mergeY + (i - 2) * 2}
          y2={mergeY + (i - 2) * 2.5}
          stroke="white"
          strokeWidth={0.6 - i * 0.08}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4 - i * 0.06],
            x1: [mergeX, 100 - i * 3],
            x2: [mergeX - 5, 95 - i * 6],
          }}
          transition={{
            duration: 1.5,
            delay: 2.2 + i * 0.05,
            ease: [0.15, 0.8, 0.3, 1],
          }}
        />
      ))}

      {/* Speed streaks — short lines trailing behind comet, continuously animating */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.line
          key={`streak-${i}`}
          y1={mergeY + (i - 2.5) * 3}
          y2={mergeY + (i - 2.5) * 3}
          stroke="white"
          strokeWidth="0.4"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.25, 0],
            x1: [90, 75, 60],
            x2: [85, 65, 45],
          }}
          transition={{
            duration: 1.8,
            delay: 3.5 + i * 0.6,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Particles flowing along lines toward comet */}
      {[0, 1, 2, 3, 4].map((i) => {
        const startY = startYs[i * 2];
        return (
          <motion.circle
            key={`particle-${i}`}
            r="1"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{
              cx: [0, 35, mergeX, 105],
              cy: [startY, startY + (mergeY - startY) * 0.5, mergeY, mergeY],
              opacity: [0, 0.4, 0.5, 0],
              r: [0.5, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 3 + i * 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: [0.15, 0.8, 0.3, 1],
            }}
          />
        );
      })}

      {/* Subtle glow behind comet head */}
      <motion.ellipse
        cy={mergeY}
        rx="8"
        ry="4"
        fill="white"
        fillOpacity="0.1"
        initial={{ cx: mergeX, opacity: 0 }}
        animate={{ cx: [mergeX, 103], opacity: [0, 0.15] }}
        transition={{
          duration: 1.5,
          delay: 2,
          ease: [0.15, 0.8, 0.3, 1],
        }}
      />
    </svg>
  );
}
