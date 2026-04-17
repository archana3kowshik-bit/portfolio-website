"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import GoldStars from "@/components/GoldStars";
import { getProject, getAdjacentProjects } from "@/lib/projects";
import type { ProjectImage, Campaign } from "@/lib/projects";

// ── sticky note colours cycling ───────────────────────────────────────────────
const NOTE_COLOURS = ["#FFB3C6", "#A8E6C3", "#F5F0E8", "#E0E0E0"];
const NOTE_ROTS = [-3, 2, -1.5, 3, -2.5, 1];

// ── Project image ─────────────────────────────────────────────────────────────
const ROTS = [-1.5, 1, -0.5, 2, -1, 0.5, -2, 1.5];

const FOLDER_ROTS = [-3, 2, -1.5, 3, -2, 1.5, -2.5, 1];
const FOLDER_COLORS = ["#F0D080", "#FFB3C6", "#A8E6C3", "#E0E0E0", "#F0D080", "#FFB3C6", "#A8E6C3", "#E0E0E0"];

function FolderCard({ campaign, index, onClick }: { campaign: Campaign; index: number; onClick: () => void }) {
  const rot = FOLDER_ROTS[index % FOLDER_ROTS.length];
  const color = FOLDER_COLORS[index % FOLDER_COLORS.length];
  return (
    <motion.button
      onClick={onClick}
      className="relative flex-shrink-0 text-left cursor-pointer group"
      style={{ rotate: rot }}
      whileHover={{ rotate: 0, scale: 1.06, zIndex: 40 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
    >
      {/* Folder tab */}
      <div
        className="h-6 w-28 border-2 border-b-0 border-[#1A1A1A] flex items-center px-3"
        style={{ backgroundColor: color }}
      >
        <span className="font-condensed tracking-widest text-[10px] text-[#1A1A1A]/70 truncate">
          {campaign.name.toUpperCase()}
        </span>
      </div>

      {/* Folder body */}
      <div
        className="w-56 h-40 border-2 border-[#1A1A1A] overflow-hidden relative"
        style={{ backgroundColor: color, boxShadow: "4px 4px 0 #1A1A1A" }}
      >
        <Image
          src={campaign.cover}
          alt={campaign.name}
          fill
          sizes="224px"
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>

      {/* Label below */}
      <div className="mt-2 px-1">
        <p className="font-condensed tracking-wide text-sm text-[#1A1A1A]">{campaign.name.toUpperCase()}</p>
        <p className="font-editorial italic text-[10px] text-[#1A1A1A]/45 group-hover:text-[#FF2D78] transition-colors">
          click to open ↓
        </p>
      </div>
    </motion.button>
  );
}

function ProjectImg({ img, index }: { img: ProjectImage; index: number }) {
  return (
    <motion.div
      className="overflow-hidden"
      style={{ rotate: ROTS[index % ROTS.length] }}
      whileHover={{ rotate: 0, scale: 1.02, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {img.video ? (
        <video
          src={img.src}
          loop
          controls
          playsInline
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      ) : (
        <Image
          src={img.src}
          alt={img.alt ?? ""}
          width={1200}
          height={800}
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      )}
    </motion.div>
  );
}

function ImageGrid({ images }: { images: ProjectImage[] }) {
  type LabelRow = { __label: string };
  type Row = ProjectImage[] | LabelRow;
  const rows: Row[] = [];
  let i = 0;
  while (i < images.length) {
    const img = images[i];
    if (img.label) rows.push({ __label: img.label });
    if (img.span === "full") {
      rows.push([img]); i++;
    } else if (img.span === "third") {
      const n1 = images[i + 1];
      const n2 = images[i + 2];
      if (n1?.span === "third" && !n1.label && n2?.span === "third" && !n2.label) {
        rows.push([img, n1, n2]); i += 3;
      } else if (n1?.span === "third" && !n1.label) {
        rows.push([img, n1]); i += 2;
      } else {
        rows.push([img]); i++;
      }
    } else if (img.span === "wide" || img.span === "narrow") {
      const next = images[i + 1];
      if (next && !next.label && (next.span === "narrow" || next.span === "wide")) {
        rows.push([img, next]); i += 2;
      } else {
        rows.push([img]); i++;
      }
    } else {
      const next = images[i + 1];
      if (next && !next.label && next.span !== "full" && next.span !== "wide") {
        rows.push([img, next]); i += 2;
      } else {
        rows.push([img]); i++;
      }
    }
  }
  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col gap-6">
      {rows.map((row, ri) => {
        if ("__label" in row) {
          return (
            <div key={`label-${ri}`} className="flex items-center gap-4 pt-6 pb-2">
              <span className="font-condensed tracking-widest text-xs px-3 py-1.5 border-2 border-[#1A1A1A] bg-[#FF2D78] text-white">
                {row.__label.toUpperCase()}
              </span>
              <div className="flex-1 h-[2px] bg-[#1A1A1A]/10" />
            </div>
          );
        }
        return (
          <Reveal key={ri} delay={(ri % 6) * 0.07}>
            {row.length === 1 ? (
              row[0].span === "quarter" ? (
                <div className="flex justify-center">
                  <div className="w-[65%] min-w-[220px]"><ProjectImg img={row[0]} index={ri} /></div>
                </div>
              ) : row[0].span === "third" ? (
                <div className="flex justify-center">
                  <div className="w-1/3 min-w-[220px]"><ProjectImg img={row[0]} index={ri} /></div>
                </div>
              ) : (
                <ProjectImg img={row[0]} index={ri} />
              )
            ) : (
              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns:
                    row.length === 3 ? "1fr 1fr 1fr"
                    : row[0].span === "wide" || row[1].span === "narrow" ? "2fr 1fr"
                    : row[0].span === "narrow" || row[1].span === "wide" ? "1fr 2fr"
                    : "1fr 1fr",
                }}
              >
                {row.map((img, ii) => (
                  <ProjectImg key={ii} img={img} index={ri * 2 + ii} />
                ))}
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : params.slug?.[0];
  const project = slug ? getProject(slug) : undefined;
  const [openCampaign, setOpenCampaign] = useState<Campaign | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <p className="font-display italic text-6xl text-[#FF2D78]">404</p>
        <p className="font-handwriting text-2xl text-[#1A1A1A]/60">project not found :(</p>
        <Link href="/projects" className="font-handwriting text-xl text-[#FF2D78] underline decoration-wavy underline-offset-4">
          ← back to projects
        </Link>
      </main>
    );
  }

  const { next } = getAdjacentProjects(project.slug);
  // Background is always a dark overlay now — all text is white
  const titleColor = "#fff";
  const labelColor = "rgba(255,255,255,0.72)";
  const tagBg      = "rgba(255,255,255,0.15)";
  const tagColor   = "#fff";

  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        {/* Cover image background */}
        <Image
          src={project.cover}
          alt=""
          fill
          priority
          className="object-cover"
          style={{ zIndex: 0 }}
        />
        {/* Dark overlay — consistent across all project pages */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.62)", zIndex: 1 }} />

        {/* Gold stars */}
        <GoldStars stars={[
          { ch: "★", size: 28, left: "5%",  top: "14%", rot: -18, op: 0.50, delay: 0   },
          { ch: "✦", size: 18, left: "10%", top: "60%", rot: 12,  op: 0.38, delay: 0.5 },
          { ch: "✶", size: 22, left: "88%", top: "18%", rot: -10, op: 0.52, delay: 0.3 },
          { ch: "★", size: 16, left: "92%", top: "65%", rot: 25,  op: 0.40, delay: 0.9 },
          { ch: "✦", size: 32, left: "50%", top: "8%",  rot: -5,  op: 0.35, delay: 0.6 },
        ]} />

        {/* Back button */}
        <motion.div
          className="absolute top-24 left-6 md:left-10 z-[2]"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="font-condensed tracking-widest text-xs flex items-center gap-2 px-4 py-2 border-2 border-white/70 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#1A1A1A] transition-all duration-200"
          >
            ← BACK
          </Link>
        </motion.div>

        {/* Category + year */}
        <motion.div
          className="flex items-center gap-3 mb-5 relative z-[2]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span
            className="font-condensed tracking-widest text-xs px-3 py-1 rounded-full"
            style={{ backgroundColor: tagBg, color: tagColor }}
          >
            {project.category.toUpperCase()}
          </span>
          <span className="font-editorial italic text-sm" style={{ color: labelColor }}>
            {project.year}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display font-black italic text-center leading-none relative z-[2]"
          style={{
            fontSize: "clamp(64px, 13vw, 168px)",
            color: titleColor,
            rotate: -1,
            textShadow: "0 2px 24px rgba(0,0,0,0.22)",
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {project.name}.
        </motion.h1>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mt-6 relative z-[2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-condensed tracking-widest text-xs px-3 py-1"
              style={{ backgroundColor: tagBg, color: tagColor }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── BRIEF ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] px-6 md:px-16 py-24 relative overflow-hidden">
        {/* Big watermark label */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 font-condensed tracking-widest pointer-events-none select-none"
          style={{
            fontSize: "clamp(80px,14vw,180px)",
            color: "rgba(26,26,26,0.04)",
            lineHeight: 1,
            writingMode: "vertical-rl",
            transform: "translateY(-50%) rotate(180deg)",
          }}
        >
          THE BRIEF
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">

          {/* Left — brief text */}
          <Reveal direction="left">
            <p className="font-handwriting text-xl text-[#1A1A1A]/40 mb-4" style={{ rotate: "-1deg" }}>
              here&apos;s the story ↓
            </p>
            <p className="font-display italic text-2xl md:text-3xl text-[#1A1A1A] leading-snug mb-8">
              &ldquo;{project.brief}&rdquo;
            </p>
            {project.objective && (
              <p className="font-editorial italic text-lg text-[#1A1A1A]/65 leading-relaxed">
                {project.objective}
              </p>
            )}
          </Reveal>

          {/* Right — concept sticky note */}
          {project.concept && (
            <Reveal direction="right" delay={0.15}>
              <motion.div
                className="p-6 relative"
                style={{
                  backgroundColor: "#FFB3C6",
                  rotate: 2,
                  boxShadow: "6px 6px 0 rgba(0,0,0,0.12)",
                }}
                whileHover={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                {/* Tape strip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#FF2D78] opacity-60 rounded-sm border border-[#1A1A1A]/20" />
                <p className="font-condensed tracking-widest text-xs text-[#FF2D78] mb-3 mt-1">
                  THE CONCEPT ✦
                </p>
                <p className="font-handwriting text-xl text-[#1A1A1A] leading-relaxed">
                  {project.concept}
                </p>
              </motion.div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── IMAGE GALLERY ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #1A1A1A 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <Reveal>
          <p className="font-handwriting text-4xl md:text-5xl text-[#1A1A1A] mb-12">the work</p>
        </Reveal>

        {project.campaigns ? (
          <AnimatePresence mode="wait">
            {openCampaign ? (
              /* ── Campaign images view ── */
              <motion.div
                key={openCampaign.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Back button + campaign name */}
                <div className="flex items-center gap-4 mb-10">
                  <motion.button
                    onClick={() => setOpenCampaign(null)}
                    className="font-condensed tracking-widest text-xs px-4 py-2 border-2 border-[#1A1A1A] bg-[#F5F0E8] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    ← ALL CAMPAIGNS
                  </motion.button>
                  <h2 className="font-condensed tracking-widest text-2xl text-[#1A1A1A]">
                    {openCampaign.name.toUpperCase()}
                  </h2>
                </div>
                <ImageGrid images={openCampaign.images} />
              </motion.div>
            ) : (
              /* ── Folder grid ── */
              <motion.div
                key="folders"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-10 md:gap-14 items-start"
              >
                {project.campaigns.map((campaign, i) => (
                  <div
                    key={campaign.slug}
                    className="flex-shrink-0"
                    style={{ marginTop: [0, 40, -20, 60, 8, -15, 50][i % 7] }}
                  >
                    <FolderCard campaign={campaign} index={i} onClick={() => setOpenCampaign(campaign)} />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <ImageGrid images={project.images} />
        )}
      </section>

      {/* ── DETAILS STRIP ────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
          <Reveal direction="left">
            <p className="font-condensed tracking-widest text-xs text-white/35 mb-2">MY ROLE</p>
            <p className="font-display italic text-white text-xl leading-snug">{project.role}</p>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <p className="font-condensed tracking-widest text-xs text-white/35 mb-2">TOOLS</p>
            <div className="flex flex-col gap-1">
              {project.tools.map((t) => (
                <p key={t} className="font-editorial italic text-white/80 text-base">{t}</p>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <p className="font-condensed tracking-widest text-xs text-white/35 mb-2">YEAR</p>
            <p className="font-display italic text-[#FF2D78] text-3xl">{project.year}</p>
            <p className="font-editorial italic text-white/50 text-sm mt-1">{project.category}</p>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS NOTES ────────────────────────────────────────────────────── */}
      {project.details.length > 0 && (
        <section className="px-6 md:px-16 py-20 bg-[#F5F0E8]">
          <Reveal>
            <p className="font-condensed tracking-widest text-xs text-[#1A1A1A]/40 mb-10">
              PROCESS NOTES ✦
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-6">
            {project.details.map((note, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  className="p-5 max-w-xs"
                  style={{
                    backgroundColor: NOTE_COLOURS[i % NOTE_COLOURS.length],
                    rotate: NOTE_ROTS[i % NOTE_ROTS.length],
                    boxShadow: "5px 5px 0 rgba(0,0,0,0.10)",
                  }}
                  whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <span className="font-condensed tracking-widest text-[10px] text-[#1A1A1A]/40 block mb-2">
                    ★ NOTE {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-handwriting text-lg text-[#1A1A1A] leading-snug">{note}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── NEXT PROJECT ─────────────────────────────────────────────────────── */}
      {next && (
        <section className="border-t-2 border-[#1A1A1A]">
          <Link href={`/projects/${next.slug}`}>
            <motion.div
              className="px-6 md:px-16 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              style={{ backgroundColor: next.color }}
              whileHover={{ paddingLeft: "4.5rem" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div>
                <p
                  className="font-condensed tracking-widest text-xs mb-2"
                  style={{ color: next.textLight ? "rgba(255,255,255,0.45)" : "rgba(26,26,26,0.4)" }}
                >
                  NEXT PROJECT
                </p>
                <p
                  className="font-display italic font-black leading-none"
                  style={{
                    fontSize: "clamp(40px, 8vw, 100px)",
                    color: next.textLight ? "#fff" : next.accent,
                  }}
                >
                  {next.name}.
                </p>
              </div>
              <motion.span
                className="font-handwriting text-3xl"
                style={{ color: next.textLight ? "rgba(255,255,255,0.6)" : "rgba(26,26,26,0.5)" }}
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </Link>
        </section>
      )}
    </main>
  );
}
