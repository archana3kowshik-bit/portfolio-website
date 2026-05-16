"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";

// ─── Cursor trail ─────────────────────────────────────────────────────────────
const TRAIL_IMGS = [
  ...Array.from({ length: 15 }, (_, i) => `/stickers/sticker_${String(i + 1).padStart(2, "0")}.png`),
  ...Array.from({ length: 26 }, (_, i) => `/stickers/sticker2_${String(i + 1).padStart(2, "0")}.png`),
];
interface TrailItem { id: number; x: number; y: number; rot: number; size: number; src: string; }

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  { slug: "purdeys",       name: "Purdey's",        category: "D&AD Campaign",   color: "#F2C4A8", rot: -3,   mt:  0,  cover: "/projects/purdeys/hero.png"                },
  { slug: "swiss-design",  name: "Swiss Design",    category: "Graphic Design",  color: "#D6D4CE", rot:  2,   mt:  48, cover: "/projects/swiss-design/hero.png"            },
  { slug: "cashfree",      name: "Cashfree",        category: "Brand Design",    color: "#A8D5B5", rot: -2,   mt: -16, cover: "/projects/cashfree/gff/hero.jpg"            },
  { slug: "magazine",      name: "Magazine",        category: "Editorial",       color: "#EDD853", rot:  3,   mt:  64, cover: "/projects/magazine/hero.png"                },
  { slug: "janapada-kit",  name: "Janapada Kit",    category: "Cultural Design", color: "#F2C4A8", rot: -1.5, mt:  8,  cover: "/projects/janapada-kit/hero.png"            },
  { slug: "animation",     name: "2D/3D Animation", category: "Motion",          color: "#D6D4CE", rot:  2.5, mt: -24, cover: "/projects/animation/hero.png"               },
  { slug: "zines",         name: "Zines",           category: "Self-Published",  color: "#A8D5B5", rot: -2.5, mt:  40, cover: "/projects/zines/hero.png"                   },
];

export default function Home() {
  const [trail, setTrail]   = useState<TrailItem[]>([]);
  const lastSpawn            = useRef(0);
  const counter              = useRef(0);

  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now();
    if (now - lastSpawn.current < 110) return;
    lastSpawn.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const id   = ++counter.current;
    setTrail(prev => [...prev, {
      id,
      x:    e.clientX - rect.left,
      y:    e.clientY - rect.top,
      rot:  Math.random() * 50 - 25,
      size: Math.random() * 36 + 52,
      src:  TRAIL_IMGS[Math.floor(Math.random() * TRAIL_IMGS.length)],
    }]);
    setTimeout(() => setTrail(prev => prev.filter(s => s.id !== id)), 1100);
  }, []);

  return (
    <main className="overflow-x-hidden" onMouseMove={handleMove}>

      {/* ── Sticker trail (whole page) ── */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 40 }}>
        <AnimatePresence>
          {trail.map(s => (
            <motion.img key={s.id} src={s.src} alt=""
              className="absolute select-none"
              style={{ left: s.x - s.size / 2, top: s.y - s.size / 2, width: s.size, height: s.size, rotate: s.rot }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, opacity: 1, y: -18 }}
              exit={{ opacity: 0, y: -56, scale: 0.6 }}
              transition={{
                scale:   { type: "spring", stiffness: 480, damping: 22 },
                y:       { duration: 1.0, ease: "easeOut" },
                opacity: { duration: 0.3, delay: 0.7 },
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* ── HERO — name fills the screen ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-28 pb-10 cursor-none overflow-hidden">

        {/* Name — Awesome Serif, enormous */}
        <div>
          <motion.h1
            className="font-hero italic text-[#111111] leading-[0.88]"
            style={{ fontSize: "clamp(72px, 18vw, 260px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Archana<br />
            <span className="relative inline-block">
              Kowshik
              {/* yellow underline */}
              <motion.span
                className="absolute left-0 bottom-2 h-[0.12em] w-full block rounded-full"
                style={{ background: "#EDD853" }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              />
            </span>
            <span className="text-[#C85535]">.</span>
          </motion.h1>
        </div>

        {/* Bottom row — role left, scroll right */}
        <motion.div
          className="flex items-end justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div>
            <p className="font-sans text-sm text-[#999490] tracking-widest uppercase mb-1">
              Visual Designer &amp; Illustrator
            </p>
            <p className="font-sans text-sm text-[#999490] tracking-widest uppercase">
              Bangalore, India — open to freelance
            </p>
          </div>
          <motion.p
            className="font-display italic text-[#999490] text-base hidden md:block"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            scroll ↓
          </motion.p>
        </motion.div>
      </section>

      {/* ── WORK — straight in, no header ────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 pb-32">

        {/* Minimal label */}
        <motion.p
          className="font-sans text-xs text-[#999490] tracking-[0.2em] uppercase mb-16"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Selected work
        </motion.p>

        {/* Polaroid scatter */}
        <div className="flex flex-wrap gap-10 md:gap-14 items-start">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              style={{ marginTop: p.mt }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projects/${p.slug}`}>
                <motion.div
                  className="flex flex-col items-center cursor-pointer"
                  style={{ rotate: p.rot }}
                  whileHover={{ rotate: 0, scale: 1.06, zIndex: 50 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {/* Pin */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#C85535] -mb-1.5 z-10 shadow-sm" />
                  {/* Polaroid */}
                  <div className="polaroid" style={{ width: 195 }}>
                    <div className="w-full h-44 overflow-hidden" style={{ backgroundColor: p.color }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.cover} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-display italic text-[15px] text-center text-[#111] mt-3 leading-tight">{p.name}</p>
                    <p className="font-sans text-[10px] text-center text-[#999490] mt-0.5 tracking-widest uppercase">{p.category}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/projects">
            <motion.span
              className="font-display italic text-[#C85535] text-2xl inline-flex items-center gap-2"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              see all projects →
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* ── ABOUT — one simple block ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[#111]/8">
        <div className="max-w-2xl">
          <motion.p
            className="font-sans text-xs text-[#999490] tracking-[0.2em] uppercase mb-8"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            About
          </motion.p>
          <motion.p
            className="font-display italic text-[#111] leading-snug mb-6"
            style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            I&apos;m Archana — a visual designer and illustrator based in Bangalore.
            I love making things that feel bold, considered, and a little joyful.
          </motion.p>
          <motion.p
            className="font-sans text-[#999490] text-sm leading-relaxed mb-8"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            B.Design graduate from PES University · 2025 · Open to freelance &amp; full-time
          </motion.p>
          <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link href="/about"
              className="font-sans text-xs tracking-widest uppercase text-[#C85535] inline-flex items-center gap-2">
              More about me →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SAY HELLO ────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[#111]/8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <h2
            className="font-hero italic text-[#111] leading-none mb-8"
            style={{ fontSize: "clamp(56px, 12vw, 160px)" }}
          >
            Say hello<span className="text-[#C85535]">.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center gap-2 bg-[#111] text-[#FAFAF8] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4"
                whileHover={{ scale: 1.03 }}
              >
                Get in touch ♡
              </motion.span>
            </Link>
            <span className="font-sans text-[#999490] text-sm">archana3kowshik@gmail.com</span>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
