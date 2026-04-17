"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { StickerFan } from "@/components/Sticker";
import type { StickerData } from "@/components/Sticker";
import GoldStars from "@/components/GoldStars";

// ─── Header stickers — palette only ──────────────────────────────────────────
const PROJ_STICKERS: StickerData[] = [
  { text: "8 PROJECTS ★",    bg: "#FFB3C6", color: "#FF2D78", shape: "starburst", size: 108, x: -360, y: 42,  rot: -16, delay: 0.42, font: "condensed"                      },
  { text: "CLICK TO OPEN ↓", bg: "#FF2D78", color: "#fff",    shape: "tag",       size: 140, x: -215, y: 98,  rot: 10,  delay: 0.50, font: "hand"                           },
  { text: "DESIGN ✦",        bg: "#A8E6C3", color: "#1A1A1A", shape: "oval",      size: 104, x: 296,  y: 72,  rot: 22,  delay: 0.54, font: "serif"                          },
  { text: "BEHANCE ↗",       bg: "#F5F0E8", color: "#FF2D78", shape: "wavy",      size: 114, x: 376,  y: 18,  rot: -8,  delay: 0.58, font: "condensed", pattern: "dots"    },
  { text: "OPEN TO WORK",    bg: "#FF2D78", color: "#fff",    shape: "splat",     size: 122, x: 346,  y: 118, rot: 14,  delay: 0.62, font: "condensed", pattern: "stripes" },
];

const PROJECTS = [
  { slug: "purdeys",      name: "Purdey's",        category: "D&AD Campaign",  year: "2024", color: "#FFB3C6", accent: "#FF2D78", rot: -3,   tags: ["Campaign", "Branding", "Advertising"],    windowTitle: "purdeys_campaign.psd",    cover: "/projects/purdeys/hero.png"       },
  { slug: "swiss-design", name: "Swiss Design",    category: "Graphic Design", year: "2023", color: "#1A1A1A", accent: "#F5F0E8", rot: 1.5,  tags: ["Typography", "Grid", "Poster"],           windowTitle: "swiss_grid_final_v3.ai",   cover: "/projects/swiss-design/hero.png"  },
  { slug: "cashfree",     name: "Cashfree",        category: "Brand Design",   year: "2024", color: "#A8E6C3", accent: "#FF2D78", rot: -2,   tags: ["Fintech", "UI", "Branding"],              windowTitle: "cashfree_rebrand.fig",     cover: "/projects/cashfree/hero.jpg"      },
  { slug: "magazine",     name: "Magazine",        category: "Editorial",      year: "2023", color: "#F5F0E8", accent: "#FF2D78", rot: 2,    tags: ["Editorial", "Layout", "Print"],           windowTitle: "blast_magazine.indd",      cover: "/projects/magazine/hero.png"      },
  { slug: "janapada-kit", name: "Janapada Kit",    category: "Cultural Design",year: "2024", color: "#FFB3C6", accent: "#FF2D78", rot: -1.5, tags: ["Illustration", "Identity", "Culture"],    windowTitle: "lalitha_janapada.ai",      cover: "/projects/janapada-kit/hero.png"  },
  { slug: "animation",    name: "2D/3D Animation", category: "Motion Design",  year: "2024", color: "#E0E0E0", accent: "#1A1A1A", rot: 2.5,  tags: ["Animation", "3D", "Motion"],             windowTitle: "motion_reel_2024.aep",     cover: "/projects/animation/hero.png"     },
  { slug: "zines",        name: "Zines",           category: "Self-Published", year: "2023", color: "#A8E6C3", accent: "#FF2D78", rot: -2.5, tags: ["Zine", "Illustration", "Print"],          windowTitle: "zine_series_PRINT.pdf",   cover: "/projects/zines/hero.png"         },
  { slug: "personal-work", name: "Personal Work", category: "Illustrations & Posters", year: "2023–2025", color: "#1A1A1A", accent: "#FF2D78", rot: 1, tags: ["Illustration", "Poster", "Personal"], windowTitle: "personal_work.procreate", cover: "/projects/personal-work/punk-future-1.png" },
];

const ALL_TAGS = ["All", "Campaign", "Typography", "Branding", "Illustration", "Motion", "Print", "Editorial", "Poster", "Personal"];

// Retro OS window card — clicking goes directly to project page
function WindowCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          className="relative"
          style={{ rotate: project.rot }}
          whileHover={{ rotate: 0, zIndex: 40, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
        >
          {/* OS window chrome */}
          <div className="border-2 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] bg-[#F5F0E8] overflow-hidden w-64">

            {/* Title bar */}
            <div className="bg-[#1A1A1A] px-3 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF2D78] border border-black/20 flex-shrink-0" />
              <div className="w-3 h-3 rounded-full bg-[#FFB3C6] border border-black/20 flex-shrink-0" />
              <div className="w-3 h-3 rounded-full bg-[#A8E6C3] border border-black/20 flex-shrink-0" />
              <span className="font-editorial text-[11px] italic text-white/60 ml-1 truncate flex-1">
                {project.windowTitle}
              </span>
            </div>

            {/* Menu bar */}
            <div className="bg-[#E8E4DC] border-b-2 border-[#1A1A1A] px-3 py-1 flex gap-4">
              {["File", "Edit", "View"].map(m => (
                <span key={m} className="font-editorial text-[10px] text-[#1A1A1A]/60">{m}</span>
              ))}
            </div>

            {/* Preview area — cover image */}
            <div className="w-full h-40 border-b-2 border-[#1A1A1A] overflow-hidden"
              style={{ backgroundColor: project.color }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info row */}
            <div className="p-3">
              <p className="font-condensed text-xl text-[#1A1A1A] leading-none tracking-wide">{project.name.toUpperCase()}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="font-editorial italic text-xs text-[#1A1A1A]/50">{project.category}</span>
                <span className="font-editorial text-xs text-[#1A1A1A]/40">{project.year}</span>
              </div>
            </div>

            {/* Status bar */}
            <div className="bg-[#E8E4DC] border-t-2 border-[#1A1A1A] px-3 py-1 flex justify-between">
              <span className="font-editorial text-[10px] text-[#1A1A1A]/50 italic">click to open</span>
              <span className="font-editorial text-[10px]" style={{ color: project.accent }}>●</span>
            </div>
          </div>

          {/* Handwritten label below */}
          <p className="font-handwriting text-base text-center mt-2 text-[#1A1A1A]/50"
            style={{ rotate: `${-project.rot}deg` }}>
            {project.tags.join(" · ")}
          </p>
        </motion.div>
      </Link>
    </Reveal>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeTag));

  return (
    <main className="pt-28 pb-32 overflow-x-hidden relative">

      {/* Gold star doodles — scattered throughout */}
      <GoldStars stars={[
        { ch: "★", size: 30, left: "3%",  top: "4%",  rot: -18, op: 0.18, delay: 0   },
        { ch: "✦", size: 18, left: "7%",  top: "28%", rot: 10,  op: 0.14, delay: 0.5 },
        { ch: "✶", size: 24, left: "4%",  top: "55%", rot: 35,  op: 0.16, delay: 1.0 },
        { ch: "★", size: 14, left: "9%",  top: "78%", rot: -30, op: 0.12, delay: 0.7 },
        { ch: "✦", size: 36, left: "91%", top: "6%",  rot: -14, op: 0.18, delay: 0.3 },
        { ch: "★", size: 20, left: "94%", top: "32%", rot: 22,  op: 0.14, delay: 1.2 },
        { ch: "✶", size: 16, left: "88%", top: "60%", rot: -8,  op: 0.13, delay: 0.9 },
        { ch: "✦", size: 26, left: "93%", top: "82%", rot: 18,  op: 0.16, delay: 0.4 },
      ]} />

      {/* Header — same pattern as home hero */}
      <section className="px-6 md:px-10 mb-16 flex flex-col items-center text-center overflow-visible">

        <motion.p
          className="font-editorial italic text-lg text-[#1A1A1A]/35 tracking-widest mb-3"
          style={{ rotate: "-1.5deg" as string }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          eight things i made &amp; loved ✦
        </motion.p>

        {/* Main title */}
        <motion.h1
          className="font-condensed text-[#1A1A1A] leading-none tracking-wide text-center"
          style={{ fontSize: "clamp(60px, 12vw, 148px)", rotate: "-1deg" as string }}
          initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          MY{" "}
          <span className="font-display italic text-[#FF2D78]">Projects.</span>
        </motion.h1>

        <StickerFan stickers={PROJ_STICKERS} />

        {/* Sub-line */}
        <motion.div className="flex flex-wrap items-center justify-center gap-3 mt-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <p className="font-editorial italic text-sm text-[#1A1A1A]/40 leading-relaxed">
            click any window to open the file and read more.
          </p>
          <div className="inline-block bg-[#FF2D78] px-3 py-1" style={{ rotate: "1deg" as string }}>
            <span className="font-condensed text-white tracking-widest text-xs">BEHANCE: archanakowshik</span>
          </div>
        </motion.div>
      </section>

      {/* Filter tags — Bebas Neue style */}
      <section className="px-6 md:px-10 mb-14">
        <p className="font-editorial italic text-sm text-[#1A1A1A]/40 mb-3">filter by:</p>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="font-condensed tracking-widest px-5 py-1.5 border-2 border-[#1A1A1A] text-sm transition-colors"
              animate={{
                backgroundColor: activeTag === tag ? "#FF2D78" : "transparent",
                borderColor: activeTag === tag ? "#FF2D78" : "#1A1A1A",
                color: activeTag === tag ? "#fff" : "#1A1A1A",
              }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {tag.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </section>

      {/* OS Window grid — floating folder aesthetic */}
      <section className="px-6 md:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap gap-10 md:gap-14 items-start"
          >
            {filtered.map((project, i) => (
              <div key={project.name} className="flex-shrink-0"
                style={{ marginTop: [0, 50, -30, 70, 10, -20, 60][i % 7] }}>
                <WindowCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Behance CTA */}
      <section className="px-6 md:px-10 mt-24">
        <Reveal>
          <motion.a
            href="https://www.behance.net/archanakowshik"
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#1A1A1A] p-8 md:p-10 relative border-2 border-[#1A1A1A]"
            style={{ rotate: -1 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="absolute -top-4 left-10 w-16 h-5 bg-[#F5F250] opacity-70 border border-[#1A1A1A]"
              style={{ transform: "rotate(-2deg)" }} />
            <p className="font-editorial italic text-white/40 text-base mb-1">see the full archive on</p>
            <p className="font-condensed text-[#FF2D78] tracking-widest text-5xl md:text-6xl">BEHANCE →</p>
          </motion.a>
        </Reveal>
      </section>

      {/* Marquee */}
      <div className="mt-24 py-4 border-y-2 border-[#1A1A1A] overflow-hidden bg-[#FF2D78]">
        <Marquee
          items={["PURDEY'S", "SWISS DESIGN", "CASHFREE", "MAGAZINE", "JANAPADA KIT", "ANIMATION", "ZINES", "PERSONAL WORK"]}
          className="[&_span]:text-white [&_span]:font-condensed [&_span]:tracking-widest"
        />
      </div>
    </main>
  );
}
