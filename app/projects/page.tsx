"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const PROJECTS = [
  { slug: "purdeys",       name: "Purdey's",        category: "D&AD Campaign",           year: "2024", cover: "/projects/purdeys/hero.png",               note: "D&AD PENCIL NOMINEE" },
  { slug: "swiss-design",  name: "Swiss Design",    category: "Graphic Design",           year: "2023", cover: "/projects/swiss-design/hero.png",           note: "GRID IS GOD" },
  { slug: "cashfree",      name: "Cashfree",        category: "Brand Design",             year: "2024", cover: "/projects/cashfree/gff/hero.jpg",           note: "LIVE CAMPAIGN" },
  { slug: "magazine",      name: "Magazine",        category: "Editorial",                year: "2023", cover: "/projects/magazine/hero.png",               note: "SELF-ART DIRECTED" },
  { slug: "janapada-kit",  name: "Janapada Kit",    category: "Cultural Design",          year: "2024", cover: "/projects/janapada-kit/hero.png",           note: "TRADITION MEETS NOW" },
  { slug: "animation",     name: "Animation",       category: "Motion Design",            year: "2024", cover: "/projects/animation/hero.png",              note: "2D + 3D" },
  { slug: "zines",         name: "Zines",           category: "Self-Published",           year: "2023", cover: "/projects/zines/hero.png",                  note: "RISOGRAPH" },
  { slug: "personal-work", name: "Personal Work",   category: "Illustrations & Posters",  year: "2023–25", cover: "/projects/personal-work/punk-future-1.png", note: "ONGOING" },
];

const TAGS = ["ALL", "CAMPAIGN", "BRANDING", "EDITORIAL", "MOTION", "PRINT", "PERSONAL"];

const TAG_MAP: Record<string, string[]> = {
  CAMPAIGN:  ["purdeys"],
  BRANDING:  ["cashfree", "janapada-kit"],
  EDITORIAL: ["magazine", "swiss-design"],
  MOTION:    ["animation"],
  PRINT:     ["magazine", "zines"],
  PERSONAL:  ["personal-work", "zines"],
};

export default function Projects() {
  const [active, setActive] = useState("ALL");

  const filtered = active === "ALL"
    ? PROJECTS
    : PROJECTS.filter(p => (TAG_MAP[active] ?? []).includes(p.slug));

  return (
    <main className="bg-cream min-h-screen">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-0 px-6 md:px-12 border-b border-[#C8C4BB]">
        <motion.p
          className="font-mono text-[10px] text-muted tracking-[0.25em] uppercase mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        >
          [Portfolio 2023–25]
        </motion.p>
        <motion.h1
          className="font-display text-ink leading-none tracking-widest"
          style={{ fontSize: "clamp(64px, 14vw, 180px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          WORK<span className="text-blue">.</span>
        </motion.h1>

        {/* Filter strip */}
        <motion.div
          className="flex flex-wrap gap-0 mt-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border-r border-[#C8C4BB] transition-colors first:border-l first:border-[#C8C4BB] ${
                active === tag
                  ? "bg-blue text-white"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── YEARBOOK GRID ──────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link href={`/projects/${p.slug}`} className="group block">
                  {/* Blue duotone image */}
                  <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4", backgroundColor: "#1241FF" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.cover}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: "grayscale(1) contrast(1.1)", mixBlendMode: "multiply" }}
                    />
                  </div>

                  {/* Label block */}
                  <div className="mt-2 border-t border-[#C8C4BB] pt-2">
                    <p className="font-display text-ink text-2xl leading-none tracking-wider group-hover:text-blue transition-colors">
                      {p.name.toUpperCase()}
                    </p>
                    <p className="font-mono text-[9px] text-muted tracking-[0.15em] uppercase mt-0.5">
                      {p.category} · {p.year}
                    </p>
                    {/* Handwritten annotation */}
                    <p className="font-script text-[#C8C4BB] text-sm mt-1 group-hover:text-red transition-colors">
                      {p.note}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── BEHANCE ────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-[#C8C4BB]">
        <motion.a
          href="https://www.behance.net/archanakowshik"
          target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-baseline gap-4"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">Full archive on</span>
          <span
            className="font-display text-ink group-hover:text-blue transition-colors leading-none tracking-widest"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            BEHANCE →
          </span>
        </motion.a>
      </section>
    </main>
  );
}
