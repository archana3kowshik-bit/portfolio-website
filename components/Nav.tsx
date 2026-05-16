"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/projects", label: "Work"    },
  { href: "/about",    label: "About"   },
  { href: "/contact",  label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">

      {/* ── Pill nav — Sierra Hopkins style ── */}
      <nav className="hidden md:flex items-center gap-6 bg-white border border-[#ddd] rounded-full px-6 py-3 shadow-sm">
        {links.slice(0, 1).map(({ href, label }) => (
          <Link key={href} href={href}
            className={`font-body text-xs tracking-[0.15em] uppercase transition-colors ${pathname === href ? "text-[#1B3A6B]" : "text-[#999] hover:text-[#111]"}`}>
            {label}
          </Link>
        ))}

        {/* Logo centre */}
        <Link href="/" className="font-display font-black italic text-[#111] text-lg px-3 hover:text-[#1B3A6B] transition-colors">
          AK<span className="text-[#1B3A6B]">.</span>
        </Link>

        {links.slice(1).map(({ href, label }) => (
          <Link key={href} href={href}
            className={`font-body text-xs tracking-[0.15em] uppercase transition-colors ${pathname === href ? "text-[#1B3A6B]" : "text-[#999] hover:text-[#111]"}`}>
            {label}
          </Link>
        ))}

        <a href="/contact"
          className="flex items-center gap-1.5 font-body text-xs tracking-[0.12em] uppercase text-[#999] hover:text-[#1B3A6B] transition-colors ml-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available
        </a>
      </nav>

      {/* ── Mobile ── */}
      <div className="md:hidden flex items-center justify-between w-full bg-white border border-[#ddd] rounded-full px-5 py-3 shadow-sm">
        <Link href="/" className="font-display font-black italic text-[#111] text-base">
          AK<span className="text-[#1B3A6B]">.</span>
        </Link>
        <button onClick={() => setOpen(!open)} aria-label="Menu"
          className="font-body text-xs tracking-widest uppercase text-[#999]">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <button onClick={() => setOpen(false)}
              className="absolute top-6 right-6 font-body text-xs tracking-widest uppercase text-[#999]">
              Close
            </button>
            {[{ href: "/", label: "Home" }, ...links].map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-display font-black italic text-5xl text-[#111] hover:text-[#1B3A6B] transition-colors"
                onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
