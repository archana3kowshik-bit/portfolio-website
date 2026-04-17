"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "purrrrr ♡",
  "yayyyy!!!",
  "hehe~",
  "more pets plz!",
  "♡ ♡ ♡",
  "so cozy~",
  "*kneads happily*",
  "mrrrow~",
  "happy cat ★",
  "teehee!!",
  "u r so kind ♡",
  "don't stop!!",
  "i luv u",
  "*biscuit making*",
  "life is good ♡",
];

interface Heart { id: number; x: number; y: number }

function CatSVG({ isPetting }: { isPetting: boolean }) {
  return (
    <svg
      width="280"
      height="248"
      viewBox="0 0 527 466"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Original paths from illustration ── */}

      {/* Head */}
      <path d="M317 121.5C317 179.214 260 158 184.5 149C105.5 171 36.0005 179.214 36.0005 121.5C36.0005 63.7862 98.9045 17 176.5 17C254.096 17 317 63.7862 317 121.5Z" fill="black"/>

      {/* Ears */}
      <path d="M38.5005 5L60.0005 65.5L104 33.5L38.5005 5Z" fill="black"/>
      <path d="M301.5 0L280 60.5L236 28.5L301.5 0Z" fill="black"/>

      {/* Body */}
      <path d="M167 216C191 186.4 163 157 146 146L198.5 136C210.167 150.5 237.6 182.7 254 195.5C274.5 211.5 247 268 233.5 284C220 300 231 331.5 303 319C375 306.5 496.5 403 455 435.5C413.5 468 258 471 87.0005 460C-83.9995 449 137 253 167 216Z" fill="black"/>

      {/* Tail / arm */}
      <path d="M429.5 271C508.7 293 457.5 363.5 422 396H450C493.734 367.239 540.757 300.772 522 274.5C503.545 248.65 463.834 231.167 437 223.5C440.834 210 443.2 181 422 173C395.5 163 330.5 243.5 429.5 271Z" fill="black"/>

      {/* Whiskers */}
      <path d="M2.00049 146L65.4454 129" stroke="black" strokeWidth="4" strokeLinecap="round"/>
      <path d="M12.1717 176.579L68.2742 142.421" stroke="black" strokeWidth="4" strokeLinecap="round"/>
      <path d="M362.239 111.796L296.931 104.79" stroke="black" strokeWidth="4" strokeLinecap="round"/>
      <path d="M356.909 143.578L296.207 118.487" stroke="black" strokeWidth="4" strokeLinecap="round"/>

      {/* ── EYES — swap between normal and happy ── */}
      {isPetting ? (
        /* Happy closed crescent eyes */
        <>
          {/* Left eye white base */}
          <ellipse cx="110" cy="94" rx="34" ry="24" fill="#D9D9D9" />
          {/* Happy crescent arc */}
          <path d="M78 100 Q110 72 142 100" stroke="black" strokeWidth="7"
            strokeLinecap="round" fill="none" />
          <path d="M78 100 Q110 72 142 100" stroke="#D9D9D9" strokeWidth="2"
            strokeLinecap="round" fill="none" />

          {/* Right eye white base */}
          <ellipse cx="241" cy="89" rx="34" ry="24" fill="#D9D9D9" />
          {/* Happy crescent arc */}
          <path d="M208 95 Q241 67 274 95" stroke="black" strokeWidth="7"
            strokeLinecap="round" fill="none" />
          <path d="M208 95 Q241 67 274 95" stroke="#D9D9D9" strokeWidth="2"
            strokeLinecap="round" fill="none" />
        </>
      ) : (
        /* Normal eyes — gray area + black pupil */
        <>
          <path d="M157.435 84.9201C161.126 98.1308 142.244 101.38 116.08 108.691C91.2343 129.885 66.376 124.607 62.6845 111.396C58.993 98.1855 77.2111 81.5492 103.376 74.238C129.54 66.9268 153.743 71.7093 157.435 84.9201Z" fill="#D9D9D9"/>
          <path d="M191.261 85.42C188.76 98.9069 207.856 100.463 234.568 105.417C261.2 124.315 285.49 116.846 287.992 103.359C290.493 89.8722 270.867 74.9232 244.155 69.9694C217.444 65.0157 193.762 71.9331 191.261 85.42Z" fill="#D9D9D9"/>
          <ellipse cx="87.5005" cy="100.5" rx="14.5" ry="15.5" fill="black"/>
          <ellipse cx="243.5" cy="90.5" rx="14.5" ry="15.5" fill="black"/>
        </>
      )}

      {/* Nose / mouth mark */}
      <path d="M168.5 121L175.5 94.5L186.5 118.5" stroke="white" strokeLinecap="round"/>

      {/* ── BLUSH — fades in when petting ── */}
      <motion.ellipse cx="68" cy="130" rx="26" ry="13" fill="#FF2D78"
        animate={{ opacity: isPetting ? 0.45 : 0 }} transition={{ duration: 0.3 }} />
      <motion.ellipse cx="282" cy="118" rx="26" ry="13" fill="#FF2D78"
        animate={{ opacity: isPetting ? 0.45 : 0 }} transition={{ duration: 0.3 }} />

      {/* ── SPARKLES when petting ── */}
      {isPetting && (
        <>
          {/* Top-right sparkle */}
          <path d="M330 30 L333 22 L336 30 L344 33 L336 36 L333 44 L330 36 L322 33 Z" fill="#FFD700" />
          <path d="M350 10 L352 5 L354 10 L359 12 L354 14 L352 19 L350 14 L345 12 Z" fill="#FFD700" />
          {/* Top-left sparkle */}
          <path d="M30 30 L33 22 L36 30 L44 33 L36 36 L33 44 L30 36 L22 33 Z" fill="#FFD700" />
        </>
      )}
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function PettableCat() {
  const [petCount, setPetCount]   = useState(0);
  const [isPetting, setIsPetting] = useState(false);
  const [message, setMessage]     = useState<string | null>(null);
  const [hearts, setHearts]       = useState<Heart[]>([]);

  const pet = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setMessage(prev => {
      const opts = MESSAGES.filter(m => m !== prev);
      return opts[Math.floor(Math.random() * opts.length)];
    });
    setIsPetting(true);
    setPetCount(c => c + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    const x = e.clientX - rect.left + (Math.random() - 0.5) * 40;
    const y = e.clientY - rect.top;
    setHearts(h => [...h, { id, x, y }]);

    setTimeout(() => setIsPetting(false), 750);
    setTimeout(() => setMessage(null), 2400);
    setTimeout(() => setHearts(h => h.filter(fh => fh.id !== id)), 1600);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">

      <motion.p
        className="font-handwriting text-xl text-[#1A1A1A]/50"
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        give her a pet ↓
      </motion.p>

      <div className="relative cursor-pointer select-none" onClick={pet}>
        {/* Speech bubble */}
        <AnimatePresence>
          {message && (
            <motion.div
              className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border-2 border-[#1A1A1A] px-4 py-2 font-handwriting text-lg text-[#FF2D78] z-10"
              style={{ borderRadius: "18px 18px 18px 4px" }}
              initial={{ scale: 0, y: 8, rotate: -4 }}
              animate={{ scale: 1, y: 0, rotate: -2 }}
              exit={{ scale: 0, y: -8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              {message}
              <span className="absolute -bottom-[10px] left-5 w-4 h-4 bg-white border-b-2 border-r-2 border-[#1A1A1A]"
                style={{ transform: "rotate(45deg)" }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cat */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          animate={isPetting ? { y: [-4, 0, -2, 0] } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <CatSVG isPetting={isPetting} />
        </motion.div>

        {/* Floating hearts */}
        <AnimatePresence>
          {hearts.map(({ id, x, y }) => (
            <motion.span key={id}
              className="absolute pointer-events-none text-[#FF2D78] text-2xl"
              style={{ left: x, top: y }}
              initial={{ opacity: 1, y: 0, scale: 0.6 }}
              animate={{ opacity: 0, y: -70, scale: 1.3, x: (Math.random() - 0.5) * 30 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              ♡
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {petCount > 0 && (
          <motion.p className="font-handwriting text-sm text-[#1A1A1A]/40"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {petCount} pet{petCount !== 1 ? "s" : ""} given ♡
            {petCount >= 10 && " — she loves you!!"}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
