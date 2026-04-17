"use client";

export default function Marquee({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 font-display font-black text-3xl md:text-5xl italic text-[#1A1A1A]"
          >
            {item}
            <span className="text-[#FF2D78] text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
