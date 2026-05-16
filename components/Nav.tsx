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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink border-b border-[#222] flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="font-display text-white text-2xl tracking-wider leading-none hover:text-blue transition-colors">
          AK.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                pathname === href ? "text-blue" : "text-[#888] hover:text-white"
              }`}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Available + mobile menu toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            <span className="font-mono text-[10px] text-[#666] tracking-[0.2em] uppercase">Available</span>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden font-mono text-[11px] text-[#888] tracking-widest uppercase">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <button onClick={() => setOpen(false)}
              className="absolute top-5 right-5 font-mono text-[11px] text-[#888] tracking-widest uppercase">
              Close
            </button>
            {[{ href: "/", label: "Home" }, ...links].map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-display text-white text-6xl tracking-widest hover:text-blue transition-colors"
                onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
