"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden,  setHidden]  = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const dotX  = useSpring(rawX, { stiffness: 900, damping: 40 });
  const dotY  = useSpring(rawY, { stiffness: 900, damping: 40 });
  const ringX = useSpring(rawX, { stiffness: 140, damping: 22, mass: 0.5 });
  const ringY = useSpring(rawY, { stiffness: 140, damping: 22, mass: 0.5 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const onMove = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);
    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);

    const bindHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach(el => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    bindHover();

    const obs = new MutationObserver(bindHover);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      obs.disconnect();
    };
  }, [rawX, rawY]);

  if (isTouch) return null;

  const dotSize  = clicked ? 6 : hovered ? 0  : 10;
  const ringSize = clicked ? 20 : hovered ? 52 : 36;

  return (
    <>
      {/* Lagging ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#111]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width:   ringSize,
          height:  ringSize,
          opacity: hidden ? 0 : hovered ? 0.9 : 0.4,
          backgroundColor: hovered ? "#111" : "transparent",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Fast dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#111]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: dotSize, height: dotSize, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.08 }}
      />
    </>
  );
}
