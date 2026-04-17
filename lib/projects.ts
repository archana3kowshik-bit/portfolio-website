export interface ProjectImage {
  src: string;
  alt?: string;
  span?: "full" | "half" | "wide" | "narrow" | "third" | "quarter"; // layout hint
  fit?: "cover" | "contain"; // object-fit override (default: cover)
  video?: boolean; // render as <video> instead of <img>
  label?: string;  // section title shown above this image group
}

export interface Campaign {
  name: string;
  slug: string;
  cover: string;
  images: ProjectImage[];
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  year: string;
  color: string;        // hero bg tint
  accent: string;       // title / highlight colour
  textLight: boolean;   // true = white text on hero
  emoji: string;
  cover: string;        // hero background image
  tags: string[];
  brief: string;
  objective: string;
  concept: string;
  details: string[];
  role: string;
  tools: string[];
  images: ProjectImage[];
  campaigns?: Campaign[];
}

export const PROJECTS: Project[] = [
  {
    slug: "purdeys",
    name: "Purdey's",
    category: "D&AD Campaign",
    year: "2024",
    color: "#FFB3C6",
    accent: "#FF2D78",
    textLight: false,
    emoji: "🍋",
    cover: "/projects/purdeys/hero.png",
    tags: ["Campaign", "Branding", "Advertising"],
    brief: "Fun and creative ad campaign for the Indian market launch of Purdey's Natural Energy.",
    objective:
      "Introducing Purdey's to the Indian market, infusing a sense of fun and freshness. Position it as a premium, natural, and revitalising beverage appealing to health-conscious individuals aged 20–35 through a campaign that embodies vibrancy with a sense of Indian culture.",
    concept:
      "Vibrant Lifestyle Campaign — a series of lively ads showcasing diverse Indian lifestyles and the joy of enjoying Purdey's.",
    details: [
      "D&AD competition brief",
      "Market entry strategy for India",
      "Targeted health-conscious 20–35 year olds",
      "Blended Indian cultural vibrancy with premium positioning",
    ],
    role: "Art Direction, Campaign Design, Visual Identity",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    images: [
      // ── Campaign Posters ───────────────────────────────────────────────────
      { src: "/projects/purdeys/hero.png",             alt: "Three Purdey's bottles lineup",  span: "full",  label: "Campaign Posters" },
      { src: "/projects/purdeys/spread.png",           alt: "All three campaign posters",      span: "full" },
      { src: "/projects/purdeys/poster-rejuvenate.png", alt: "Rejuvenate poster mockup",       span: "third" },
      { src: "/projects/purdeys/poster-refocus.png",   alt: "Refocus poster mockup",           span: "third" },
      { src: "/projects/purdeys/poster-replenish.png", alt: "Replenish poster mockup",         span: "third" },
      // ── Social Media ───────────────────────────────────────────────────────
      { src: "/projects/purdeys/social-grid.png",  alt: "Social media content grid",      span: "full",  label: "Social Media" },
      { src: "/projects/purdeys/phone-mockup1.png", alt: "Instagram post mockup",          span: "half" },
      { src: "/projects/purdeys/phone-mockup2.png", alt: "Instagram post mockup — Replenish", span: "half" },
      // ── Merchandise ────────────────────────────────────────────────────────
      { src: "/projects/purdeys/merch-mug.png",    alt: "Purdey's branded mug",           span: "half",  label: "Merchandise" },
      { src: "/projects/purdeys/merch-tshirt.png", alt: "Purdey's campaign t-shirt",      span: "half" },
      // ── Pin Badges ─────────────────────────────────────────────────────────
      { src: "/projects/purdeys/mockup1.png", alt: "Pin badge — Rejuvenate", span: "third", fit: "contain", label: "Pin Badges" },
      { src: "/projects/purdeys/mockup2.png", alt: "Pin badge — Replenish",  span: "third", fit: "contain" },
      { src: "/projects/purdeys/mockup3.png", alt: "Pin badge — Refocus",    span: "third", fit: "contain" },
    ],
  },
  {
    slug: "swiss-design",
    name: "Swiss Design",
    category: "Graphic Design",
    year: "2023",
    color: "#1A1A1A",
    accent: "#F5F0E8",
    textLight: true,
    emoji: "◼",
    cover: "/projects/swiss-design/hero.png",
    tags: ["Typography", "Grid", "Poster"],
    brief: "Nine album covers inspired by the Swiss International Typographic Style.",
    objective:
      "Apply Swiss design principles — minimalist aesthetic, grid-based layouts, clarity and typography — to create clean, effective album cover designs.",
    concept:
      "Exploring Swiss design through music: each album cover uses a strict grid, bold sans-serif typography, and a limited colour palette to create timeless, striking compositions.",
    details: [
      "9 album cover designs",
      "Swiss International Typographic Style",
      "Grid-based compositional layouts",
      "Minimalist, typography-driven aesthetic",
      "Personal reinterpretation of Swiss principles",
    ],
    role: "Graphic Design, Typography, Layout",
    tools: ["Adobe Illustrator", "Adobe InDesign"],
    images: [
      // ── All 9 covers ───────────────────────────────────────────────────────
      { src: "/projects/swiss-design/all-covers.png",      alt: "All 9 album covers",                span: "full", label: "Album Cover Designs" },
      // ── Vinyl mockup sets ──────────────────────────────────────────────────
      { src: "/projects/swiss-design/set1.png",            alt: "Joy Division, Daylight, Stupid Cupid vinyl mockups", span: "full", label: "Vinyl Mockups" },
      { src: "/projects/swiss-design/hero.png",            alt: "Freudian, Oncle Jazz, Lamp vinyl mockups",           span: "full" },
      { src: "/projects/swiss-design/set3.png",            alt: "Berlin, The Bends, Eden vinyl mockups",              span: "full" },
      // ── Individual close-ups ───────────────────────────────────────────────
      { src: "/projects/swiss-design/spread1.png",         alt: "Daylight – Joji",    span: "third", label: "Close-ups" },
      { src: "/projects/swiss-design/cover-lamp.png",      alt: "Lamp 幻想",           span: "third" },
      { src: "/projects/swiss-design/cover-onclejazz.png", alt: "Oncle Jazz",         span: "third" },
    ],
  },
  {
    slug: "cashfree",
    name: "Cashfree",
    category: "Brand Design",
    year: "2024–2025",
    color: "#A8E6C3",
    accent: "#FF2D78",
    textLight: false,
    emoji: "💳",
    cover: "/projects/cashfree/gff/hero.jpg",
    tags: ["Fintech", "UI", "Branding"],
    brief:
      "Ten campaigns. One brand. A collection of my best work at Cashfree Payments — from illustration-led social campaigns to high-visibility events.",
    objective:
      "Design high-impact visuals across social media, emailers, event collateral, and campaigns — making fintech feel bold, modern, and human.",
    concept:
      "From playful illustration to sleek editorial — proving that financial design doesn't have to be boring, one campaign at a time.",
    details: [
      "GFF Social Media & custom brochure illustrations for a flagship fintech event",
      "Black Friday campaign — minimal, high-impact social ads and e-book design",
      "Introduced a gradient editorial carousel system, scalable in Canva for non-designers",
      "HUFT carousel with custom doodles and personality-driven aesthetics",
      "Apple Pay — clean, restrained creatives inspired by Apple's visual language",
      "Pulse app launch — emailers and WhatsApp creatives with fresh illustration style",
      "2026 Playbook newsletter — glassmorphism + gradient illustrations",
      "Ten & Beyond — 10-year anniversary event across Bangalore and Mumbai",
      "One of a Kind — hand-drawn illustration campaign recognised on LinkedIn",
    ],
    role: "Visual Design, Illustration, Social Media Design, Campaign Design",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva"],
    images: [
      // ── GFF Social Media & Brochure ────────────────────────────────────────
      { src: "/projects/cashfree/gff/hero.jpg",        alt: "GFF print collateral",            span: "full",  label: "GFF Social Media & Brochure" },
      { src: "/projects/cashfree/gff/work-p03-1.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-2.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-3.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-4.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-5.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-6.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-7.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-8.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p03-9.png",  alt: "GFF social post",                 span: "third" },
      { src: "/projects/cashfree/gff/work-p04-1.png",  alt: "GFF brochure",                    span: "third" },
      { src: "/projects/cashfree/gff/work-p04-2.png",  alt: "GFF brochure",                    span: "third" },
      { src: "/projects/cashfree/gff/work-p04-3.png",  alt: "GFF brochure illustration",        span: "third" },
      { src: "/projects/cashfree/gff/work-p04-4.png",  alt: "GFF brochure",                    span: "third" },
      { src: "/projects/cashfree/gff/work-p04-5.png",  alt: "GFF brochure",                    span: "third" },
      { src: "/projects/cashfree/gff/work-p04-6.jpg",  alt: "GFF brochure spread",             span: "third" },
      // ── Black Friday ───────────────────────────────────────────────────────
      { src: "/projects/cashfree/black-friday/work-p07-1.png",  alt: "From Black Friday to Diwali ebook", span: "half", label: "Black Friday" },
      { src: "/projects/cashfree/black-friday/work-p06-1.png",  alt: "Black Friday creative",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p06-2.png",  alt: "Black Friday creative",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p06-3.png",  alt: "Black Friday creative",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-2.png",  alt: "Black Friday carousel",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-3.png",  alt: "Black Friday carousel",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-4.png",  alt: "Black Friday carousel",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-5.png",  alt: "Black Friday carousel",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-6.png",  alt: "Black Friday carousel",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-7.png",  alt: "Black Friday carousel",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-8.png",  alt: "Black Friday carousel",           span: "third" },
      { src: "/projects/cashfree/black-friday/work-p07-9.png",  alt: "Black Friday e-book page",        span: "third" },
      // ── New Carousel Style ─────────────────────────────────────────────────
      { src: "/projects/cashfree/carousel/work-p09-1.png",  alt: "Gradient editorial carousel",     span: "third", label: "New Carousel Style" },
      { src: "/projects/cashfree/carousel/work-p09-2.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-3.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-4.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-5.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-6.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-7.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-8.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-9.png",  alt: "Gradient editorial carousel",     span: "third" },
      { src: "/projects/cashfree/carousel/work-p09-10.png", alt: "Gradient editorial carousel",     span: "third" },
      // ── HUFT Carousel ──────────────────────────────────────────────────────
      { src: "/projects/cashfree/huft/work-p11-1.png",  alt: "HUFT carousel slide",             span: "third", label: "HUFT Carousel" },
      { src: "/projects/cashfree/huft/work-p11-2.png",  alt: "HUFT carousel slide",             span: "third" },
      { src: "/projects/cashfree/huft/work-p11-3.png",  alt: "HUFT carousel slide",             span: "third" },
      { src: "/projects/cashfree/huft/work-p11-4.png",  alt: "HUFT carousel slide",             span: "third" },
      { src: "/projects/cashfree/huft/work-p11-5.png",  alt: "HUFT carousel slide",             span: "third" },
      // ── Apple Pay ──────────────────────────────────────────────────────────
      { src: "/projects/cashfree/apple-pay/work-p12-1.png",  alt: "Apple Pay creative",              span: "third", label: "Apple Pay" },
      { src: "/projects/cashfree/apple-pay/work-p12-2.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p12-3.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p12-4.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p13-1.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p13-2.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p13-3.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p13-4.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p13-5.png",  alt: "Apple Pay creative",              span: "third" },
      { src: "/projects/cashfree/apple-pay/work-p13-6.png",  alt: "Apple Pay creative",              span: "third" },
      // ── Pulse App Launch ───────────────────────────────────────────────────
      { src: "/projects/cashfree/pulse/work-p14-1.png",  alt: "Pulse app launch banner",         span: "full",  label: "Pulse App Launch" },
      { src: "/projects/cashfree/pulse/work-p14-2.png",  alt: "Pulse creative",                  span: "third" },
      { src: "/projects/cashfree/pulse/work-p14-3.png",  alt: "Pulse creative",                  span: "third" },
      { src: "/projects/cashfree/pulse/work-p14-4.png",  alt: "Pulse creative",                  span: "third" },
      { src: "/projects/cashfree/pulse/work-p15-1.png",  alt: "Pulse emailer",                   span: "half"  },
      { src: "/projects/cashfree/pulse/work-p15-2.png",  alt: "Pulse WhatsApp creative",         span: "half"  },
      // ── 2026 Playbook Newsletter ───────────────────────────────────────────
      { src: "/projects/cashfree/playbook/work-p17-5.png",  alt: "2026 Playbook newsletter cover",  span: "full",  label: "2026 Playbook Newsletter" },
      { src: "/projects/cashfree/playbook/work-p17-6.png",  alt: "Playbook spread",                 span: "half"  },
      { src: "/projects/cashfree/playbook/work-p17-1.png",  alt: "Playbook detail",                 span: "third" },
      { src: "/projects/cashfree/playbook/work-p17-2.png",  alt: "Playbook detail",                 span: "third" },
      { src: "/projects/cashfree/playbook/work-p17-3.png",  alt: "Playbook detail",                 span: "third" },
      { src: "/projects/cashfree/playbook/work-p17-4.png",  alt: "Playbook detail",                 span: "third" },
      // ── One of a Kind ──────────────────────────────────────────────────────
      { src: "/projects/cashfree/one-of-a-kind/work-p22-1.png",  alt: "One of a Kind — illustration",    span: "third", label: "One of a Kind" },
      { src: "/projects/cashfree/one-of-a-kind/work-p22-2.png",  alt: "One of a Kind — illustration",    span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/work-p22-3.png",  alt: "One of a Kind — illustration",    span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/work-p22-4.png",  alt: "One of a Kind — illustration",    span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/work-p23-1.png",  alt: "One of a Kind — campaign sheet",  span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/work-p23-2.png",  alt: "One of a Kind — creative",        span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/work-p23-3.png",  alt: "One of a Kind — creative",        span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/work-p23-4.png",  alt: "One of a Kind — creative",        span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/ooak-huft-1.png", alt: "One of a Kind — HUFT",            span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-5.png",  alt: "One of a Kind — MKV",             span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-2.png",  alt: "One of a Kind — MKV",             span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-6.png",  alt: "One of a Kind — MKV",             span: "third" },
      { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-8.png",  alt: "One of a Kind — MKV",             span: "half"  },
      { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-1.png",  alt: "One of a Kind — MKV",             span: "half"  },
      { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-2b.png", alt: "One of a Kind — MKV",             span: "half"  },
      { src: "/projects/cashfree/one-of-a-kind/ooak-bb-1.png",   alt: "One of a Kind — BB",              span: "half"  },
    ],
    campaigns: [
      {
        name: "GFF Social Media & Brochure",
        slug: "gff",
        cover: "/projects/cashfree/gff/hero.jpg",
        images: [
          { src: "/projects/cashfree/gff/hero.jpg",       alt: "GFF print collateral",          span: "full"  },
          { src: "/projects/cashfree/gff/work-p03-1.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-2.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-3.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-4.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-5.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-6.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-7.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-8.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p03-9.png", alt: "GFF social post",               span: "third" },
          { src: "/projects/cashfree/gff/work-p04-1.png", alt: "GFF brochure",                  span: "third" },
          { src: "/projects/cashfree/gff/work-p04-2.png", alt: "GFF brochure",                  span: "third" },
          { src: "/projects/cashfree/gff/work-p04-3.png", alt: "GFF brochure illustration",     span: "third" },
          { src: "/projects/cashfree/gff/work-p04-4.png", alt: "GFF brochure",                  span: "third" },
          { src: "/projects/cashfree/gff/work-p04-5.png", alt: "GFF brochure",                  span: "third" },
          { src: "/projects/cashfree/gff/work-p04-6.jpg", alt: "GFF brochure spread",           span: "third" },
        ],
      },
      {
        name: "Black Friday",
        slug: "black-friday",
        cover: "/projects/cashfree/black-friday/work-p07-1.png",
        images: [
          { src: "/projects/cashfree/black-friday/work-p07-1.png", alt: "From Black Friday to Diwali ebook", span: "half"  },
          { src: "/projects/cashfree/black-friday/work-p06-1.png", alt: "Black Friday creative",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p06-2.png", alt: "Black Friday creative",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p06-3.png", alt: "Black Friday creative",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-2.png", alt: "Black Friday carousel",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-3.png", alt: "Black Friday carousel",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-4.png", alt: "Black Friday carousel",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-5.png", alt: "Black Friday carousel",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-6.png", alt: "Black Friday carousel",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-7.png", alt: "Black Friday carousel",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-8.png", alt: "Black Friday carousel",             span: "third" },
          { src: "/projects/cashfree/black-friday/work-p07-9.png", alt: "Black Friday e-book page",          span: "third" },
        ],
      },
      {
        name: "New Carousel Style",
        slug: "carousel",
        cover: "/projects/cashfree/carousel/work-p09-1.png",
        images: [
          { src: "/projects/cashfree/carousel/work-p09-1.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-2.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-3.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-4.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-5.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-6.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-7.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-8.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-9.png",  alt: "Gradient editorial carousel", span: "third" },
          { src: "/projects/cashfree/carousel/work-p09-10.png", alt: "Gradient editorial carousel", span: "third" },
        ],
      },
      {
        name: "HUFT Carousel",
        slug: "huft",
        cover: "/projects/cashfree/huft/work-p11-1.png",
        images: [
          { src: "/projects/cashfree/huft/work-p11-1.png", alt: "HUFT carousel slide", span: "third" },
          { src: "/projects/cashfree/huft/work-p11-2.png", alt: "HUFT carousel slide", span: "third" },
          { src: "/projects/cashfree/huft/work-p11-3.png", alt: "HUFT carousel slide", span: "third" },
          { src: "/projects/cashfree/huft/work-p11-4.png", alt: "HUFT carousel slide", span: "third" },
          { src: "/projects/cashfree/huft/work-p11-5.png", alt: "HUFT carousel slide", span: "third" },
        ],
      },
      {
        name: "Apple Pay",
        slug: "apple-pay",
        cover: "/projects/cashfree/apple-pay/work-p12-1.png",
        images: [
          { src: "/projects/cashfree/apple-pay/work-p12-1.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p12-2.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p12-3.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p12-4.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p13-1.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p13-2.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p13-3.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p13-4.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p13-5.png", alt: "Apple Pay creative", span: "third" },
          { src: "/projects/cashfree/apple-pay/work-p13-6.png", alt: "Apple Pay creative", span: "third" },
        ],
      },
      {
        name: "Pulse App Launch",
        slug: "pulse",
        cover: "/projects/cashfree/pulse/work-p14-1.png",
        images: [
          { src: "/projects/cashfree/pulse/work-p14-1.png", alt: "Pulse app launch banner", span: "full" },
          { src: "/projects/cashfree/pulse/work-p14-2.png", alt: "Pulse creative",          span: "third" },
          { src: "/projects/cashfree/pulse/work-p14-3.png", alt: "Pulse creative",          span: "third" },
          { src: "/projects/cashfree/pulse/work-p14-4.png", alt: "Pulse creative",          span: "third" },
          { src: "/projects/cashfree/pulse/work-p15-1.png", alt: "Pulse emailer",           span: "half"  },
          { src: "/projects/cashfree/pulse/work-p15-2.png", alt: "Pulse WhatsApp creative", span: "half"  },
        ],
      },
      {
        name: "2026 Playbook",
        slug: "playbook",
        cover: "/projects/cashfree/playbook/work-p17-5.png",
        images: [
          { src: "/projects/cashfree/playbook/work-p17-5.png", alt: "Playbook newsletter cover", span: "full"  },
          { src: "/projects/cashfree/playbook/work-p17-6.png", alt: "Playbook spread",           span: "half"  },
          { src: "/projects/cashfree/playbook/work-p17-1.png", alt: "Playbook detail",           span: "third" },
          { src: "/projects/cashfree/playbook/work-p17-2.png", alt: "Playbook detail",           span: "third" },
          { src: "/projects/cashfree/playbook/work-p17-3.png", alt: "Playbook detail",           span: "third" },
          { src: "/projects/cashfree/playbook/work-p17-4.png", alt: "Playbook detail",           span: "third" },
        ],
      },
      {
        name: "One of a Kind",
        slug: "one-of-a-kind",
        cover: "/projects/cashfree/one-of-a-kind/work-p22-1.png",
        images: [
          { src: "/projects/cashfree/one-of-a-kind/work-p22-1.png",  alt: "One of a Kind — illustration", span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/work-p22-2.png",  alt: "One of a Kind — illustration", span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/work-p22-3.png",  alt: "One of a Kind — illustration", span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/work-p22-4.png",  alt: "One of a Kind — illustration", span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/work-p23-1.png",  alt: "One of a Kind — campaign sheet",span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/work-p23-2.png",  alt: "One of a Kind — creative",     span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/work-p23-3.png",  alt: "One of a Kind — creative",     span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/work-p23-4.png",  alt: "One of a Kind — creative",     span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/ooak-huft-1.png", alt: "One of a Kind — HUFT",         span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-5.png",  alt: "One of a Kind — MKV",          span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-2.png",  alt: "One of a Kind — MKV",          span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-6.png",  alt: "One of a Kind — MKV",          span: "third" },
          { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-8.png",  alt: "One of a Kind — MKV",          span: "half"  },
          { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-1.png",  alt: "One of a Kind — MKV",          span: "half"  },
          { src: "/projects/cashfree/one-of-a-kind/ooak-mkv-2b.png", alt: "One of a Kind — MKV",          span: "half"  },
          { src: "/projects/cashfree/one-of-a-kind/ooak-bb-1.png",   alt: "One of a Kind — BB",           span: "half"  },
        ],
      },
    ],
  },
  {
    slug: "magazine",
    name: "Magazine",
    category: "Editorial Design",
    year: "2023",
    color: "#F5F0E8",
    accent: "#FF2D78",
    textLight: false,
    emoji: "📖",
    cover: "/projects/magazine/hero.png",
    tags: ["Editorial", "Layout", "Print"],
    brief: "Blast — an experimental editorial magazine inspired by punk fashion and Japanese anime.",
    objective:
      "Push the boundaries of traditional editorial layout design, creating a fresh, dynamic publication that reimagines punk fashion for the modern era.",
    concept:
      "Inspired by the bold and rebellious aesthetic of NANA (Japanese Anime) — unconventional layouts, bold typography, and mixed textures to capture the spirit of creativity and individuality.",
    details: [
      "Experimental layout design approach",
      "Inspired by NANA (Japanese Anime)",
      "Punk fashion editorial",
      "Unconventional grid-breaking layouts",
      "Bold typography + mixed textures",
    ],
    role: "Editorial Design, Art Direction, Typography",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    images: [
      { src: "/projects/magazine/hero.png",    alt: "Blast magazine cover",      span: "full" },
      { src: "/projects/magazine/spread1.png", alt: "Blast × NANA spread",       span: "full" },
      { src: "/projects/magazine/spread2.png", alt: "Harajuku Punk feature",     span: "full" },
    ],
  },
  {
    slug: "janapada-kit",
    name: "Janapada Kit",
    category: "Cultural Design",
    year: "2024",
    color: "#FFB3C6",
    accent: "#FF2D78",
    textLight: false,
    emoji: "🪡",
    cover: "/projects/janapada-kit/hero.png",
    tags: ["Illustration", "Identity", "Culture"],
    brief:
      "Lalitha — an interactive storytelling kit celebrating Kannada Janapada (folk) tales, named after my grandmother.",
    objective:
      "Preserve and share the beauty of Kannada folklore through a tangible, playful experience that bridges generations.",
    concept:
      "A time machine for kids and adults to bond, learn, and dive into the beauty of Kannada folklore. From mine to yours.",
    details: [
      "Three Kannada Janapada stories translated into English with watercolour illustrations",
      "Postcards with each story's moral and key Kannada words",
      "Handmade finger puppets crafted from recycled fabric (sustainability win!)",
      "Named 'Lalitha' after my grandmother",
      "Complete box packaging design with original illustrations",
    ],
    role: "Concept, Illustration, Packaging Design, Brand Identity",
    tools: ["Procreate", "Adobe Illustrator", "Adobe Photoshop"],
    images: [
      // ── Packaging & Brand Identity ─────────────────────────────────────────
      { src: "/projects/janapada-kit/hero.png",   alt: "Lalitha kit packaging",        span: "full", label: "Packaging & Brand Identity" },
      { src: "/projects/janapada-kit/spread.png", alt: "Brand identity & type system", span: "full" },
      // ── Storybook 1 ────────────────────────────────────────────────────────
      { src: "/projects/janapada-kit/book1-p1.png", alt: "Storybook 1 — opening spread", span: "half", label: "Storybook 1" },
      { src: "/projects/janapada-kit/book1-p5.png", alt: "Storybook 1 — grandmother",    span: "half" },
      { src: "/projects/janapada-kit/book1-p9.png", alt: "Storybook 1 — rooster",        span: "full" },
      // ── Storybook 2 — Meenugaarana Duraase ───────────────────────────────
      { src: "/projects/janapada-kit/book2-cover.png", alt: "Meenugaarana Duraase cover", span: "full", label: "Storybook 2 — Meenugaarana Duraase" },
      { src: "/projects/janapada-kit/book2-p1.png",    alt: "Fisherman by the lake",      span: "half" },
      { src: "/projects/janapada-kit/book2-p2.png",    alt: "The magical fish",           span: "half" },
      // ── Storybook 3 — Govina Haadu ────────────────────────────────────────
      { src: "/projects/janapada-kit/page1.png", alt: "Govina Haadu — title spread",  span: "full", label: "Storybook 3 — Govina Haadu" },
      { src: "/projects/janapada-kit/page2.png", alt: "Cows on the hillside",         span: "half" },
      { src: "/projects/janapada-kit/page4.png", alt: "The tiger",                    span: "half" },
      { src: "/projects/janapada-kit/page5.png", alt: "The chase",                    span: "full" },
      { src: "/projects/janapada-kit/img-1677.jpg", alt: "Janapada Kit",              span: "full" },
    ],
  },
  {
    slug: "animation",
    name: "2D / 3D Animation",
    category: "Motion Design",
    year: "2024",
    color: "#E0E0E0",
    accent: "#1A1A1A",
    textLight: false,
    emoji: "🎬",
    cover: "/projects/animation/hero.png",
    tags: ["Animation", "3D", "Motion"],
    brief:
      "Explorations in motion — from 3D modelling in Blender to 2D frame-by-frame in After Effects.",
    objective:
      "Study 3D and 2D animation software, learn effective storytelling through motion, and develop a personal illustration style for animation.",
    concept:
      "Building stories from scratch — connecting the dots from rough ideas to finished motion pieces.",
    details: [
      "3D — 'Fish Animation': A silly kid's cartoon-style short film in Blender, heavily inspired by Shaun the Sheep. Focused on 3D modelling, lighting, and character animation.",
      "2D — 'Strawberry Animation': Created in After Effects. Focused on developing an illustration style and building the concept from scratch.",
    ],
    role: "Animation, 3D Modelling, Illustration, Storyboarding",
    tools: ["Blender", "Adobe After Effects", "Procreate"],
    images: [
      // ── 3D: Fish Animation ──
      { src: "/projects/animation/fish.mp4",         alt: "Fish animation final",        span: "full", video: true, label: "3D — Fish Animation" },
      { src: "/projects/animation/frame3.png",       alt: "Fish character turnaround",  span: "half" },
      { src: "/projects/animation/frame4.png",       alt: "Fish in kitchen scene",      span: "half" },
      { src: "/projects/animation/frame1.png",       alt: "Storyboard sheets",          span: "half" },
      { src: "/projects/animation/frame2.png",       alt: "Storyboard frames",          span: "half" },
      // ── 2D: Strawberry Animation ──
      { src: "/projects/animation/strawberry.mp4",  alt: "Strawberry animation", span: "quarter", video: true, label: "2D — Strawberry Animation" },
      { src: "/projects/animation/frames-overview.png", alt: "All animation frames",    span: "full" },
      { src: "/projects/animation/moodboard.png",    alt: "Mood & reference board",     span: "full", fit: "contain" },
    ],
  },
  {
    slug: "zines",
    name: "Zines",
    category: "Self-Published",
    year: "2023",
    color: "#A8E6C3",
    accent: "#FF2D78",
    textLight: false,
    emoji: "✂️",
    cover: "/projects/zines/hero.png",
    tags: ["Zine", "Illustration", "Print"],
    brief:
      "A two-part zine series raising awareness of sexual harassment and its lasting psychological impact.",
    objective:
      "Pick a cause I genuinely care about and create a zine to spread awareness — the devastating impact of sexual harassment, particularly on children who often don't even realise what is happening to them.",
    concept:
      "A pot shaped like a body, slowly ruined by hands that look like they belonged to a monster — a visual metaphor for violation and helplessness.",
    details: [
      "Part 1 — 'Broken': a visual portrayal of the harsh realities of sexual harassment and assault experienced by children. Through personal narratives and thought-provoking visuals, a tribute to survivors.",
      "Part 2 — 'State of Mind': the aftermath. The anxiety and trauma that stays with you throughout all your relationships — dependence, self-sabotage, unhealed wounds. Same monster theme, but now you're in love with them. 'Dating the monster.'",
    ],
    role: "Concept, Illustration, Editorial Design, Print",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
    images: [
      // ── Zine 1: State of Mind ──────────────────────────────────────────
      { src: "/projects/zines/z1-mockup1.png",  alt: "State of Mind — physical mockup",        label: "Zine 01 — State of Mind",        span: "full" },
      { src: "/projects/zines/z1-cover.png",    alt: "State of Mind — cover illustration",      span: "half" },
      { src: "/projects/zines/z1-grid.png",     alt: "State of Mind — all pages overview",      span: "half" },
      { src: "/projects/zines/z1-mockup3.png",  alt: "State of Mind — interior spread",         span: "half" },
      { src: "/projects/zines/z1-mockup8.png",  alt: "State of Mind — back cover spread",       span: "half" },
      // ── Zine 2: Broke Broken Broken ───────────────────────────────────
      { src: "/projects/zines/z2-cover.png",     alt: "Broke Broken Broken — cover mockup",     label: "Zine 02 — Broke Broken Broken...",     span: "full" },
      { src: "/projects/zines/z2-page124.png",   alt: "Broke Broken Broken — spreads overview", span: "full" },
      { src: "/projects/zines/z2-page1and2.png", alt: "Opening spread — hands and skull",       span: "half" },
      { src: "/projects/zines/z2-page3and4.png", alt: "Nobody listens — again and again",       span: "half" },
      { src: "/projects/zines/z2-page5and6.png", alt: "How many more will they take",           span: "half" },
      { src: "/projects/zines/z2-firstlast.png", alt: "We will fight back — Broken...",         span: "half" },
      { src: "/projects/zines/z2-poster.png",    alt: "Haven't I given enough — Stop the abuse",span: "full" },
    ],
  },
  {
    slug: "illustrations",
    name: "Other Work",
    category: "Personal Illustrations",
    year: "2023–2025",
    color: "#E8D5F5",
    accent: "#7B2FBE",
    textLight: false,
    emoji: "✏️",
    cover: "/projects/illustrations/skater.png",
    tags: ["Illustration", "Procreate", "Personal"],
    brief: "A collection of personal illustrations made outside of work — characters, creatures, and worlds that live rent-free in my head.",
    objective: "Explore personal illustration styles freely, without briefs or deadlines. Just drawing for the love of it.",
    concept: "Characters, creatures, moods — all the things I draw when no one's asking me to draw anything.",
    details: [
      "Digital illustrations made in Procreate",
      "Character design, portraiture, and creature art",
      "Personal style explorations across different moods and aesthetics",
      "Ongoing personal project, 2023–2025",
    ],
    role: "Illustration, Character Design",
    tools: ["Procreate", "Adobe Photoshop"],
    images: [
      // ── Characters ────────────────────────────────────────────────────────
      { src: "/projects/illustrations/skater.png",        alt: "Indian skater girl",              span: "half",  label: "Characters" },
      { src: "/projects/illustrations/indian-portrait.png", alt: "Indian woman portrait",          span: "half" },
      { src: "/projects/illustrations/cat-sweater.png",   alt: "Woman in cat sweater",            span: "third" },
      { src: "/projects/illustrations/cat-hold.png",      alt: "Person holding orange cat",       span: "third" },
      { src: "/projects/illustrations/redhead-cat.png",   alt: "Redhead girl with black cat",     span: "third" },
      { src: "/projects/illustrations/portraits-sketch.png", alt: "Character portrait sketches",  span: "half" },
      { src: "/projects/illustrations/character.png",     alt: "Character illustration",          span: "half" },
      // ── Creatures & Fantasy ───────────────────────────────────────────────
      { src: "/projects/illustrations/green-hair.png",    alt: "Dark fantasy portrait",           span: "half",  label: "Creatures & Fantasy" },
      { src: "/projects/illustrations/green-hair-close.png", alt: "Dark fantasy close-up",        span: "half" },
      { src: "/projects/illustrations/fish-char.png",     alt: "Fish-headed character",           span: "third" },
      { src: "/projects/illustrations/cheivy.png",        alt: "Cheivy character",                span: "third" },
      { src: "/projects/illustrations/cats-water.png",    alt: "Mystical cats in water",          span: "third" },
      { src: "/projects/illustrations/starry-cat.png",    alt: "Starry green cat",                span: "half" },
      { src: "/projects/illustrations/floral.png",        alt: "Floral botanical illustration",   span: "half" },
      // ── Still Life & Other ────────────────────────────────────────────────
      { src: "/projects/illustrations/dinner.png",        alt: "Dinner Is Served",                span: "full",  label: "Still Life & Other" },
      { src: "/projects/illustrations/gummy1.png",        alt: "Gummy Boys — yellow",             span: "half" },
      { src: "/projects/illustrations/gummy2.png",        alt: "Gummy Boys — red",                span: "half" },
    ],
  },
  {
    slug: "personal-work",
    name: "Personal Work",
    category: "Illustrations & Posters",
    year: "2023–2025",
    color: "#1A1A1A",
    accent: "#FF2D78",
    textLight: true,
    emoji: "✏️",
    cover: "/projects/personal-work/punk-future-1.png",
    tags: ["Illustration", "Poster", "Personal"],
    brief:
      "A collection of personal illustrations and posters made outside of work — things I make just because I want to.",
    objective:
      "Create freely without briefs, deadlines, or stakeholders. Explore personal style, experiment with aesthetics, and make things that feel true.",
    concept:
      "No brief. No client. Just drawing and designing for the love of it — characters, moods, punk posters, and everything in between.",
    details: [
      "Digital illustrations made in Procreate",
      "Poster designs exploring typography and composition",
      "Personal style explorations across different aesthetics",
      "Ongoing personal project, 2023–2025",
    ],
    role: "Illustration, Poster Design",
    tools: ["Procreate", "Adobe Illustrator", "Adobe Photoshop"],
    images: [
      // ── Posters ──────────────────────────────────────────────────────────────
      { src: "/projects/personal-work/punk-future-1.png", alt: "Punk Future poster", span: "half", label: "Posters" },
      { src: "/projects/personal-work/punk-future-2.png", alt: "Punk Future poster variant", span: "half" },
      { src: "/projects/personal-work/poster-ai.png",     alt: "Poster design",     span: "half" },
      { src: "/projects/personal-work/instagram-post.png",alt: "Instagram poster",  span: "half" },
      // ── Illustrations ─────────────────────────────────────────────────────────
      { src: "/projects/personal-work/dinner-is-served.png", alt: "Dinner Is Served illustration", span: "full", label: "Illustrations" },
      { src: "/projects/personal-work/illus-01.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-02.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-03.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-04.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-05.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-06.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-07.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-08.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-09.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-10.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-11.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-12.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-13.png",  alt: "Digital illustration", span: "third" },
      { src: "/projects/personal-work/illus-14.png",  alt: "Digital illustration", span: "third" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : null,
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null,
  };
}
