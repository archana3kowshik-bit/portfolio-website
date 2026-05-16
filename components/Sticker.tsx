"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
export type StickerShape =
  | "circle"     // perfect circle
  | "oval"       // horizontal ellipse — grocery price-tag vibes
  | "pill"       // wide rounded rectangle
  | "rect"       // rounded square
  | "stamp"      // rect with dashed border
  | "starburst"  // 8-point star burst — "NEW!" energy
  | "splat"      // organic blob — "WOW" energy
  | "tag"        // price tag (chevron left edge)
  | "wavy";      // organic wavy rectangle

export type StickerFont    = "sans" | "serif" | "hand" | "condensed";
export type StickerPattern = "none" | "stripes" | "dots";

export interface StickerData {
  text:     string;
  bg:       string;
  color:    string;
  shape:    StickerShape;
  size:     number;       // width reference; height derived per shape
  x:        number;       // px offset from container centre (desktop fan)
  y:        number;       // px from container top
  rot:      number;       // degrees
  delay:    number;
  font?:    StickerFont;
  pattern?: StickerPattern;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fontClass(f?: StickerFont) {
  if (f === "serif")     return "font-display italic";
  if (f === "hand")      return "font-display italic";
  if (f === "condensed") return "font-condensed tracking-widest";
  return "font-sans font-bold uppercase tracking-wide";
}

function fontSize(size: number, shape: StickerShape): number {
  // starburst/splat have lots of dead-space at edges → bump size up
  const scale = (shape === "starburst" || shape === "splat") ? 0.19 : 0.135;
  return Math.max(9, Math.round(size * scale));
}

// clip-path shapes can't show a CSS border → skip it
const CLIP_SHAPES: StickerShape[] = ["starburst", "splat", "tag"];

function shapeStyle(shape: StickerShape, size: number): CSSProperties {
  switch (shape) {
    case "circle":
      return { width: size, height: size, borderRadius: "50%" };

    case "oval":
      return { width: size, height: Math.round(size * 0.58), borderRadius: "50%" };

    case "pill":
      return { width: size, borderRadius: "999px" };

    case "rect":
      return { width: size, borderRadius: "18px" };

    case "stamp":
      return { width: size, borderRadius: "14px" };

    case "starburst":
      return {
        width: size, height: size,
        clipPath:
          "polygon(50% 0%,61% 26%,93% 7%,74% 35%,100% 50%," +
          "74% 65%,93% 93%,61% 74%,50% 100%,39% 74%," +
          "7% 93%,26% 65%,0% 50%,26% 35%,7% 7%,39% 26%)",
      };

    case "splat":
      return {
        width: size, height: size,
        clipPath:
          "polygon(20% 0%,42% 5%,60% 0%,78% 8%,93% 22%," +
          "98% 38%,100% 55%,94% 72%,84% 88%,68% 98%," +
          "50% 100%,32% 97%,16% 88%,5% 72%,0% 55%," +
          "3% 38%,8% 22%,18% 10%)",
      };

    case "tag":
      return {
        width: size, height: Math.round(size * 0.54),
        clipPath: "polygon(9% 0%,100% 0%,100% 100%,9% 100%,0% 50%)",
      };

    case "wavy":
      return {
        width: size,
        borderRadius: "58% 42% 52% 48% / 44% 56% 44% 56%",
      };

    default:
      return { width: size, borderRadius: "14px" };
  }
}

function patternBg(pattern?: StickerPattern): CSSProperties {
  if (pattern === "stripes") {
    return {
      backgroundImage:
        "repeating-linear-gradient(-45deg," +
        "rgba(255,255,255,0.18) 0px,rgba(255,255,255,0.18) 3px," +
        "transparent 3px,transparent 10px)",
    };
  }
  if (pattern === "dots") {
    return {
      backgroundImage:
        "radial-gradient(circle,rgba(255,255,255,0.28) 1.5px,transparent 1.5px)",
      backgroundSize: "9px 9px",
    };
  }
  return {};
}

function innerBorder(shape: StickerShape): CSSProperties {
  if (CLIP_SHAPES.includes(shape)) return {};
  if (shape === "stamp") return { border: "3px dashed rgba(255,255,255,0.60)" };
  return { border: "2.5px solid rgba(255,255,255,0.55)" };
}

function paddingFor(shape: StickerShape, size: number): string {
  if (shape === "circle" || shape === "starburst" || shape === "splat") return "0";
  if (shape === "oval")   return `${Math.round(size * 0.06)}px ${Math.round(size * 0.12)}px`;
  if (shape === "tag")    return `8px ${Math.round(size * 0.1)}px 8px ${Math.round(size * 0.14)}px`;
  return `10px ${Math.round(size * 0.1)}px`;
}

// ─── Single sticker ───────────────────────────────────────────────────────────
export function StickerEl({ s }: { s: StickerData }) {
  const ss   = shapeStyle(s.shape, s.size);
  const pb   = patternBg(s.pattern);
  const ib   = innerBorder(s.shape);
  const pad  = paddingFor(s.shape, s.size);
  const fz   = fontSize(s.size, s.shape);

  return (
    <motion.div
      className={`absolute select-none z-20 flex items-center justify-center text-center leading-tight overflow-hidden ${fontClass(s.font)}`}
      style={{
        left: "50%", top: 0,
        backgroundColor: s.bg,
        color: s.color,
        rotate: s.rot,
        fontSize: fz,
        lineHeight: 1.2,
        padding: pad,
        boxShadow: "0 6px 22px rgba(0,0,0,0.16), 0 2px 6px rgba(0,0,0,0.10)",
        x: s.x - s.size / 2,
        y: s.y,
        ...ss,
        ...ib,
        ...pb,
      } as CSSProperties}
      initial={{ scale: 0, rotate: s.rot + 28 }}
      animate={{ scale: 1, rotate: s.rot }}
      whileHover={{ scale: 1.14, rotate: 0, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 280, damping: 18, delay: s.delay }}
    >
      {s.text}
    </motion.div>
  );
}

// ─── Fan container ────────────────────────────────────────────────────────────
export function StickerFan({
  stickers,
  height = 200,
}: {
  stickers: StickerData[];
  height?: number;
}) {
  return (
    <>
      {/* Desktop arc fan */}
      <div
        className="relative w-full max-w-5xl mx-auto hidden md:block flex-shrink-0"
        style={{ height }}
      >
        {stickers.map((s, i) => (
          <StickerEl key={i} s={s} />
        ))}
      </div>

      {/* Mobile wrap row */}
      <div className="flex md:hidden flex-wrap justify-center gap-2 mt-4 mb-2">
        {stickers.map((s, i) => (
          <motion.span
            key={i}
            className={`inline-flex items-center justify-center text-[10px] leading-tight text-center px-3 py-1.5 ${fontClass(s.font)}`}
            style={{
              backgroundColor: s.bg,
              color: s.color,
              borderRadius:
                s.shape === "circle" || s.shape === "oval"
                  ? "50px"
                  : s.shape === "rect" || s.shape === "stamp"
                  ? "10px"
                  : s.shape === "starburst" || s.shape === "splat"
                  ? "50%"
                  : "999px",
              rotate: s.rot,
              border: "2px solid rgba(255,255,255,0.5)",
              boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
              ...(patternBg(s.pattern)),
            } as CSSProperties}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
              delay: s.delay,
            }}
          >
            {s.text}
          </motion.span>
        ))}
      </div>
    </>
  );
}
