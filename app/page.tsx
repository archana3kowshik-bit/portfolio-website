"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FEATURED = [
  { slug: "purdeys",      name: "Purdey's",     color: "#F2C4A8", cover: "/projects/purdeys/hero.png",          rot: -18, z: 0   },
  { slug: "cashfree",     name: "Cashfree",     color: "#A8D5B5", cover: "/projects/cashfree/gff/hero.jpg",     rot: -7,  z: 30  },
  { slug: "magazine",     name: "Magazine",     color: "#EDD853", cover: "/projects/magazine/hero.png",         rot:  3,  z: 50  },
  { slug: "janapada-kit", name: "Janapada Kit", color: "#F2C4A8", cover: "/projects/janapada-kit/hero.png",     rot:  14, z: 20  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── INFO STRIP — Spencer Gabor ────────────────────────────────────────── */}
      <div className="text-center pt-24 pb-2">
        <p className="font-body text-[11px] tracking-[0.22em] uppercase text-[#999]">
          Bangalore, India &nbsp;·&nbsp; archana3kowshik@gmail.com
        </p>
      </div>

      {/* ── HERO SENTENCE — Sierra Hopkins ───────────────────────────────────── */}
      <section className="px-6 md:px-16 pt-6 pb-4 text-center">
        <motion.h1
          className="font-display font-black text-[#111] leading-tight"
          style={{ fontSize: "clamp(32px, 5.5vw, 80px)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Making things that feel{" "}
          <span className="font-script text-[#1B3A6B]"
            style={{ fontSize: "1.25em", lineHeight: 1 }}>
            bold
          </span>
          {" "}and{" "}
          <span className="font-script text-[#1B3A6B]"
            style={{ fontSize: "1.25em", lineHeight: 1 }}>
            joyful.
          </span>
        </motion.h1>

        {/* Name — Spencer Gabor, below the sentence */}
        <motion.p
          className="font-display font-black italic text-[#ccc] mt-3 leading-none tracking-tight"
          style={{ fontSize: "clamp(20px, 3vw, 42px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Archana Kowshik
        </motion.p>
      </section>

      {/* ── 3D FAN CARDS — Spencer Gabor + Abhijit Rout ──────────────────────── */}
      <section className="relative flex justify-center items-center py-12 md:py-16"
        style={{ perspective: "1200px", minHeight: "420px" }}>
        <div className="relative flex justify-center items-center"
          style={{ width: "100%", maxWidth: 900, height: 340 }}>
          {FEATURED.map((p, i) => (
            <motion.div
              key={p.slug}
              className="absolute shadow-2xl overflow-hidden"
              style={{
                width: 200, height: 260,
                left: "50%",
                marginLeft: -100 + (i - 1.5) * 130,
                transformOrigin: "bottom center",
                rotateY: p.rot,
                translateZ: p.z,
                zIndex: i === 2 ? 10 : i,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, rotateY: 0, zIndex: 20, translateZ: 80 }}
            >
              <Link href={`/projects/${p.slug}`} className="block w-full h-full">
                <div className="w-full h-full" style={{ backgroundColor: p.color }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover} alt={p.name}
                    className="w-full h-full object-cover" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ROLE + CLIENTS — Spencer Gabor ───────────────────────────────────── */}
      <div className="text-center pb-6">
        <motion.p
          className="font-display italic text-[#ccc] leading-tight"
          style={{ fontSize: "clamp(20px, 4vw, 52px)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        >
          Illustrator, Designer &amp; Animator
        </motion.p>
        <motion.div
          className="mt-6 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        >
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-[#bbb]">Clients include</p>
          <p className="font-body text-[11px] tracking-[0.18em] uppercase text-[#bbb]">
            Cashfree · D&amp;AD · PES University · Self-published
          </p>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        >
          <Link href="/projects">
            <motion.span
              className="inline-block bg-[#111] text-white font-body text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-[#1B3A6B] transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              See all work
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              className="inline-block border border-[#ddd] text-[#999] font-body text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:border-[#1B3A6B] hover:text-[#1B3A6B] transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Say hello
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#eee] mt-16 px-6 md:px-16 py-20 max-w-2xl mx-auto text-center">
        <motion.p
          className="font-display italic text-[#111] leading-snug"
          style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          B.Design graduate from PES University, Bangalore.
          Open to freelance &amp; full-time.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/about"
            className="font-body text-xs tracking-[0.18em] uppercase text-[#1B3A6B] hover:underline">
            Read more →
          </Link>
        </motion.div>
      </section>

      {/* ── SAY HELLO ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#eee] px-6 md:px-16 py-20 text-center">
        <motion.h2
          className="font-display font-black italic text-[#111] leading-none"
          style={{ fontSize: "clamp(52px, 11vw, 150px)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Say hello<span className="text-[#1B3A6B]">.</span>
        </motion.h2>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/contact">
            <motion.span
              className="inline-block bg-[#111] text-white font-body text-xs tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#1B3A6B] transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Get in touch
            </motion.span>
          </Link>
          <span className="font-body text-sm text-[#999]">archana3kowshik@gmail.com</span>
        </motion.div>
      </section>

    </main>
  );
}
