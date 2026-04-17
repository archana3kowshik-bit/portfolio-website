"use client";

import { motion } from "framer-motion";

const GOLD = "#C9A227";

export interface StarDef {
  ch?: "★" | "✦" | "✶" | "✸";
  size: number;
  left: string;
  top: string;
  rot: number;
  op: number;
  delay?: number;
}

export default function GoldStars({ stars }: { stars: StarDef[] }) {
  return (
    <>
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.size,
            color: GOLD,
            rotate: s.rot,
            opacity: s.op,
            lineHeight: 1,
            zIndex: 10,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [s.op, Math.min(s.op + 0.22, 1), s.op],
          }}
          transition={{
            duration: 2.6 + i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay ?? i * 0.28,
          }}
        >
          {s.ch ?? "★"}
        </motion.span>
      ))}
    </>
  );
}
