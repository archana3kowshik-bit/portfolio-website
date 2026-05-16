"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PROJECTS = [
  { slug: "purdeys",       name: "Purdey's",        category: "D&AD Campaign",   year: "2024", color: "#F2C4A8", cover: "/projects/purdeys/hero.png"           },
  { slug: "swiss-design",  name: "Swiss Design",    category: "Graphic Design",  year: "2023", color: "#D6D4CE", cover: "/projects/swiss-design/hero.png"       },
  { slug: "cashfree",      name: "Cashfree",        category: "Brand Design",    year: "2024", color: "#A8D5B5", cover: "/projects/cashfree/gff/hero.jpg"       },
  { slug: "magazine",      name: "Magazine",        category: "Editorial",       year: "2023", color: "#EDD853", cover: "/projects/magazine/hero.png"           },
  { slug: "janapada-kit",  name: "Janapada Kit",    category: "Cultural Design", year: "2024", color: "#F2C4A8", cover: "/projects/janapada-kit/hero.png"       },
  { slug: "animation",     name: "2D/3D Animation", category: "Motion",          year: "2024", color: "#D6D4CE", cover: "/projects/animation/hero.png"          },
  { slug: "zines",         name: "Zines",           category: "Self-Published",  year: "2023", color: "#A8D5B5", cover: "/projects/zines/hero.png"              },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── MASTHEAD STRIP ───────────────────────────────────────────────────── */}
      <div className="border-b border-[#111] px-6 md:px-12 py-3 flex justify-between items-center mt-[72px]">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#888]">Bangalore, India</span>
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#888]">Visual Designer · Illustrator · Animator</span>
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#888] hidden md:block">Est. 2021</span>
      </div>

      {/* ── HERO — magazine double spread ────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[88vh] border-b border-[#111]">

        {/* Left — name */}
        <div className="flex flex-col justify-between px-6 md:px-12 pt-10 pb-10 border-r border-[#111]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-display font-black italic text-[#111] leading-[0.9]"
              style={{ fontSize: "clamp(64px, 9.5vw, 148px)" }}
            >
              Archana<br />
              <span className="text-[#1B3A6B]">Kowshik.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <p className="font-body text-sm text-[#888] leading-relaxed max-w-xs">
              Making things that are bold, considered, and full of joy — from brand
              campaigns to editorial illustration.
            </p>
            <div className="flex gap-4">
              <Link href="/projects">
                <motion.span
                  className="font-body text-xs tracking-[0.15em] uppercase bg-[#111] text-white px-6 py-3 inline-block hover:bg-[#1B3A6B] transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  See work
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  className="font-body text-xs tracking-[0.15em] uppercase border border-[#111] px-6 py-3 inline-block hover:border-[#1B3A6B] hover:text-[#1B3A6B] transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Say hello
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right — featured project image, full bleed */}
        <motion.div
          className="relative overflow-hidden bg-[#F2C4A8] min-h-[50vh] md:min-h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link href="/projects/purdeys" className="block w-full h-full absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/purdeys/hero.png"
              alt="Purdey's — D&AD Campaign"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </Link>
          {/* Caption overlay — bottom left, magazine-style */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent pointer-events-none">
            <p className="font-display font-bold italic text-white text-xl leading-tight">Purdey's</p>
            <p className="font-body text-white/70 text-[11px] tracking-widest uppercase mt-0.5">D&AD Campaign · 2024</p>
          </div>
        </motion.div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16">

        {/* Section header */}
        <div className="flex items-baseline justify-between border-b border-[#111] pb-3 mb-10">
          <h2 className="font-display font-black italic text-[#111] text-3xl md:text-4xl">Selected Work</h2>
          <Link href="/projects"
            className="font-body text-xs tracking-[0.15em] uppercase text-[#888] hover:text-[#1B3A6B] transition-colors">
            View all →
          </Link>
        </div>

        {/* Feature row — first project large */}
        <div className="grid md:grid-cols-3 gap-px bg-[#eee] mb-px">
          {/* Large feature */}
          <motion.div
            className="md:col-span-2 bg-white"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href={`/projects/${PROJECTS[1].slug}`}>
              <motion.div className="group" whileHover={{ opacity: 0.95 }}>
                <div className="w-full overflow-hidden" style={{ aspectRatio: "16/10", backgroundColor: PROJECTS[1].color }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PROJECTS[1].cover} alt={PROJECTS[1].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104" />
                </div>
                <div className="p-4 border-t border-[#eee]">
                  <p className="font-display font-bold italic text-[#111] text-xl">{PROJECTS[1].name}</p>
                  <p className="font-body text-[11px] text-[#888] mt-1 tracking-widest uppercase">{PROJECTS[1].category} · {PROJECTS[1].year}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Small right */}
          <motion.div
            className="bg-white"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href={`/projects/${PROJECTS[2].slug}`}>
              <motion.div className="group h-full flex flex-col" whileHover={{ opacity: 0.95 }}>
                <div className="flex-1 overflow-hidden" style={{ aspectRatio: "3/4", backgroundColor: PROJECTS[2].color }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PROJECTS[2].cover} alt={PROJECTS[2].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4 border-t border-[#eee]">
                  <p className="font-display font-bold italic text-[#111] text-lg">{PROJECTS[2].name}</p>
                  <p className="font-body text-[11px] text-[#888] mt-1 tracking-widest uppercase">{PROJECTS[2].category} · {PROJECTS[2].year}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* 3-column grid — remaining projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#eee]">
          {PROJECTS.slice(3).map((p, i) => (
            <motion.div
              key={p.slug}
              className="bg-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
            >
              <Link href={`/projects/${p.slug}`}>
                <motion.div className="group" whileHover={{ opacity: 0.95 }}>
                  <div className="w-full overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: p.color }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.cover} alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 border-t border-[#eee]">
                    <p className="font-display font-bold italic text-[#111] text-lg">{p.name}</p>
                    <p className="font-body text-[11px] text-[#888] mt-1 tracking-widest uppercase">{p.category} · {p.year}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT PULL QUOTE ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#111] px-6 md:px-12 py-20">
        <div className="max-w-3xl">
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#888] mb-6">About</p>
          <motion.h2
            className="font-display font-black italic text-[#111] leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            &ldquo;I make things that are bold, considered, and full of joy.&rdquo;
          </motion.h2>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-6 items-start"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
          >
            <div className="font-body text-sm text-[#888] leading-relaxed max-w-sm">
              B.Design graduate from PES University, Bangalore · 2025 ·
              Open to freelance projects and full-time roles in visual design and illustration.
            </div>
            <Link href="/about"
              className="font-body text-xs tracking-[0.15em] uppercase text-[#1B3A6B] whitespace-nowrap hover:underline">
              Read more →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#111] px-6 md:px-12 py-20">
        <motion.h2
          className="font-display font-black italic text-[#111] leading-none mb-10"
          style={{ fontSize: "clamp(52px, 10vw, 140px)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Say hello<span className="text-[#1B3A6B]">.</span>
        </motion.h2>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link href="/contact">
            <motion.span
              className="inline-block bg-[#111] text-white font-body text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#1B3A6B] transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Get in touch
            </motion.span>
          </Link>
          <a href="mailto:archana3kowshik@gmail.com"
            className="font-body text-sm text-[#888] hover:text-[#111] transition-colors">
            archana3kowshik@gmail.com
          </a>
        </div>
      </section>

    </main>
  );
}
