"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/",        label: "Home"     },
  { href: "/projects",label: "Projects" },
  { href: "/about",   label: "About"    },
  { href: "/contact", label: "Contact"  },
];

export default function Nav() {
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-multiply">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">

        {/* Logo */}
        <Link href="/" className="font-hero italic text-[#111] text-xl leading-none">
          AK<span className="text-[#C85535]">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <motion.span
                  className="font-sans text-xs tracking-[0.15em] uppercase"
                  animate={{ color: pathname === href ? "#C85535" : "#111111" }}
                  whileHover={{ color: "#C85535" }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Available badge */}
        <a href="/contact"
          className="hidden md:flex items-center gap-2 font-sans text-xs tracking-[0.12em] uppercase text-[#999490] hover:text-[#C85535] transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setOpen(!open)} aria-label="Menu">
          {[
            { rotate: open ? 45 : 0,  y: open ?  7 : 0 },
            { opacity: open ? 0 : 1 },
            { rotate: open ? -45 : 0, y: open ? -7 : 0 },
          ].map((anim, i) => (
            <motion.span key={i}
              className="block w-5 h-[1.5px] bg-[#111]"
              animate={anim} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-[#FAFAF8] border-t border-[#111]/8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col px-6 py-8 gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="font-display italic text-3xl text-[#111]"
                    onClick={() => setOpen(false)}>
                    {label}
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
