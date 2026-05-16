"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { StickerFan } from "@/components/Sticker";
import type { StickerData } from "@/components/Sticker";
import GoldStars from "@/components/GoldStars";

// ─── Palette: hot pink · light pink · mint green · beige · grey ──────────────
const STICKERS: StickerData[] = [
  { text: "GRAPHIC DESIGN ✦", bg: "#FF2D78", color: "#fff",    shape: "starburst", size: 122, x: -340, y: 10,  rot: -20, delay: 0.40, font: "condensed", pattern: "dots"    },
  { text: "AVAILABLE!",        bg: "#FFB3C6", color: "#FF2D78", shape: "oval",      size: 118, x: -205, y: 62,  rot: 8,   delay: 0.48, font: "condensed"                      },
  { text: "ILLUSTRATION",      bg: "#F5F0E8", color: "#FF2D78", shape: "wavy",      size: 138, x: -65,  y: 70,  rot: -5,  delay: 0.52, font: "sans"                           },
  { text: "HIRE ME ♡",         bg: "#A8E6C3", color: "#1A1A1A", shape: "splat",     size: 110, x: 62,   y: 62,  rot: 14,  delay: 0.56, font: "serif"                          },
  { text: "BOLD DESIGN",       bg: "#FF2D78", color: "#fff",    shape: "tag",       size: 132, x: 190,  y: 58,  rot: -8,  delay: 0.60, font: "sans",      pattern: "stripes" },
  { text: "B.DES ★",           bg: "#E0E0E0", color: "#FF2D78", shape: "circle",    size:  92, x: 300,  y: 28,  rot: 18,  delay: 0.64, font: "condensed"                      },
  { text: "OPEN TO COLLAB",    bg: "#FFB3C6", color: "#FF2D78", shape: "stamp",     size: 148, x: 410,  y: 2,   rot: -13, delay: 0.68, font: "serif",     pattern: "dots"    },
];

// ─── Pinboard projects ────────────────────────────────────────────────────────
const PROJECTS = [
  { slug: "purdeys",      name: "Purdey's",        category: "D&AD Campaign",  color: "#FFB3C6", rot: -3,   mt: 0,   cover: "/projects/purdeys/hero.png"      },
  { slug: "swiss-design", name: "Swiss Design",    category: "Graphic Design", color: "#1A1A1A", rot: 2,    mt: 40,  cover: "/projects/swiss-design/hero.png" },
  { slug: "cashfree",     name: "Cashfree",        category: "Brand Design",   color: "#A8E6C3", rot: -2,   mt: -20, cover: "/projects/cashfree/gff/hero.jpg" },
  { slug: "magazine",     name: "Magazine",        category: "Editorial",      color: "#F5F0E8", rot: 3,    mt: 60,  cover: "/projects/magazine/hero.png"     },
  { slug: "janapada-kit", name: "Janapada Kit",    category: "Cultural Design",color: "#FFB3C6", rot: -1,   mt: 0,   cover: "/projects/janapada-kit/hero.png" },
  { slug: "animation",    name: "2D/3D Animation", category: "Motion",         color: "#E0E0E0", rot: 2.5,  mt: 30,  cover: "/projects/animation/hero.png"    },
  { slug: "zines",        name: "Zines",           category: "Self-Published", color: "#A8E6C3", rot: -2.5, mt: -10, cover: "/projects/zines/hero.png"        },
];

function PolaroidCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  return (
    <Reveal delay={i * 0.07}>
      <Link href={`/projects/${p.slug}`}>
        <motion.div
          className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          style={{ rotate: p.rot }}
          whileHover={{ rotate: 0, scale: 1.08, zIndex: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Push-pin */}
          <div className="w-5 h-5 rounded-full bg-[#FF2D78] border-2 border-[#1A1A1A] shadow-md -mb-2 z-20" />

          {/* Polaroid with real cover image */}
          <div className="polaroid" style={{ width: 220 }}>
            <div className="w-full h-44 overflow-hidden" style={{ backgroundColor: p.color }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <p className="font-handwriting text-lg text-center text-[#1A1A1A] mt-3 leading-tight">{p.name}</p>
            <p className="font-handwriting text-sm text-center text-[#1A1A1A]/50">{p.category}</p>
          </div>
        </motion.div>
      </Link>
    </Reveal>
  );
}


// ─── Receipt card ─────────────────────────────────────────────────────────────
function ReceiptCard() {
  return (
    <motion.div
      className="bg-white font-mono text-[#1A1A1A] p-6 shadow-lg max-w-xs w-full"
      style={{
        rotate: 2,
        borderTop: "4px dashed #1A1A1A",
        borderBottom: "4px dashed #1A1A1A",
      }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <p className="text-center text-xs tracking-[0.3em] uppercase mb-1 border-b border-dashed border-black/30 pb-2">
        ★ archana kowshik ★
      </p>
      <p className="text-center text-[10px] text-black/40 mb-4">Visual Designer & Illustrator</p>
      <div className="text-xs space-y-1 border-b border-dashed border-black/30 pb-3 mb-3">
        {[
          ["Graphic Design", "✓✓✓✓✓"],
          ["Illustration",   "✓✓✓✓✓"],
          ["Visual Design",  "✓✓✓✓"],
          ["Animation",      "✓✓✓"],
          ["Branding",       "✓✓✓✓"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4">
            <span>{k}</span><span className="text-[#FF2D78]">{v}</span>
          </div>
        ))}
      </div>
      <div className="text-xs space-y-1 border-b border-dashed border-black/30 pb-3 mb-3">
        <div className="flex justify-between"><span>University</span><span>PES, BLR</span></div>
        <div className="flex justify-between"><span>Degree</span><span>B.Design</span></div>
        <div className="flex justify-between"><span>Year</span><span>2021-2025</span></div>
      </div>
      <p className="text-center text-[10px] tracking-widest text-black/40">THANK YOU FOR VISITING ♡</p>
      <p className="text-center text-[10px] tracking-widest text-black/40">archana3kowshik@gmail.com</p>
    </motion.div>
  );
}

// ─── Neon post-its ────────────────────────────────────────────────────────────
const POSTITS = [
  { text: "open to freelance!",     bg: "#F5F0E8", color: "#FF2D78", rot: -4  },
  { text: "based in bangalore 🇮🇳",  bg: "#FF2D78", color: "#fff",    rot: 2   },
  { text: "b.design grad",          bg: "#FFB3C6", color: "#FF2D78", rot: -2  },
  { text: "7 projects & counting",  bg: "#A8E6C3", color: "#1A1A1A", rot: 3   },
  { text: "bold & captivating ✦",   bg: "#E0E0E0", color: "#FF2D78", rot: -3  },
  { text: "let's collab!",          bg: "#fff",    color: "#FF2D78", rot: 1.5 },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO — fully centred, sticker fan below the name ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 overflow-hidden">

        {/* Subtle bg glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, #FF2D78, transparent 65%)" }} />
          <div className="absolute bottom-16 left-1/4 w-72 h-72 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #FFB3C6, transparent 70%)" }} />
        </div>

        {/* Gold star doodles — hero */}
        <GoldStars stars={[
          { ch: "★", size: 28, left: "6%",  top: "12%", rot: 15,  op: 0.55, delay: 0   },
          { ch: "✦", size: 16, left: "11%", top: "38%", rot: -8,  op: 0.40, delay: 0.5 },
          { ch: "✶", size: 22, left: "4%",  top: "62%", rot: 30,  op: 0.50, delay: 1.1 },
          { ch: "★", size: 14, left: "18%", top: "78%", rot: -20, op: 0.35, delay: 0.8 },
          { ch: "✦", size: 32, left: "87%", top: "10%", rot: -12, op: 0.60, delay: 0.3 },
          { ch: "★", size: 18, left: "92%", top: "35%", rot: 25,  op: 0.45, delay: 1.4 },
          { ch: "✶", size: 26, left: "82%", top: "58%", rot: -5,  op: 0.55, delay: 0.7 },
          { ch: "✦", size: 14, left: "76%", top: "80%", rot: 18,  op: 0.38, delay: 1.0 },
          { ch: "★", size: 20, left: "50%", top: "8%",  rot: -15, op: 0.42, delay: 0.6 },
        ]} />

        {/* Tiny annotation above name */}
        <motion.p
          className="font-editorial italic text-lg text-[#1A1A1A]/35 mb-1 tracking-widest text-center"
          style={{ rotate: -2 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          psst — hi, i&apos;m ↓
        </motion.p>

        {/* ARCHANA — centred Playfair Black with highlighter */}
        <div className="relative inline-block">
          <motion.h1
            className="font-display font-black text-[#1A1A1A] leading-none relative z-10 text-center"
            style={{ fontSize: "clamp(72px, 16vw, 220px)", rotate: -1.5 }}
            initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Archana
          </motion.h1>
          {/* yellow highlighter */}
          <motion.div
            className="absolute bottom-3 left-0 h-6 w-full opacity-50 -z-10 rounded"
            style={{ background: "#FFB3C6", rotate: -1 }}
            initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
        </div>

        {/* KOWSHIK — pink italic, slight opposite tilt */}
        <motion.h1
          className="font-display font-black italic text-[#FF2D78] leading-none block text-center"
          style={{ fontSize: "clamp(64px, 14vw, 200px)", rotate: 1 }}
          initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Kowshik.
        </motion.h1>

        {/* ── STICKER FAN ── */}
        <StickerFan stickers={STICKERS} />

        {/* Tagline — centred */}
        <motion.div
          className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 mt-2 md:mt-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
          <span className="font-condensed text-2xl md:text-3xl text-[#1A1A1A] tracking-wide">VISUAL /</span>
          <span className="font-display italic text-3xl md:text-4xl text-[#FF2D78]">graphic designer</span>
          <span className="font-editorial italic text-xl text-[#1A1A1A]/40">&amp;</span>
          <span className="font-condensed text-2xl md:text-3xl text-[#1A1A1A] tracking-wide">ILLUSTRATOR</span>
          <span className="font-editorial italic text-lg text-[#1A1A1A]/35 tracking-widest">— Bangalore</span>
        </motion.div>

        {/* CTA buttons — centred */}
        <motion.div
          className="flex flex-wrap gap-4 mt-8 justify-center"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <motion.div whileHover={{ scale: 1.06, rotate: -1 }}>
            <Link href="/projects"
              className="doodle-border inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F5F0E8] font-handwriting text-xl px-7 py-3">
              see my work →
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, rotate: 1 }}>
            <Link href="/contact"
              className="doodle-border-pink inline-flex items-center gap-2 text-[#FF2D78] font-handwriting text-xl px-7 py-3 bg-[#F5F0E8]">
              say hello ♡
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          className="font-handwriting text-[#1A1A1A]/30 text-base absolute bottom-6 left-1/2 -translate-x-1/2"
          style={{ rotate: -1 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          scroll down ↓
        </motion.p>
      </section>

      {/* ── HOT PINK MARQUEE ── */}
      <div className="py-4 border-y-2 border-[#1A1A1A] overflow-hidden bg-[#FF2D78]">
        <Marquee
          items={["Graphic Design", "Illustration", "Visual Design", "Animation", "Branding", "Editorial"]}
          className="[&_span]:text-white"
        />
      </div>

      {/* ── "HERE'S SOME OF MY WORK" PINBOARD ── */}
      <section className="px-6 md:px-10 py-20 relative">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #1A1A1A 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Gold star doodles — pinboard */}
        <GoldStars stars={[
          { ch: "★", size: 36, left: "2%",  top: "10%", rot: -20, op: 0.50, delay: 0   },
          { ch: "✦", size: 20, left: "95%", top: "22%", rot: 12,  op: 0.45, delay: 0.4 },
          { ch: "✶", size: 16, left: "90%", top: "65%", rot: -8,  op: 0.40, delay: 1.2 },
          { ch: "★", size: 24, left: "5%",  top: "80%", rot: 30,  op: 0.55, delay: 0.9 },
        ]} />

        <Reveal>
          <div className="relative inline-block mb-12">
            <motion.p className="font-display italic text-4xl md:text-5xl text-[#1A1A1A] leading-tight" style={{ rotate: -1 }}>
              here&apos;s some of{" "}
              <span className="relative inline-block">
                my work
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 4 Q12 0 25 4 Q38 8 50 4 Q62 0 75 4 Q88 8 100 4" stroke="#FF2D78" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              {" "}✦
            </motion.p>
            <motion.p className="font-handwriting text-lg text-[#1A1A1A]/40 mt-2 ml-1" style={{ rotate: 1 }}>
              (click to explore each one!)
            </motion.p>
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-10 md:gap-16 justify-start items-start">
          {PROJECTS.map((p, i) => (
            <div key={p.name} style={{ marginTop: p.mt }}>
              <PolaroidCard p={p} i={i} />
            </div>
          ))}
        </div>

        <Reveal>
          <motion.div className="mt-12 inline-block" whileHover={{ x: 4 }}>
            <Link href="/projects"
              className="font-handwriting text-2xl text-[#FF2D78] underline decoration-wavy underline-offset-4">
              see all projects →
            </Link>
          </motion.div>
        </Reveal>

        <div className="absolute bottom-8 right-10 font-handwriting text-xl text-[#1A1A1A]/20 pointer-events-none"
          style={{ transform: "rotate(10deg)" }}>✂ so fun!</div>
      </section>

      {/* ── DARK MARQUEE ── */}
      <div className="py-4 border-y-2 border-[#1A1A1A] overflow-hidden bg-[#1A1A1A]">
        <Marquee reverse
          items={["Available for freelance", "Open to collab", "Let's make something bold", "PES University Bangalore"]}
          className="[&_span]:text-[#F5F0E8]"
        />
      </div>

      {/* ── ABOUT TEASER ── */}
      <section className="bg-[#1A1A1A] px-6 md:px-10 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <Reveal>
            <motion.h2
              className="font-display font-black text-[#F5F0E8] text-4xl md:text-6xl mb-12 leading-none"
              style={{ rotate: -0.5 }}
            >
              a little about<br />
              <span className="italic text-[#FF2D78]">me.</span>
            </motion.h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal direction="left">
              <ReceiptCard />
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {POSTITS.map((note, i) => (
                  <motion.div
                    key={i}
                    className="p-4 font-handwriting text-lg leading-snug shadow-md"
                    style={{
                      backgroundColor: note.bg,
                      color: note.color,
                      rotate: note.rot,
                      boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.07, rotate: 0, zIndex: 20 }}
                    transition={{ delay: i * 0.08, type: "spring", stiffness: 280 }}
                  >
                    {note.text}
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <motion.div className="mt-12" whileHover={{ scale: 1.04, rotate: 1 }}>
              <Link href="/about"
                className="doodle-border inline-flex items-center gap-2 font-handwriting text-xl px-7 py-3 text-[#F5F0E8]"
                style={{ border: "2.5px solid #fff", boxShadow: "3px 3px 0 #fff" }}>
                read more about me ✦
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── SAY HELLO CTA ── */}
      <section className="px-6 md:px-10 py-20 border-t-2 border-[#1A1A1A] relative overflow-hidden">
        {/* Gold star doodles — CTA */}
        <GoldStars stars={[
          { ch: "★", size: 42, left: "3%",  top: "20%", rot: -10, op: 0.50, delay: 0   },
          { ch: "✦", size: 22, left: "8%",  top: "70%", rot: 20,  op: 0.40, delay: 0.6 },
          { ch: "✶", size: 30, left: "91%", top: "15%", rot: 35,  op: 0.55, delay: 0.3 },
          { ch: "★", size: 18, left: "94%", top: "60%", rot: -25, op: 0.42, delay: 1.1 },
          { ch: "✦", size: 14, left: "50%", top: "5%",  rot: 15,  op: 0.35, delay: 0.8 },
        ]} />
        <Reveal>
          <div className="text-center">
            <motion.h2
              className="font-display font-black text-[#1A1A1A] leading-none mb-8 inline-block"
              style={{ fontSize: "clamp(52px, 10vw, 140px)", rotate: -0.5 }}
            >
              Say hello<span className="text-[#FF2D78]">.</span>
            </motion.h2>
            <br />
            <motion.div whileHover={{ scale: 1.06, rotate: 1 }}>
              <Link href="/contact"
                className="doodle-border inline-flex items-center gap-3 bg-[#FF2D78] text-white font-handwriting text-2xl px-10 py-4">
                get in touch ♡
              </Link>
            </motion.div>
            <p className="font-handwriting text-[#1A1A1A]/30 text-lg mt-5">
              (i don&apos;t bite, i promise ✦)
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
