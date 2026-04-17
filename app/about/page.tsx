"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import GoldStars from "@/components/GoldStars";
import PettableCat from "@/components/PettableCat";



// ── Stamp border wrapper ──────────────────────────────────────────────────────
function StampCard({ children, className = "", rot = 0 }: { children: React.ReactNode; className?: string; rot?: number }) {
  return (
    <motion.div
      className={`relative bg-white p-6 ${className}`}
      style={{
        rotate: rot,
        backgroundImage: `
          radial-gradient(circle, transparent 6px, white 6px)
        `,
        backgroundSize: "16px 16px",
        backgroundPosition: "0 0, 8px 8px",
        boxShadow: "4px 4px 0 #1A1A1A",
        border: "2px solid #1A1A1A",
      }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Inner white content area */}
      <div className="bg-white border-2 border-[#1A1A1A] p-5">
        {children}
      </div>
    </motion.div>
  );
}

// ── Tape strip ────────────────────────────────────────────────────────────────
function Tape({ color = "#F5F250", rot = 0, className = "" }: { color?: string; rot?: number; className?: string }) {
  return (
    <div
      className={`absolute w-14 h-5 border border-[#1A1A1A]/20 opacity-80 ${className}`}
      style={{ backgroundColor: color, transform: `rotate(${rot}deg)` }}
    />
  );
}

// ── Barcode ───────────────────────────────────────────────────────────────────
function Barcode() {
  const bars = [3,1,2,1,3,1,1,2,1,3,2,1,1,2,3,1,2,1,1,3,1,2,1,3,1,1,2];
  return (
    <div className="flex items-end gap-[2px] h-10">
      {bars.map((w, i) => (
        <div key={i} className="bg-[#1A1A1A]" style={{ width: w * 2, height: `${60 + (i % 3) * 20}%` }} />
      ))}
    </div>
  );
}

const SKILLS = [
  { name: "Graphic Design", level: 95, note: "bread & butter" },
  { name: "Illustration",   level: 90, note: "since forever"  },
  { name: "Visual Design",  level: 88, note: "ui + systems"   },
  { name: "Animation",      level: 75, note: "still learning!"},
];

const TOOLS = [
  { name: "Illustrator",   icon: "Ai", bg: "#FF8000" },
  { name: "Photoshop",     icon: "Ps", bg: "#31A8FF" },
  { name: "After Effects", icon: "Ae", bg: "#9999FF" },
  { name: "InDesign",      icon: "Id", bg: "#FF3366" },
  { name: "Figma",         icon: "Fg", bg: "#A259FF" },
  { name: "Blender",       icon: "Bl", bg: "#EA7600" },
  { name: "Procreate",     icon: "Pr", bg: "#1ABCFE" },
];

const INTERESTS = [
  "Bold typography", "Zine culture ✂", "Folk art 🪡",
  "Editorial layout", "Character design ★", "Retro aesthetics 📼",
  "Mixed media 🎨", "Motion graphics 🎬",
];

const ROTS = [-3, 2, -1.5, 3, -2, 1.5, -2.5, 1];

export default function About() {
  return (
    <main className="pt-28 pb-20 overflow-x-hidden relative bg-[#FFF0F5]">

      <GoldStars stars={[
        { ch: "★", size: 28, left: "2%",  top: "4%",  rot: 20,  op: 0.18, delay: 0   },
        { ch: "✦", size: 16, left: "6%",  top: "22%", rot: -12, op: 0.14, delay: 0.6 },
        { ch: "✶", size: 22, left: "3%",  top: "50%", rot: 30,  op: 0.16, delay: 1.1 },
        { ch: "✦", size: 34, left: "90%", top: "6%",  rot: -10, op: 0.18, delay: 0.2 },
        { ch: "★", size: 18, left: "93%", top: "32%", rot: 18,  op: 0.14, delay: 1.3 },
      ]} />

      {/* ── SCRAPBOOK HERO ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">

          {/* ── LEFT: Polaroid photo ── */}
          <Reveal direction="left">
            <div className="relative flex-shrink-0">
              {/* Tape at top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-16 h-6 bg-[#A8E6C3] opacity-80 border border-[#1A1A1A]/15" />

              <motion.div
                className="bg-white p-3 pb-10 border-2 border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] w-64 relative z-20"
                style={{ rotate: -5 }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="w-full h-80 bg-[#FFB3C6]/40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/about-photo.jpg"
                    alt="Archana"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).nextElementSibling?.removeAttribute("style");
                    }}
                  />
                  <span className="font-handwriting text-sm text-[#FF2D78]/60" style={{ display: "none" }}>
                    photo coming soon ♡
                  </span>
                </div>
                <p className="font-handwriting text-center mt-3 text-base text-[#1A1A1A]/60">archana ♡</p>
                <p className="font-handwriting text-center text-xs text-[#1A1A1A]/35">bangalore, 2025</p>
              </motion.div>
            </div>
          </Reveal>

          {/* ── RIGHT: About me card ── */}
          <Reveal direction="right" delay={0.1} className="flex-1">
            <motion.div
              className="bg-[#F5F0E8] border-2 border-[#1A1A1A] p-8 md:p-10 shadow-[6px_6px_0_#1A1A1A] relative"
              style={{ rotate: 1.5 }}
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <Tape color="#F5F250" rot={-3} className="-top-3 left-10" />
              <Tape color="#A8E6C3" rot={4}  className="-top-3 right-10" />

              <h1
                className="font-display italic text-[#FF2D78] leading-none mb-6"
                style={{ fontSize: "clamp(52px, 8vw, 88px)" }}
              >
                About me.
              </h1>

              <p className="font-editorial italic text-sm text-[#1A1A1A]/45 tracking-widest mb-3">
                visual / graphic designer & illustrator
              </p>
              <p className="font-editorial text-base text-[#1A1A1A] leading-relaxed mb-4">
                Hello! I&apos;m <strong className="font-display italic text-[#FF2D78]">Archana Kowshik</strong>, a graphic designer and illustrator who believes design should be bold, captivating, and always tell a story.
              </p>
              <p className="font-editorial text-base text-[#1A1A1A]/70 leading-relaxed">
                Graphic design became my way of storytelling — a space where I can use visuals to express ideas, emotions, and narratives in a more creative and relatable way. To me, design is a continuous journey of learning and discovery, where creativity and culture meet.
              </p>

              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#1A1A1A]/15 flex flex-wrap gap-3">
                {["Bold & Captivating ✦", "Bangalore 🇮🇳", "B.Design '25"].map((tag) => (
                  <span key={tag} className="font-condensed tracking-widest text-xs px-3 py-1.5 bg-[#FF2D78] text-white border border-[#FF2D78]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── RECEIPT + STAMP ROW ───────────────────────────────────────────── */}
      <section className="px-6 md:px-16 mb-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">

          {/* ── Receipt card ── */}
          <Reveal direction="left" className="flex-1">
            <motion.div
              className="bg-[#E8F5E0] border-2 border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] relative overflow-hidden"
              style={{
                rotate: -1,
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(26,26,26,0.05) 28px, rgba(26,26,26,0.05) 29px)",
              }}
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              {/* Zigzag top */}
              <div className="h-4 w-full"
                style={{
                  backgroundImage: "linear-gradient(135deg, #E8F5E0 25%, transparent 25%) -8px 0, linear-gradient(225deg, #E8F5E0 25%, transparent 25%) -8px 0, linear-gradient(315deg, #E8F5E0 25%, transparent 25%), linear-gradient(45deg, #E8F5E0 25%, transparent 25%)",
                  backgroundSize: "16px 16px",
                  backgroundColor: "white",
                }} />

              <div className="px-7 pb-7 pt-3">
                <p className="font-condensed tracking-[0.4em] text-xs text-[#1A1A1A]/40 text-center mb-1">WELCOME TO MY PORTFOLIO!</p>
                <p className="font-condensed tracking-widest text-4xl text-[#1A1A1A] text-center mb-5 border-b-2 border-dashed border-[#1A1A1A]/20 pb-4">
                  ARCHANA KOWSHIK
                </p>

                <p className="font-condensed tracking-widest text-xs text-[#1A1A1A]/50 mb-3">SOFTWARE SKILLS:</p>
                {TOOLS.slice(0, 5).map((tool) => (
                  <div key={tool.name} className="flex items-end gap-1 mb-1.5">
                    <span className="font-editorial text-sm text-[#1A1A1A]">{tool.name}</span>
                    <span className="flex-1 border-b border-dotted border-[#1A1A1A]/25 mb-1" />
                    <span className="font-condensed tracking-widest text-xs" style={{ color: tool.bg }}>{tool.icon}</span>
                  </div>
                ))}

                <div className="mt-5 border-t-2 border-dashed border-[#1A1A1A]/20 pt-4">
                  <p className="font-condensed tracking-widest text-xs text-[#1A1A1A]/50 mb-3">EDUCATION:</p>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-editorial text-[#1A1A1A]">PES University, Bangalore</span>
                    <span className="font-editorial text-[#1A1A1A]/50">2021–2025</span>
                  </div>
                  <span className="font-editorial italic text-xs text-[#1A1A1A]/40">(B.Design — Communication Design)</span>
                </div>

                <div className="mt-5 border-t-2 border-dashed border-[#1A1A1A]/20 pt-4 mb-2">
                  <p className="font-condensed tracking-widest text-xs text-[#1A1A1A]/50 mb-3">EXPERIENCE:</p>
                  {[
                    ["Cashfree Payments",  "Visual Design Intern + FTE"],
                    ["D&AD New Blood",     "Campaign Design Brief"],
                    ["Self-initiated",     "Zine series, folk kit, animation"],
                  ].map(([place, role]) => (
                    <div key={place} className="flex justify-between text-xs mb-1.5">
                      <span className="font-editorial text-[#1A1A1A]">{place}</span>
                      <span className="font-editorial text-[#1A1A1A]/45 text-right max-w-[45%]">{role}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center my-4">
                  <Barcode />
                </div>
                <p className="font-editorial italic text-xs text-center text-[#1A1A1A]/35">Thank you for viewing · 2025</p>
              </div>

              {/* Zigzag bottom */}
              <div className="h-4 w-full"
                style={{
                  backgroundImage: "linear-gradient(135deg, white 25%, transparent 25%) -8px 0, linear-gradient(225deg, white 25%, transparent 25%) -8px 0, linear-gradient(315deg, white 25%, transparent 25%), linear-gradient(45deg, white 25%, transparent 25%)",
                  backgroundSize: "16px 16px",
                  backgroundColor: "#E8F5E0",
                }} />
            </motion.div>
          </Reveal>

          {/* ── Right col: stamp contact + tools ── */}
          <div className="flex flex-col gap-6 flex-shrink-0 md:w-72">

            {/* Stamp contact card */}
            <Reveal direction="right">
              <StampCard rot={2}>
                <p className="font-condensed tracking-[0.3em] text-2xl text-[#A8E6C3] mb-3">CONTACT</p>
                {[
                  ["Email",    "archana3kowshik@gmail.com"],
                  ["Behance",  "archanakowshik"],
                  ["Based in", "Bangalore, India"],
                ].map(([label, val]) => (
                  <div key={label} className="flex gap-2 text-xs mb-2 items-start">
                    <span className="font-condensed tracking-widest text-[#1A1A1A]/40 w-16 flex-shrink-0">{label}:</span>
                    <span className="font-editorial text-[#1A1A1A]">{val}</span>
                  </div>
                ))}
                <div className="mt-3 pt-3 border-t border-dashed border-[#1A1A1A]/15">
                  <Link href="/contact" className="font-condensed tracking-widest text-xs text-[#FF2D78] underline decoration-dotted underline-offset-2">
                    → say hello
                  </Link>
                </div>
              </StampCard>
            </Reveal>

            {/* Bubbly software icons */}
            <Reveal direction="right" delay={0.15}>
              <motion.div
                className="bg-[#FFB3C6] border-2 border-[#1A1A1A] p-5 shadow-[4px_4px_0_#1A1A1A] relative"
                style={{ rotate: -2 }}
                whileHover={{ rotate: 0 }}
              >
                <Tape color="#F5F250" rot={-4} className="-top-3 left-8" />
                <p className="font-condensed tracking-widest text-xs text-[#1A1A1A]/50 mb-4">TOOLS I USE:</p>
                <div className="flex flex-wrap gap-2">
                  {TOOLS.map((tool) => (
                    <motion.div
                      key={tool.name}
                      className="w-12 h-12 flex items-center justify-center border-2 border-[#1A1A1A] font-condensed tracking-wide text-sm text-white font-bold"
                      style={{
                        backgroundColor: tool.bg,
                        borderRadius: "12px",
                        boxShadow: "3px 3px 0 rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
                      }}
                      whileHover={{ scale: 1.18, rotate: [-2, 2, 0], zIndex: 20 }}
                      transition={{ type: "spring", stiffness: 400, damping: 14 }}
                      title={tool.name}
                    >
                      {tool.icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS BAR ───────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 mb-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <motion.div
              className="bg-white border-2 border-[#1A1A1A] p-8 shadow-[6px_6px_0_#1A1A1A] relative"
              style={{ rotate: 0.5 }}
              whileHover={{ rotate: 0 }}
            >
              <Tape color="#FF2D78" rot={-3} className="-top-3 left-12" />
              <p className="font-condensed tracking-[0.3em] text-[#1A1A1A]/40 text-xs mb-6">SKILL LEVEL CHECK:</p>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-5">
                {SKILLS.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5 items-end">
                      <span className="font-condensed tracking-widest text-[#1A1A1A]">{skill.name.toUpperCase()}</span>
                      <span className="font-editorial italic text-xs text-[#1A1A1A]/40">{skill.note}</span>
                    </div>
                    <div className="h-3.5 bg-[#1A1A1A]/06 border-2 border-[#1A1A1A] overflow-hidden">
                      <motion.div
                        className="h-full bg-[#FF2D78]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── I'M INTO tags ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 mb-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-condensed text-[#1A1A1A] tracking-wide mb-8" style={{ fontSize: "clamp(36px, 7vw, 80px)" }}>
              I&apos;M INTO<span className="text-[#FF2D78]">.</span>
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-4">
            {INTERESTS.map((interest, i) => (
              <motion.div key={interest}
                className="border-2 border-[#1A1A1A] px-5 py-3 shadow-[4px_4px_0_#1A1A1A] bg-white"
                style={{ rotate: ROTS[i % ROTS.length] }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 0, backgroundColor: "#FF2D78", color: "#fff", zIndex: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 280 }}
              >
                <span className="font-handwriting text-xl text-[#1A1A1A] leading-none">{interest}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PETTABLE CAT ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 mb-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-12 bg-[#FFB3C6]/20 border-2 border-[#1A1A1A] p-10 md:p-14 shadow-[6px_6px_0_#1A1A1A] relative">
              <Tape color="#F5F250" rot={-3} className="-top-3 left-16" />
              <div className="flex-1 text-center md:text-left">
                <p className="font-editorial italic text-sm text-[#1A1A1A]/40 tracking-widest mb-2">a very important section</p>
                <h2 className="font-condensed tracking-wide text-[#1A1A1A] leading-none mb-4" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
                  MEET MY<br /><span className="font-display italic text-[#FF2D78]">Cat.</span>
                </h2>
                <p className="font-handwriting text-xl text-[#1A1A1A]/60 leading-relaxed max-w-xs">
                  her name is mewo. she supervises all my design work and takes credit for everything.
                </p>
              </div>
              <div className="flex-shrink-0">
                <PettableCat />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESUME CTA ───────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 mb-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <motion.div
              className="bg-[#1A1A1A] p-8 md:p-12 border-2 border-[#1A1A1A] shadow-[6px_6px_0_#FF2D78] relative"
              style={{ rotate: -0.5 }}
              whileHover={{ rotate: 0 }}
            >
              <div className="absolute -top-4 left-12 w-20 h-6 bg-[#F5F250] opacity-70 border border-[#1A1A1A]" style={{ transform: "rotate(-3deg)" }} />
              <div className="absolute -top-4 right-12 w-20 h-6 bg-[#F5F250] opacity-70 border border-[#1A1A1A]" style={{ transform: "rotate(3deg)" }} />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <h2 className="font-condensed text-[#F5F0E8] tracking-wide text-4xl md:text-6xl leading-none mb-2">WANT THE FULL PICTURE?</h2>
                  <p className="font-editorial italic text-white/40 text-lg">grab my resume or connect ✦</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <motion.a
                    href="https://drive.google.com/drive/folders/11KqL-1aypweBOPdiM3A1OaJuRMZyqwwo?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF2D78] text-white font-condensed tracking-widest text-lg px-7 py-3 border-2 border-[#FF2D78] shadow-[4px_4px_0_#fff]"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  >
                    DOWNLOAD RESUME ↓
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-condensed tracking-widest text-lg px-7 py-3 shadow-[4px_4px_0_#FF2D78]">
                      CONTACT ME →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-4 border-y-2 border-[#1A1A1A] overflow-hidden bg-[#FF2D78]">
        <Marquee items={["GRAPHIC DESIGN", "ILLUSTRATION", "BOLD STORIES", "CREATIVE ENERGY"]}
          className="[&_span]:text-white [&_span]:font-condensed [&_span]:tracking-widest" />
      </div>
    </main>
  );
}
