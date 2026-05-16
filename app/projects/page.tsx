"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import GoldStars from "@/components/GoldStars";

const PROJECTS = [
  { slug: "purdeys",       name: "Purdey's",        category: "D&AD Campaign",          year: "2024", color: "#FFB3C6", rot: -2,   tags: ["Campaign", "Branding", "Advertising"],    cover: "/projects/purdeys/hero.png"                    },
  { slug: "swiss-design",  name: "Swiss Design",    category: "Graphic Design",          year: "2023", color: "#D6D6D6", rot: 1.5,  tags: ["Typography", "Grid", "Poster"],           cover: "/projects/swiss-design/hero.png"               },
  { slug: "cashfree",      name: "Cashfree",        category: "Brand Design",            year: "2024", color: "#A8E6C3", rot: -1.5, tags: ["Fintech", "UI", "Branding"],              cover: "/projects/cashfree/gff/hero.jpg"               },
  { slug: "magazine",      name: "Magazine",        category: "Editorial",               year: "2023", color: "#E8E8E0", rot: 2,    tags: ["Editorial", "Layout", "Print"],           cover: "/projects/magazine/hero.png"                   },
  { slug: "janapada-kit",  name: "Janapada Kit",    category: "Cultural Design",         year: "2024", color: "#FFB3C6", rot: -1,   tags: ["Illustration", "Identity", "Culture"],    cover: "/projects/janapada-kit/hero.png"               },
  { slug: "animation",     name: "2D/3D Animation", category: "Motion Design",           year: "2024", color: "#E0E0E0", rot: 2.5,  tags: ["Animation", "3D", "Motion"],             cover: "/projects/animation/hero.png"                  },
  { slug: "zines",         name: "Zines",           category: "Self-Published",          year: "2023", color: "#A8E6C3", rot: -2,   tags: ["Zine", "Illustration", "Print"],          cover: "/projects/zines/hero.png"                      },
  { slug: "personal-work", name: "Personal Work",   category: "Illustrations & Posters", year: "2023–2025", color: "#1A1A1A", rot: 1, tags: ["Illustration", "Poster", "Personal"], cover: "/projects/personal-work/punk-future-1.png"     },
];

const ALL_TAGS = ["All", "Campaign", "Typography", "Branding", "Illustration", "Motion", "Print", "Editorial", "Poster", "Personal"];

// staggered vertical nudge per column (0–3) so cards feel alive, not mechanical
// translateY doesn't affect grid row sizing unlike marginTop
const COL_NUDGE = [0, 48, 16, 64]; // px — applied by column index

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          className="group cursor-pointer"
          style={{ rotate: project.rot }}
          whileHover={{ rotate: 0, scale: 1.04, zIndex: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Image */}
          <div
            className="w-full overflow-hidden"
            style={{ aspectRatio: "4/5", backgroundColor: project.color }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.cover}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="pt-3">
            <p className="font-display italic text-xl leading-tight text-[#1A1A1A]">
              {project.name}
            </p>
            <p className="font-sans text-[11px] text-[#1A1A1A]/40 mt-1 tracking-widest uppercase">
              {project.category} · {project.year}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeTag));

  return (
    <main className="pt-28 pb-32 overflow-x-hidden relative">

      {/* Gold star doodles */}
      <GoldStars stars={[
        { ch: "★", size: 30, left: "3%",  top: "4%",  rot: -18, op: 0.18, delay: 0   },
        { ch: "✦", size: 18, left: "7%",  top: "28%", rot: 10,  op: 0.14, delay: 0.5 },
        { ch: "✶", size: 24, left: "4%",  top: "55%", rot: 35,  op: 0.16, delay: 1.0 },
        { ch: "✦", size: 36, left: "91%", top: "6%",  rot: -14, op: 0.18, delay: 0.3 },
        { ch: "★", size: 20, left: "94%", top: "32%", rot: 22,  op: 0.14, delay: 1.2 },
        { ch: "✶", size: 16, left: "88%", top: "60%", rot: -8,  op: 0.13, delay: 0.9 },
      ]} />

      {/* Header */}
      <section className="px-6 md:px-14 mb-16">
        <motion.p
          className="font-editorial italic text-base text-[#1A1A1A]/35 tracking-widest mb-3"
          style={{ rotate: "-1deg" as string }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          eight things i made &amp; loved ✦
        </motion.p>

        <motion.h1
          className="font-display italic text-[#1A1A1A] leading-none"
          style={{ fontSize: "clamp(56px, 11vw, 136px)" }}
          initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          My{" "}
          <span className="text-[#C85535]">Projects.</span>
        </motion.h1>

        <motion.div className="flex flex-wrap items-center gap-3 mt-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <p className="font-editorial italic text-sm text-[#1A1A1A]/40">
            click any project to explore it →
          </p>
          <a
            href="https://www.behance.net/archanakowshik"
            target="_blank" rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-[#C85535] border border-[#C85535] px-3 py-1 hover:bg-[#C85535] hover:text-white transition-colors"
          >
            Behance ↗
          </a>
        </motion.div>
      </section>

      {/* Filter tags */}
      <section className="px-6 md:px-14 mb-14">
        <p className="font-editorial italic text-sm text-[#1A1A1A]/40 mb-3">filter by:</p>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="font-sans tracking-widest px-5 py-1.5 border border-[#1A1A1A] text-xs uppercase transition-colors"
              animate={{
                backgroundColor: activeTag === tag ? "#C85535" : "transparent",
                color: activeTag === tag ? "#fff" : "#1A1A1A",
                borderColor: activeTag === tag ? "#C85535" : "#1A1A1A",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Project grid — staggered column offsets */}
      <section className="px-6 md:px-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-16 pb-16"
          >
            {filtered.map((project, i) => {
              // which column this card lands in (4-col grid on desktop)
              const col = i % 4;
              const nudge = COL_NUDGE[col];
              return (
                <div key={project.name} style={{ transform: `translateY(${nudge}px)` }}>
                  <ProjectCard project={project} index={i} />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Behance CTA */}
      <section className="px-6 md:px-14 mt-28">
        <motion.a
          href="https://www.behance.net/archanakowshik"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-baseline gap-4 group"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="font-display italic text-[#1A1A1A]/20 text-lg tracking-widest">
            see the full archive →
          </span>
          <span
            className="font-display italic leading-none text-[#1A1A1A] group-hover:text-[#C85535] transition-colors duration-200"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            Behance
          </span>
        </motion.a>
      </section>

      {/* Marquee */}
      <div className="mt-24 py-4 border-y border-[#1A1A1A]/10 overflow-hidden">
        <Marquee
          items={["Purdey's", "Swiss Design", "Cashfree", "Magazine", "Janapada Kit", "Animation", "Zines", "Personal Work"]}
          className="[&_span]:font-editorial [&_span]:italic [&_span]:text-[#1A1A1A]/30"
        />
      </div>
    </main>
  );
}
