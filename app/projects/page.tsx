"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const PROJECTS = [
  { slug: "purdeys",       name: "Purdey's",        category: "D&AD Campaign",           year: "2024", color: "#F2C4A8", rot: -1.5, cover: "/projects/purdeys/hero.png"              },
  { slug: "swiss-design",  name: "Swiss Design",    category: "Graphic Design",           year: "2023", color: "#D6D4CE", rot:  1,   cover: "/projects/swiss-design/hero.png"          },
  { slug: "cashfree",      name: "Cashfree",        category: "Brand Design",             year: "2024", color: "#A8D5B5", rot: -1,   cover: "/projects/cashfree/gff/hero.jpg"          },
  { slug: "magazine",      name: "Magazine",        category: "Editorial",                year: "2023", color: "#EDD853", rot:  1.5, cover: "/projects/magazine/hero.png"              },
  { slug: "janapada-kit",  name: "Janapada Kit",    category: "Cultural Design",          year: "2024", color: "#F2C4A8", rot: -1,   cover: "/projects/janapada-kit/hero.png"          },
  { slug: "animation",     name: "2D/3D Animation", category: "Motion Design",            year: "2024", color: "#D6D4CE", rot:  2,   cover: "/projects/animation/hero.png"             },
  { slug: "zines",         name: "Zines",           category: "Self-Published",           year: "2023", color: "#A8D5B5", rot: -1.5, cover: "/projects/zines/hero.png"                 },
  { slug: "personal-work", name: "Personal Work",   category: "Illustrations & Posters",  year: "2023–25", color: "#111111", rot: 1, cover: "/projects/personal-work/punk-future-1.png"},
];

const ALL_TAGS = ["All", "Campaign", "Typography", "Branding", "Illustration", "Motion", "Print", "Editorial", "Poster", "Personal"];
const COL_NUDGE = [0, 56, 16, 72];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          className="group cursor-pointer"
          style={{ rotate: project.rot }}
          whileHover={{ rotate: 0, scale: 1.04, zIndex: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4", backgroundColor: project.color }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.cover} alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="mt-2.5">
            <p className="font-display text-[#111] text-lg leading-tight tracking-wide">
              {project.name.toUpperCase()}
            </p>
            <p className="font-body text-[11px] text-[#888] mt-0.5 tracking-widest uppercase">
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
    : PROJECTS.filter(p => {
        const tagMap: Record<string, string[]> = {
          Campaign: ["purdeys"], Typography: ["swiss-design"], Branding: ["cashfree", "janapada-kit"],
          Illustration: ["janapada-kit", "zines", "personal-work"], Motion: ["animation"],
          Print: ["magazine", "zines"], Editorial: ["magazine"], Poster: ["personal-work"], Personal: ["personal-work"],
        };
        return (tagMap[activeTag] ?? []).includes(p.slug);
      });

  return (
    <main className="pt-24 pb-32">

      {/* Header */}
      <section className="px-6 md:px-12 mb-12">
        <motion.p
          className="font-body text-xs text-[#888] tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        >
          Eight things I made &amp; loved
        </motion.p>
        <motion.h1
          className="font-display text-[#111] leading-none tracking-tight"
          style={{ fontSize: "clamp(56px, 13vw, 160px)" }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          MY <span className="text-[#C85535]">PROJECTS.</span>
        </motion.h1>
        <motion.div className="flex items-center gap-4 mt-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p className="font-body text-sm text-[#888]">Click any project to explore it</p>
          <a href="https://www.behance.net/archanakowshik" target="_blank" rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-[#C85535] hover:underline">
            Behance ↗
          </a>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 mb-12">
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map(tag => (
            <motion.button key={tag}
              onClick={() => setActiveTag(tag)}
              className="font-body text-xs tracking-widest uppercase px-4 py-1.5 border transition-colors"
              animate={{
                backgroundColor: activeTag === tag ? "#C85535" : "transparent",
                borderColor:     activeTag === tag ? "#C85535" : "#ddd",
                color:           activeTag === tag ? "#fff"    : "#888",
              }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.12 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-14 pb-16"
          >
            {filtered.map((project, i) => (
              <div key={project.name} style={{ transform: `translateY(${COL_NUDGE[i % 4]}px)` }}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Behance CTA */}
      <section className="px-6 md:px-12 mt-16">
        <motion.a
          href="https://www.behance.net/archanakowshik"
          target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-baseline gap-4"
          whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="font-body text-sm text-[#888] uppercase tracking-widest">Full archive on</span>
          <span className="font-display text-[#111] group-hover:text-[#C85535] transition-colors leading-none"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}>
            BEHANCE →
          </span>
        </motion.a>
      </section>
    </main>
  );
}
