"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PROJECTS = [
  { slug: "purdeys",       name: "Purdey's",        category: "D&AD Campaign",   color: "#F2C4A8", cover: "/projects/purdeys/hero.png"            },
  { slug: "swiss-design",  name: "Swiss Design",    category: "Graphic Design",  color: "#D6D4CE", cover: "/projects/swiss-design/hero.png"        },
  { slug: "cashfree",      name: "Cashfree",        category: "Brand Design",    color: "#A8D5B5", cover: "/projects/cashfree/gff/hero.jpg"        },
  { slug: "magazine",      name: "Magazine",        category: "Editorial",       color: "#EDD853", cover: "/projects/magazine/hero.png"            },
  { slug: "janapada-kit",  name: "Janapada Kit",    category: "Cultural Design", color: "#F2C4A8", cover: "/projects/janapada-kit/hero.png"        },
  { slug: "animation",     name: "2D/3D Animation", category: "Motion",          color: "#D6D4CE", cover: "/projects/animation/hero.png"           },
  { slug: "zines",         name: "Zines",           category: "Self-Published",  color: "#A8D5B5", cover: "/projects/zines/hero.png"               },
];

const COL_NUDGE = [0, 60, 20, 80];

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── INFO STRIP ───────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-center px-6 md:px-12 pt-7 pb-0">
        <span className="font-body text-[11px] text-[#888] tracking-[0.18em] uppercase">Bangalore, India</span>
        <span className="font-body text-[11px] text-[#888] tracking-[0.18em] uppercase hidden md:block">archana3kowshik@gmail.com</span>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 md:px-8 pt-6 pb-0 overflow-hidden">

        {/* Floating project image — collides with the type */}
        <motion.div
          className="absolute right-4 md:right-12 lg:right-20 top-0 md:top-4 w-40 md:w-64 lg:w-80 z-20 shadow-2xl"
          initial={{ opacity: 0, y: 30, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, scale: 1.03 }}
        >
          <Link href="/projects/purdeys">
            <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4", backgroundColor: "#F2C4A8" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/purdeys/hero.png" alt="Purdey's" className="w-full h-full object-cover" />
            </div>
          </Link>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display text-[#111] leading-[0.88] select-none"
          style={{ fontSize: "clamp(82px, 20vw, 280px)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          ARCHANA<br />
          <span className="text-[#1B3A6B]">KOWSHIK.</span>
        </motion.h1>

        {/* Role + CTA */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mt-4 pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="font-body text-[11px] text-[#888] tracking-[0.2em] uppercase">
            Visual Designer · Illustrator · Animator
          </p>
          <Link href="/projects">
            <motion.span
              className="font-display text-[#111] text-2xl tracking-wide hover:text-[#1B3A6B] transition-colors mt-3 md:mt-0 inline-block"
              whileHover={{ x: 5 }}
            >
              SEE WORK →
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────────── */}
      <div className="h-px bg-[#eee] mx-6 md:mx-12" />

      {/* ── WORK ─────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-16 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-10 pb-20">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              style={{ transform: `translateY(${COL_NUDGE[i % 4]}px)` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projects/${p.slug}`}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ y: -6, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4", backgroundColor: p.color }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.cover} alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-2">
                    <p className="font-display text-[#111] leading-tight tracking-wide text-base">{p.name.toUpperCase()}</p>
                    <p className="font-body text-[10px] text-[#888] mt-0.5 tracking-widest uppercase">{p.category}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <motion.span
              className="font-display text-[#111] text-3xl tracking-wide hover:text-[#1B3A6B] transition-colors inline-flex items-center gap-3"
              whileHover={{ x: 6 }}
            >
              ALL PROJECTS →
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 border-t border-[#eee]">
        <div className="max-w-xl">
          <motion.p
            className="font-body text-[#111] text-lg leading-relaxed"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            I&apos;m Archana — a visual designer and illustrator based in Bangalore, India.
            I make things that are bold, considered, and full of joy.
          </motion.p>
          <motion.p
            className="font-body text-[#888] text-sm mt-3"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            B.Design · PES University · 2025 · Open to freelance &amp; full-time
          </motion.p>
          <motion.div className="mt-5" whileHover={{ x: 4 }}>
            <Link href="/about" className="font-body text-xs tracking-widest uppercase text-[#1B3A6B]">
              More about me →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SAY HELLO ────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 border-t border-[#eee]">
        <motion.h2
          className="font-display text-[#111] leading-none"
          style={{ fontSize: "clamp(56px, 13vw, 180px)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SAY HELLO<span className="text-[#1B3A6B]">.</span>
        </motion.h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
          <Link href="/contact">
            <motion.span
              className="inline-flex items-center gap-2 bg-[#111] text-white font-body text-xs tracking-[0.15em] uppercase px-8 py-4"
              whileHover={{ backgroundColor: "#1B3A6B" }}
              transition={{ duration: 0.2 }}
            >
              Get in touch
            </motion.span>
          </Link>
          <span className="font-body text-[#888] text-sm">archana3kowshik@gmail.com</span>
        </div>
      </section>

    </main>
  );
}
