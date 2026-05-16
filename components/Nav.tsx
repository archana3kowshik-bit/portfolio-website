"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/",         label: "Home"     },
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">

        {/* Logo */}
        <Link href="/"
          className="font-display text-xl text-[#111] leading-none tracking-wide">
          AK<span className="text-[#C85535]">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <span className={`font-body text-xs tracking-[0.15em] uppercase transition-colors ${
                  pathname === href ? "text-[#C85535]" : "text-[#111] hover:text-[#C85535]"
                }`}>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Available */}
        <a href="/contact"
          className="hidden md:flex items-center gap-2 font-body text-xs tracking-[0.12em] uppercase text-[#888] hover:text-[#C85535] transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available
        </a>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)} aria-label="Menu">
          {[
            { rotate: open ? 45  : 0, y: open ?  7 : 0 },
            { opacity: open ? 0  : 1 },
            { rotate: open ? -45 : 0, y: open ? -7 : 0 },
          ].map((anim, i) => (
            <motion.span key={i} className="block w-5 h-[1.5px] bg-[#111]" animate={anim} />
          ))}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white border-t border-[#eee]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <ul className="flex flex-col px-6 py-8 gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="font-display text-4xl text-[#111] tracking-wide"
                    onClick={() => setOpen(false)}>
                    {label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
