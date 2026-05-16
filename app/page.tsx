"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";

// ─── Sticker trail ────────────────────────────────────────────────────────────
const TRAIL_IMGS = [
  ...Array.from({ length: 15 }, (_, i) => `/stickers/sticker_${String(i + 1).padStart(2, "0")}.png`),
  ...Array.from({ length: 26 }, (_, i) => `/stickers/sticker2_${String(i + 1).padStart(2, "0")}.png`),
];
interface TrailItem { id: number; x: number; y: number; rot: number; size: number; src: string; }

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  { slug: "purdeys",      name: "Purdey's",        category: "D&AD Campaign",   color: "#F2C4A8", cover: "/projects/purdeys/hero.png"             },
  { slug: "swiss-design", name: "Swiss Design",    category: "Graphic Design",  color: "#D6D4CE", cover: "/projects/swiss-design/hero.png"         },
  { slug: "cashfree",     name: "Cashfree",        category: "Brand Design",    color: "#A8D5B5", cover: "/projects/cashfree/gff/hero.jpg"         },
  { slug: "magazine",     name: "Magazine",        category: "Editorial",       color: "#EDD853", cover: "/projects/magazine/hero.png"             },
  { slug: "janapada-kit", name: "Janapada Kit",    category: "Cultural Design", color: "#F2C4A8", cover: "/projects/janapada-kit/hero.png"         },
  { slug: "animation",    name: "2D/3D Animation", category: "Motion",          color: "#D6D4CE", cover: "/projects/animation/hero.png"            },
  { slug: "zines",        name: "Zines",           category: "Self-Published",  color: "#A8D5B5", cover: "/projects/zines/hero.png"                },
];

// stagger offsets so the cards feel alive
const CARD_OFFSETS = [0, 56, -20, 72, 12, -36, 44];

export default function Home() {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastSpawn = useRef(0);
  const counter   = useRef(0);

  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now();
    if (now - lastSpawn.current < 100) return;
    lastSpawn.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const id   = ++counter.current;
    setTrail(prev => [...prev, {
      id,
      x:    e.clientX - rect.left,
      y:    e.clientY - rect.top,
      rot:  Math.random() * 50 - 25,
      size: Math.random() * 40 + 52,
      src:  TRAIL_IMGS[Math.floor(Math.random() * TRAIL_IMGS.length)],
    }]);
    setTimeout(() => setTrail(prev => prev.filter(s => s.id !== id)), 1000);
  }, []);

  return (
    <main className="overflow-x-hidden" onMouseMove={handleMove}>

      {/* Global sticker trail */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 40 }}>
        <AnimatePresence>
          {trail.map(s => (
            <motion.img key={s.id} src={s.src} alt=""
              className="absolute select-none"
              style={{ left: s.x - s.size / 2, top: s.y - s.size / 2, width: s.size, height: s.size, rotate: s.rot }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, y: -16, opacity: 1 }}
              exit={{ opacity: 0, y: -52, scale: 0.5 }}
              transition={{
                scale:   { type: "spring", stiffness: 500, damping: 24 },
                y:       { duration: 0.9, ease: "easeOut" },
                opacity: { duration: 0.25, delay: 0.72 },
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* ── TOP BAR (Spencer Gabor-style info strip) ──────────────────────────── */}
      <div className="flex justify-between items-center px-6 md:px-12 pt-6 pb-2">
        <span className="font-body text-xs text-[#888] tracking-widest uppercase">Bangalore, India</span>
        <span className="font-body text-xs text-[#888] tracking-widest uppercase hidden md:block">archana3kowshik@gmail.com</span>
      </div>

      {/* ── HERO NAME ─────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-8 pt-4 pb-0 cursor-none overflow-hidden">
        <motion.h1
          className="font-display text-[#111] leading-none tracking-tight text-center select-none"
          style={{ fontSize: "clamp(80px, 19.5vw, 300px)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          ARCHANA<br />
          <span className="text-[#C85535]">KOWSHIK</span>
        </motion.h1>

        {/* Role line — exactly like Spencer Gabor */}
        <motion.p
          className="font-display text-[#ccc] text-center leading-none mt-2"
          style={{ fontSize: "clamp(28px, 6vw, 88px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          VISUAL DESIGNER, ILLUSTRATOR &amp; ANIMATOR
        </motion.p>
      </section>

      {/* ── WORK CARDS — overlapping staggered grid ───────────────────────────── */}
      <section className="px-6 md:px-12 mt-16 md:mt-20">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              style={{ transform: `translateY(${CARD_OFFSETS[i] ?? 0}px)` }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projects/${p.slug}`}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.04, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div
                    className="w-full overflow-hidden"
                    style={{ aspectRatio: "3/4", backgroundColor: p.color }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.cover} alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="font-display text-[#111] text-lg leading-tight tracking-wide">{p.name.toUpperCase()}</p>
                    <p className="font-body text-[11px] text-[#888] mt-0.5 tracking-widest uppercase">{p.category}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all */}
        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
        >
          <Link href="/projects">
            <motion.span
              className="font-display text-[#111] tracking-wide text-2xl inline-flex items-center gap-3 hover:text-[#C85535] transition-colors"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              ALL PROJECTS →
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* ── CLIENTS / INFO BAR — Spencer Gabor has this ───────────────────────── */}
      <div className="border-t border-b border-[#eee] py-4 px-6 md:px-12 flex flex-wrap gap-x-8 gap-y-1 mt-8">
        <span className="font-body text-[11px] text-[#888] tracking-widest uppercase">Clients include</span>
        {["Cashfree", "PES University", "D&AD", "Self-published"].map(c => (
          <span key={c} className="font-body text-[11px] text-[#888] tracking-widest uppercase">{c}</span>
        ))}
      </div>

      {/* ── ABOUT ─────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 max-w-3xl">
        <motion.p
          className="font-body text-[#111] text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          I&apos;m a visual designer and illustrator based in Bangalore, India.
          I make things that are bold, considered, and full of joy —
          from brand campaigns to editorial illustration.
        </motion.p>
        <motion.p
          className="font-body text-[#888] text-sm mt-4 tracking-wide"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
        >
          B.Design · PES University · 2025 · Open to freelance &amp; full-time
        </motion.p>
        <motion.div className="mt-6" whileHover={{ x: 4 }}>
          <Link href="/about"
            className="font-body text-xs tracking-widest uppercase text-[#C85535]">
            Read more →
          </Link>
        </motion.div>
      </section>

      {/* ── SAY HELLO ─────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pb-24 border-t border-[#eee] pt-20">
        <motion.h2
          className="font-display text-[#111] leading-none"
          style={{ fontSize: "clamp(60px, 14vw, 200px)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          SAY HELLO<span className="text-[#C85535]">.</span>
        </motion.h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
          <Link href="/contact">
            <motion.span
              className="inline-flex items-center gap-2 bg-[#111] text-white font-body text-xs tracking-[0.15em] uppercase px-8 py-4"
              whileHover={{ scale: 1.03 }}
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
