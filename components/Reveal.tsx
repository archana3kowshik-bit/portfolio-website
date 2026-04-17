"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    up: { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -32 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 32 }, animate: { opacity: 1, x: 0 } },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants[direction].initial}
      animate={inView ? variants[direction].animate : variants[direction].initial}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
