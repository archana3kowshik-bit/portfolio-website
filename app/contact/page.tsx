"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import GoldStars from "@/components/GoldStars";
import { StickerFan } from "@/components/Sticker";
import type { StickerData } from "@/components/Sticker";

// ─── Header stickers — palette only ──────────────────────────────────────────
const CONTACT_STICKERS: StickerData[] = [
  { text: "OPEN TO WORK ✦", bg: "#A8E6C3", color: "#1A1A1A", shape: "oval",      size: 138, x: -370, y: 38,  rot: -14, delay: 0.42, font: "condensed"                      },
  { text: "FREELANCE ★",    bg: "#FFB3C6", color: "#FF2D78", shape: "starburst", size: 98,  x: -228, y: 90,  rot: 12,  delay: 0.48, font: "condensed", pattern: "dots"    },
  { text: "LET'S TALK ♡",   bg: "#FF2D78", color: "#fff",    shape: "splat",     size: 108, x: 296,  y: 46,  rot: -18, delay: 0.54, font: "hand"                           },
  { text: "BLR → WORLD",    bg: "#F5F0E8", color: "#FF2D78", shape: "tag",       size: 124, x: 368,  y: 112, rot: 14,  delay: 0.60, font: "condensed", pattern: "stripes" },
];

// iMessage chat — directly inspired by "saturday squad / drag & drop / what you want to say" pin
const MESSAGES = [
  { from: "them", text: "hey! is this archana? 👋",               delay: 0    },
  { from: "me",   text: "yes hi!! 🙋‍♀️",                             delay: 0.6  },
  { from: "them", text: "i saw your portfolio — incredible work!",  delay: 1.2  },
  { from: "me",   text: "omg thank you so much ♡",                  delay: 1.8  },
  { from: "them", text: "are you available for freelance?",         delay: 2.4  },
  { from: "me",   text: "YES. always open to cool projects 🎨",     delay: 3.0  },
  { from: "them", text: "what's the best way to reach you?",        delay: 3.6  },
  { from: "me",   text: "email me or find me on any of these ↓",   delay: 4.2  },
];

const LINKS = [
  { label: "Email",     value: "archana3kowshik@gmail.com", href: "mailto:archana3kowshik@gmail.com",                                                          bg: "#FF2D78" },
  { label: "LinkedIn",  value: "archana-kowshik",           href: "https://www.linkedin.com/in/archana-kowshik-127635264/",                                    bg: "#FFB3C6" },
  { label: "Instagram", value: "@arccparcc",                href: "https://www.instagram.com/arccparcc/",                                                      bg: "#FF2D78" },
  { label: "Behance",   value: "archanakowshik",            href: "https://www.behance.net/archanakowshik",                                                    bg: "#1A1A1A" },
  { label: "Resume",    value: "Download ↓",                href: "https://drive.google.com/drive/folders/11KqL-1aypweBOPdiM3A1OaJuRMZyqwwo?usp=sharing",     bg: "#A8E6C3" },
];

function Bubble({ msg, index }: { msg: typeof MESSAGES[0]; index: number }) {
  const isMe = msg.from === "me";
  return (
    <motion.div
      className={`flex ${isMe ? "justify-end" : "justify-start"} mb-2`}
      initial={{ opacity: 0, y: 10, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: msg.delay, type: "spring", stiffness: 300, damping: 26 }}
    >
      <div
        className="max-w-[75%] px-4 py-2.5 rounded-2xl font-sans text-sm leading-snug"
        style={{
          backgroundColor: isMe ? "#34C759" : "#E8E4DC",
          color: isMe ? "#fff" : "#1A1A1A",
          borderRadius: isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
        }}
      >
        {msg.text}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-2">
      <div className="px-4 py-3 rounded-2xl bg-[#E8E4DC]" style={{ borderRadius: "18px 18px 18px 4px" }}>
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map(i => (
            <motion.div key={i} className="w-2 h-2 rounded-full bg-[#1A1A1A]/40"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [msgCount, setMsgCount] = useState(0);

  useEffect(() => {
    // Reveal messages one by one
    const intervals = MESSAGES.map((msg, i) =>
      setTimeout(() => setMsgCount(i + 1), msg.delay * 1000 + 200)
    );
    const typingTimeout = setTimeout(() => setShowTyping(false), MESSAGES[MESSAGES.length - 1].delay * 1000 + 600);
    return () => { intervals.forEach(clearTimeout); clearTimeout(typingTimeout); };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("archana3kowshik@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="pt-24 pb-20 overflow-x-hidden relative">

      {/* Gold star doodles — scattered throughout */}
      <GoldStars stars={[
        { ch: "★", size: 28, left: "2%",  top: "6%",  rot: -16, op: 0.52, delay: 0   },
        { ch: "✦", size: 18, left: "6%",  top: "30%", rot: 12,  op: 0.40, delay: 0.5 },
        { ch: "✶", size: 22, left: "3%",  top: "60%", rot: 28,  op: 0.48, delay: 1.0 },
        { ch: "★", size: 16, left: "7%",  top: "82%", rot: -22, op: 0.36, delay: 0.8 },
        { ch: "✦", size: 34, left: "92%", top: "8%",  rot: -12, op: 0.58, delay: 0.3 },
        { ch: "★", size: 20, left: "95%", top: "35%", rot: 24,  op: 0.44, delay: 1.2 },
        { ch: "✶", size: 16, left: "89%", top: "62%", rot: -6,  op: 0.40, delay: 0.9 },
        { ch: "✦", size: 24, left: "92%", top: "84%", rot: 20,  op: 0.50, delay: 0.6 },
      ]} />

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Page header — same pattern as home hero */}
        <section className="mb-12 flex flex-col items-center text-center overflow-visible">

          <motion.p
            className="font-editorial italic text-lg text-[#1A1A1A]/35 tracking-widest mb-3"
            style={{ rotate: "-1deg" as string }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            let&apos;s connect
          </motion.p>

          {/* Main title */}
          <motion.h1
            className="font-condensed text-[#1A1A1A] leading-none tracking-wide text-center"
            style={{ fontSize: "clamp(60px, 12vw, 148px)", rotate: "-0.5deg" as string }}
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            SAY{" "}
            <span className="font-display italic text-[#FF2D78]">hello.</span>
          </motion.h1>

          <StickerFan stickers={CONTACT_STICKERS} />

          {/* Sub-line */}
          <motion.p
            className="font-editorial italic text-sm text-[#1A1A1A]/40 mt-1 tracking-wide"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
          >
            i&apos;m always open to new projects, collabs &amp; full-time roles ✦
          </motion.p>
        </section>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* iMessage interface — "saturday squad" pin recreation */}
          <Reveal direction="left">
            <motion.div
              className="border-2 border-[#1A1A1A] overflow-hidden shadow-[6px_6px_0_#1A1A1A]"
              style={{ rotate: -1 }}
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              {/* iPhone status bar */}
              <div className="bg-[#F5F0E8] border-b-2 border-[#1A1A1A] px-4 py-2 flex justify-between items-center">
                <span className="font-editorial text-xs text-[#1A1A1A]/60">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm opacity-30" />
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm opacity-50" />
                  <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm opacity-80" />
                </div>
              </div>

              {/* Contact header */}
              <div className="bg-[#F5F0E8] border-b-2 border-[#1A1A1A] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF2D78] border-2 border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <span className="font-condensed text-white text-sm tracking-wide">AK</span>
                </div>
                <div>
                  <p className="font-condensed text-[#1A1A1A] tracking-wider text-base leading-none">ARCHANA KOWSHIK</p>
                  <p className="font-editorial italic text-xs text-[#34C759]">● online now</p>
                </div>
              </div>

              {/* Chat area */}
              <div className="bg-white px-4 py-4 min-h-72 max-h-96 overflow-y-auto">
                <p className="font-editorial italic text-xs text-center text-[#1A1A1A]/30 mb-4">Today</p>

                {MESSAGES.slice(0, msgCount).map((msg, i) => (
                  <Bubble key={i} msg={msg} index={i} />
                ))}
                {showTyping && msgCount < MESSAGES.length && <TypingIndicator />}
              </div>

              {/* Input bar */}
              <div className="bg-[#F5F0E8] border-t-2 border-[#1A1A1A] px-4 py-3 flex items-center gap-2">
                <div className="flex-1 bg-white border-2 border-[#1A1A1A] rounded-full px-4 py-2">
                  <p className="font-editorial italic text-xs text-[#1A1A1A]/30">
                    type a message...
                  </p>
                </div>
                <motion.a
                  href="mailto:archana3kowshik@gmail.com"
                  className="w-8 h-8 rounded-full bg-[#34C759] border-2 border-[#1A1A1A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                >
                  ↑
                </motion.a>
              </div>
            </motion.div>
          </Reveal>

          {/* Right: links + email */}
          <div className="flex flex-col gap-5">
            <Reveal direction="right">
              {/* Big email — copy on click */}
              <motion.div
                className="bg-[#1A1A1A] p-6 border-2 border-[#1A1A1A] shadow-[4px_4px_0_#FF2D78] relative cursor-none"
                style={{ rotate: 1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                onClick={copyEmail}
              >
                <div className="absolute -top-3 left-8 w-14 h-5 bg-[#F5F250] opacity-80 border border-[#1A1A1A]"
                  style={{ transform: "rotate(-2deg)" }} />
                <p className="font-editorial italic text-white/40 text-xs mb-1">click to copy ↓</p>
                <p className="font-condensed text-[#FF2D78] tracking-wide text-xl md:text-2xl break-all leading-tight">
                  archana3kowshik@gmail.com
                </p>
                <AnimatePresence>
                  {copied && (
                    <motion.p className="font-handwriting text-[#34C759] text-lg mt-2"
                      initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}>
                      copied! ✓
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>

            {/* Social links — each as a mini OS window tile */}
            <div className="grid grid-cols-1 gap-3">
              {LINKS.map((link, i) => (
                <Reveal key={link.label} delay={i * 0.07}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border-2 border-[#1A1A1A] bg-[#F5F0E8] px-4 py-3 shadow-[3px_3px_0_#1A1A1A]"
                    style={{ rotate: ([-1, 0.5, -0.5, 1, -1][i % 5]) }}
                    whileHover={{ rotate: 0, scale: 1.03, x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 border-2 border-[#1A1A1A]"
                      style={{ backgroundColor: link.bg }}>
                      <span className="font-condensed text-white text-xs tracking-wide">{link.label.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="font-condensed tracking-widest text-[#1A1A1A] text-sm leading-none">{link.label.toUpperCase()}</p>
                      <p className="font-editorial italic text-xs text-[#1A1A1A]/50 mt-0.5">{link.value}</p>
                    </div>
                    <span className="ml-auto font-handwriting text-lg text-[#FF2D78]">→</span>
                  </motion.a>
                </Reveal>
              ))}
            </div>

            {/* Availability sticky */}
            <Reveal delay={0.5}>
              <motion.div
                className="bg-[#F5F250] border-2 border-[#1A1A1A] p-4 shadow-[4px_4px_0_#1A1A1A]"
                style={{ rotate: -1.5 }}
                whileHover={{ rotate: 0 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <motion.div className="w-3 h-3 rounded-full bg-[#34C759] border border-[#1A1A1A]"
                    animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                  <span className="font-condensed tracking-widest text-[#1A1A1A] text-sm">CURRENTLY AVAILABLE</span>
                </div>
                <p className="font-handwriting text-lg text-[#1A1A1A]">
                  open to freelance, collabs & full-time ✦
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
