"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Project detail pages have a dark hero — nav text should be white
function useNavTheme(pathname: string) {
  const isProjectDetail = /^\/projects\/.+/.test(pathname);
  const [isDark, setIsDark] = useState(isProjectDetail);

  useEffect(() => {
    setIsDark(isProjectDetail);

    if (!isProjectDetail) return;

    const onScroll = () => {
      // Hero is ~65vh tall; once scrolled past it, switch back to dark text
      const heroEnd = window.innerHeight * 0.65 - 80;
      setIsDark(window.scrollY < heroEnd);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isProjectDetail]);

  return { isDark };
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useNavTheme(pathname);

  // Only text colour changes — no background, no blur
  const fg     = isDark ? "#fff" : "#1A1A1A";
  const accent = "#FF2D78";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-8 py-5 md:px-12">

        {/* Logo */}
        <Link href="/" className="group relative">
          <motion.span
            className="font-display font-black text-lg tracking-tight"
            animate={{ color: fg }}
            transition={{ duration: 0.3 }}
          >
            AK<span style={{ color: accent }}>.</span>
          </motion.span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link href={href} className="relative group">
                  <motion.span
                    className="font-sans text-sm font-medium tracking-wide uppercase"
                    animate={{ color: isActive ? accent : fg }}
                    whileHover={{ color: accent }}
                    transition={{ duration: 0.2 }}
                  >
                    {label}
                  </motion.span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] rounded-full"
                    style={{ backgroundColor: accent }}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.25 }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Available badge */}
        <motion.a
          href="/contact"
          className="hidden md:flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider border transition-colors"
          animate={{
            borderColor: isDark ? "rgba(255,255,255,0.55)" : "#1A1A1A",
            color: fg,
          }}
          whileHover={{
            backgroundColor: accent,
            borderColor: accent,
            color: "#fff",
            scale: 1.04,
          }}
          transition={{ duration: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[
            { rotate: menuOpen ? 45 : 0,   y: menuOpen ? 7  : 0 },
            { opacity: menuOpen ? 0 : 1 },
            { rotate: menuOpen ? -45 : 0,  y: menuOpen ? -7 : 0 },
          ].map((anim, i) => (
            <motion.span
              key={i}
              className="block w-6 h-[2px] rounded"
              style={{ backgroundColor: fg }}
              animate={anim}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden overflow-hidden bg-[#F5F0E8] border-t border-[#1A1A1A]/10"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="flex flex-col px-8 py-6 gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-display text-3xl font-bold text-[#1A1A1A]"
                    onClick={() => setMenuOpen(false)}
                  >
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
