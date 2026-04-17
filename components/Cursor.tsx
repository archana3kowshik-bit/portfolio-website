"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// How close (px) before the magnetic pull kicks in
const THRESHOLD = 85;
// Max pull strength (0–1)
const STRENGTH = 0.40;

export default function Cursor() {
  const [hovered,  setHovered]  = useState(false);
  const [clicked,  setClicked]  = useState(false);
  const [hidden,   setHidden]   = useState(false);
  const [magnetic, setMagnetic] = useState(false);

  // Raw position (set directly on mousemove)
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Dot — snappy, follows almost immediately
  const dotX = useSpring(rawX, { stiffness: 700, damping: 38 });
  const dotY = useSpring(rawY, { stiffness: 700, damping: 38 });

  // Ring — slow, lazy lag = the "magnetic" feeling
  const ringX = useSpring(rawX, { stiffness: 130, damping: 20, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 130, damping: 20, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      let x = e.clientX;
      let y = e.clientY;
      let pulled = false;

      // Magnetic: scan every link / button on screen
      document
        .querySelectorAll<HTMLElement>("a, button, [data-magnetic]")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width  / 2;
          const cy = rect.top  + rect.height / 2;
          const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

          if (dist < THRESHOLD) {
            // Ease-in pull: stronger as you get closer
            const pull = (1 - dist / THRESHOLD) * STRENGTH;
            x += (cx - e.clientX) * pull;
            y += (cy - e.clientY) * pull;
            pulled = true;
          }
        });

      rawX.set(x);
      rawY.set(y);
      setMagnetic(pulled);
    };

    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);
    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);

    // Attach hover listeners to all interactive elements, and re-attach
    // whenever the DOM changes (e.g. modals, route changes)
    const bindHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    bindHover();

    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      observer.disconnect();
    };
  }, [rawX, rawY]);

  // ── Sizes ──────────────────────────────────────────────────────────────────
  const dotSize  = clicked ? 8  : hovered ? 0  : 14;
  const ringSize = clicked ? 26 : hovered ? 58 : magnetic ? 48 : 38;
  const ringOpacity = hidden ? 0 : hovered ? 0.92 : magnetic ? 0.75 : 0.55;

  // ── Gradients ──────────────────────────────────────────────────────────────
  const dotGradient  = "radial-gradient(circle at 35% 28%, #FFB3C6 0%, #FF2D78 48%, #C2005A 100%)";
  const fillGradient = "radial-gradient(circle at 38% 30%, #FFB3C6 0%, #FF2D78 52%, #C2005A 100%)";
  // Soft light-pink for the trailing ring at rest / magnetic
  const trailGradient = "radial-gradient(circle at 38% 32%, #fff 0%, #FFB3C6 55%, #FF8FAD 100%)";

  return (
    <>
      {/* ── RING ── slow follow, morphs on hover / magnetic ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: ringSize, height: ringSize, opacity: ringOpacity }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {hovered ? (
          // Filled gradient pill when hovering links/buttons
          <div
            style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: fillGradient,
              boxShadow: "0 0 28px rgba(255,45,120,0.65), 0 0 6px rgba(255,45,120,0.9)",
            }}
          />
        ) : (
          // Light pink gradient disc at rest / magnetic
          <div
            style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: trailGradient,
              boxShadow: magnetic
                ? "0 0 18px rgba(255,143,173,0.55)"
                : "0 0 10px rgba(255,179,198,0.35)",
            }}
          />
        )}
      </motion.div>

      {/* ── DOT ── fast follow, gradient sphere ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: dotSize, height: dotSize, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <div
          style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: dotGradient,
            boxShadow: "0 0 10px rgba(255,45,120,0.75), 0 2px 4px rgba(194,0,90,0.4)",
          }}
        />
      </motion.div>
    </>
  );
}
