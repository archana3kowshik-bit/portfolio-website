"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FEATURED = [
  { slug: "purdeys",      name: "Purdey's",     category: "D&AD Campaign",   year: "2024", cover: "/projects/purdeys/hero.png"         },
  { slug: "cashfree",     name: "Cashfree",     category: "Brand Design",    year: "2024", cover: "/projects/cashfree/gff/hero.jpg"    },
  { slug: "magazine",     name: "Magazine",     category: "Editorial",       year: "2023", cover: "/projects/magazine/hero.png"        },
  { slug: "janapada-kit", name: "Janapada Kit", category: "Cultural Design", year: "2024", cover: "/projects/janapada-kit/hero.png"   },
];

const STATS = [
  { label: "NAME",    value: "ARCHANA KOWSHIK" },
  { label: "BASE",    value: "BANGALORE, IN" },
  { label: "ROLE",    value: "VISUAL DESIGNER · ILLUSTRATOR · ANIMATOR" },
  { label: "STATUS",  value: "AVAILABLE — FREELANCE & FULL-TIME" },
  { label: "SKILLS",  value: "ILLUSTRATION · BRANDING · MOTION · EDITORIAL" },
  { label: "CLIENTS", value: "CASHFREE · D&AD · PES UNIVERSITY" },
];

export default function Home() {
  return (
    <main>

      {/* ── HERO — full viewport, electric blue ─────────────────────────────── */}
      <section className="relative min-h-screen bg-blue flex flex-col justify-between pt-20 pb-10 px-6 md:px-12 overflow-hidden">

        {/* Top label bar */}
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        >
          <p className="font-mono text-[10px] text-white/60 tracking-[0.25em] uppercase">
            Portfolio · 2024–25
          </p>
          <p className="font-mono text-[10px] text-white/60 tracking-[0.2em] uppercase hidden md:block">
            Visual Designer & Illustrator
          </p>
          <p className="font-mono text-[10px] text-white/60 tracking-[0.2em] uppercase">
            Bangalore, India
          </p>
        </motion.div>

        {/* Main name */}
        <div className="flex-1 flex flex-col justify-center py-8">
          <motion.h1
            className="font-display text-white leading-none tracking-widest"
            style={{ fontSize: "clamp(80px, 18vw, 260px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            ARCHANA
          </motion.h1>
          <motion.h1
            className="font-display text-white leading-none tracking-widest"
            style={{ fontSize: "clamp(80px, 18vw, 260px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            KOWSHIK
          </motion.h1>
        </div>

        {/* Bottom strip */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        >
          <p className="font-mono text-[11px] text-white/70 tracking-[0.18em] uppercase leading-relaxed">
            Making things that feel<br/>
            <span className="font-script text-white text-xl">bold and joyful.</span>
          </p>
          <Link href="/projects">
            <motion.span
              className="font-mono text-[11px] text-white border border-white/40 px-5 py-2.5 tracking-[0.2em] uppercase hover:bg-white hover:text-blue transition-colors inline-block"
              whileHover={{ scale: 1.02 }}
            >
              See Work →
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* ── STATS / ID CARD ──────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-[#C8C4BB] px-6 md:px-12 py-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map(({ label, value }, i) => (
            <div key={label} className="flex gap-4 md:gap-8 border-t border-[#C8C4BB] py-3 first:border-t-0">
              <span className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase w-20 shrink-0 pt-0.5">
                [{label}]
              </span>
              <motion.span
                className="font-mono text-[11px] text-ink tracking-[0.12em] uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                {value}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── FEATURED WORK ─────────────────────────────────────────────────────── */}
      <section className="bg-cream px-6 md:px-12 py-16">
        <motion.p
          className="font-mono text-[10px] text-muted tracking-[0.25em] uppercase mb-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          [Selected Work]
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {FEATURED.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
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
                <div className="mt-2 border-t border-[#C8C4BB] pt-2">
                  <p className="font-display text-ink text-2xl leading-none tracking-wider group-hover:text-blue transition-colors">
                    {p.name.toUpperCase()}
                  </p>
                  <p className="font-mono text-[9px] text-muted tracking-[0.18em] uppercase mt-1">
                    {p.category} · {p.year}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── BIG CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-ink px-6 md:px-12 py-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <motion.h2
              className="font-display text-white leading-none tracking-widest hover:text-blue transition-colors"
              style={{ fontSize: "clamp(56px, 12vw, 160px)" }}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ALL<br />WORK →
            </motion.h2>
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/contact">
            <motion.span
              className="inline-block font-mono text-[11px] text-white border border-[#444] px-6 py-3 tracking-[0.2em] uppercase hover:border-blue hover:text-blue transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Get in touch →
            </motion.span>
          </Link>
          <p className="font-mono text-[10px] text-[#555] tracking-[0.18em] uppercase">
            archana3kowshik@gmail.com
          </p>
        </motion.div>
      </section>

    </main>
  );
}
