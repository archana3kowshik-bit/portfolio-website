"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────────
   Ola Schauerhuber–style scattered layout:
   Each project is positioned absolutely in a tall canvas, drifting at
   different sizes and angles — no grid, just things placed on white space.
───────────────────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    slug: "purdeys",
    name: "Purdey's",
    category: "D&AD Campaign",
    year: "2024",
    color: "#F2C4A8",
    cover: "/projects/purdeys/hero.png",
    // position & size: [left%, top_px, width_px, rot_deg]
    pos: [8,   120, 280, -4],
  },
  {
    slug: "cashfree",
    name: "Cashfree",
    category: "Brand Design",
    year: "2024",
    color: "#A8D5B5",
    cover: "/projects/cashfree/gff/hero.jpg",
    pos: [52,  80, 240,  3],
  },
  {
    slug: "swiss-design",
    name: "Swiss Design",
    category: "Graphic Design",
    year: "2023",
    color: "#D6D4CE",
    cover: "/projects/swiss-design/hero.png",
    pos: [30, 420, 200, -2],
  },
  {
    slug: "magazine",
    name: "Magazine",
    category: "Editorial",
    year: "2023",
    color: "#EDD853",
    cover: "/projects/magazine/hero.png",
    pos: [68, 380, 260,  5],
  },
  {
    slug: "janapada-kit",
    name: "Janapada Kit",
    category: "Cultural Design",
    year: "2024",
    color: "#F2C4A8",
    cover: "/projects/janapada-kit/hero.png",
    pos: [5,  680, 220,  2],
  },
  {
    slug: "animation",
    name: "2D / 3D Animation",
    category: "Motion Design",
    year: "2024",
    color: "#D6D4CE",
    cover: "/projects/animation/hero.png",
    pos: [50, 660, 190, -6],
  },
  {
    slug: "zines",
    name: "Zines",
    category: "Self-Published",
    year: "2023",
    color: "#A8D5B5",
    cover: "/projects/zines/hero.png",
    pos: [76, 900, 210,  4],
  },
  {
    slug: "personal-work",
    name: "Personal Work",
    category: "Illustrations & Posters",
    year: "2023–25",
    color: "#111",
    cover: "/projects/personal-work/punk-future-1.png",
    pos: [18, 960, 300, -3],
  },
];

export default function Projects() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-0 px-6 md:px-16">
        <motion.p
          className="font-body text-[11px] tracking-[0.22em] uppercase text-[#bbb] mb-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        >
          Eight things I made &amp; loved
        </motion.p>
        <motion.h1
          className="font-display font-black text-[#111] leading-none tracking-tight"
          style={{ fontSize: "clamp(52px, 11vw, 140px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Work<span className="text-[#1B3A6B]">.</span>
        </motion.h1>
      </section>

      {/* ── SCATTERED CANVAS ───────────────────────────────────────────────── */}
      {/* Mobile: simple stacked list; Desktop: free-floating canvas           */}

      {/* MOBILE LIST */}
      <section className="md:hidden px-6 pt-12 pb-24 flex flex-col gap-12">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/projects/${p.slug}`} className="group block">
              <div className="w-full overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: p.color }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.cover} alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3">
                <p className="font-display text-[#111] text-xl tracking-wide">{p.name.toUpperCase()}</p>
                <p className="font-body text-[11px] text-[#999] mt-0.5 tracking-widest uppercase">
                  {p.category} · {p.year}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* DESKTOP SCATTERED */}
      <section
        className="hidden md:block relative"
        style={{ height: 1360 }}
      >
        {PROJECTS.map((p, i) => {
          const [leftPct, topPx, widthPx, rot] = p.pos;
          return (
            <motion.div
              key={p.slug}
              className="absolute"
              style={{
                left:  `${leftPct}%`,
                top:   topPx,
                width: widthPx,
                rotate: rot,
                zIndex: i,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
            >
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="w-full overflow-hidden shadow-lg"
                  style={{ aspectRatio: "3/4", backgroundColor: p.color }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover} alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-2.5">
                  <p className="font-display text-[#111] text-base leading-tight tracking-wide">
                    {p.name.toUpperCase()}
                  </p>
                  <p className="font-body text-[10px] text-[#999] mt-0.5 tracking-widest uppercase">
                    {p.category} · {p.year}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}

        {/* Floating label — Ola Schauerhuber has these ambient text labels */}
        <motion.p
          className="absolute font-body text-[11px] tracking-[0.2em] uppercase text-[#ddd] select-none"
          style={{ left: "42%", top: 300 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        >
          hover to explore
        </motion.p>
      </section>

      {/* ── BEHANCE FOOTER LINK ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 border-t border-[#eee]">
        <motion.a
          href="https://www.behance.net/archanakowshik"
          target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-baseline gap-4"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="font-body text-sm text-[#bbb] uppercase tracking-widest">Full archive on</span>
          <span
            className="font-display font-black text-[#111] group-hover:text-[#1B3A6B] transition-colors leading-none"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            BEHANCE →
          </span>
        </motion.a>
      </section>

    </main>
  );
}
