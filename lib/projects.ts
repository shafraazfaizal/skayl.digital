// Central content source for the SKAYL site — mirrors the Framer project.

export const nav = {
  links: [
    { label: "Works", href: "/works" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  cta: { label: "Contact", href: "/contact" },
};

export const tickerWords = [
  "Brand Design",
  "Web Development",
  "Photography",
  "Videography",
  "Content Creation",
  "Logo Design",
  "E-commerce",
  "SaaS Platforms",
  "Social Media Design",
];

export type Service = {
  title: string;
  tags: string[];
  description: string;
  price: string;
  timeline: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Web Development",
    tags: ["Business Websites", "SaaS Platforms", "E-commerce", "Web Applications"],
    description:
      "From landing pages to full SaaS platforms — engineered for performance and built to grow. Every build is custom, mobile-first, and SEO-ready from the ground up. No templates, no shortcuts.",
    price: "Contact for pricing",
    timeline: "2–8 weeks depending on scope",
    image: "/services/web-development.png",
  },
  {
    title: "Branding & Design",
    tags: ["Brand Identity", "Logo & Wordmark", "Social Media Design", "Marketing Assets"],
    description:
      "Visual identity systems that hold together across every touchpoint — from logo to UI. We don't design logos in isolation. We build the full system your brand needs to stay consistent as it grows.",
    price: "Contact for pricing",
    timeline: "2–4 weeks depending on scope",
    image: "/services/branding-design.png",
  },
  {
    title: "Content & Media",
    tags: ["Product Photography", "Videography", "Video Editing", "Social Content"],
    description:
      "Photography, video, and content built to the same standard as the brand it represents. Our content is storytelling-led and visually purposeful — produced without music, using cinematic visuals, professional voiceovers, authentic ambient sound, and thoughtful editing.",
    price: "Contact for pricing",
    timeline: "By project",
    image: "/services/content-media.png",
  },
  {
    title: "Event Management",
    tags: ["Planning & Direction", "Photography & Video Coverage", "Post-Event Content"],
    description:
      "A premium add-on for clients who want full creative direction on the day — planning, on-the-day coverage with photography and video, and post-event content delivered and ready to publish.",
    price: "Premium Add-On",
    timeline: "By request",
    image: "/services/event-management.png",
  },
];

export const principlesTeaser = [
  "Excellence",
  "Integrity",
  "Creativity with Purpose",
  "Innovation",
  "Client Partnership",
];

export const principles = [
  {
    name: "Excellence",
    body: "We pursue excellence in every aspect of our work — combining creativity, technical skill, and strategic thinking to deliver outcomes that exceed expectations. Good enough is never good enough.",
  },
  {
    name: "Integrity",
    body: "We believe in honest communication, full transparency, and long-term relationships built on trust. We tell clients what they need to hear — not just what they want to hear.",
  },
  {
    name: "Creativity with Purpose",
    body: "Every design, interaction, and piece of content should serve a meaningful purpose. We create experiences that are visually compelling and strategically sound — beauty that works.",
  },
  {
    name: "Innovation",
    body: "We embrace modern technologies, forward-thinking design, and continuous learning. We build for where your business is going — not just where it is today.",
  },
  {
    name: "Client Partnership",
    body: "We view every client as a long-term partner. Our goal is not simply to complete projects — it is to contribute to the sustained growth and success of the businesses we work with.",
  },
];

export const creativePrinciple = {
  eyebrow: "What Makes Us Different",
  title: "Our Creative Principle",
  paragraphs: [
    "At SKAYL, our work is guided by Islamic values that shape how we approach creativity and content production. One of these principles is our commitment to producing content without the use of music. This decision reflects our values and remains consistent across every project we undertake.",
    "SKAYL proudly serves businesses, organisations, and individuals from all backgrounds, industries, and communities. Our commitment to this principle does not change who we work with — it defines how we create.",
    "Rather than relying on music, we focus on powerful storytelling, cinematic visuals, professional voiceovers, authentic ambient sound, carefully designed sound effects, thoughtful pacing, and purposeful editing to create engaging content that connects without compromise.",
    "These principles are not limitations — they are part of what makes SKAYL distinctive and authentic.",
  ],
};

export const founders = [
  {
    role: "Co-Founder — Dev & Design",
    bio: "Full-stack developer and digital designer focused on building fast, functional web experiences. He works with startups, charities, and businesses to build standout brands and seamless digital products — from SaaS platforms to e-commerce stores. Based in the UK.",
    timeline: [
      { title: "Co-Founder at SKAYL", years: "2025–Now" },
      {
        title: "BSc AI & Robotics — University of Hull",
        years: "2021–2025",
      },
      { title: "Technology Developer — Barclays", years: "2025–Now" },
    ],
  },
  {
    role: "Co-Founder — Creative & Production",
    bio: "Visual creative specialising in graphic design, videography, and photography. Crafts brand identities, social content, and reels that convert — built to the same standard as the brand they represent.",
    timeline: [
      { title: "Graphic Designer — AutoVive", years: "2023–2024" },
      { title: "Brand Designer — Shajara Tea", years: "2023–2024" },
      { title: "Social Media Content — ZeroExcuses Gym", years: "Now" },
      { title: "Creative Director — SKAYL", years: "2024–Now" },
    ],
  },
];

export const faqs = [
  {
    q: "Why choose SKAYL instead of a full-time designer?",
    a: "A full-time designer gives you one skill set. SKAYL gives you a complete team — development, design, branding, photography, and video — without the overhead of multiple salaries, contracts, or coordination. You get more capability, more flexibility, and one point of contact.",
  },
  {
    q: "How long does a project take?",
    a: "A focused landing page or brand identity is typically 2–3 weeks. A full website with branding and content is 4–8 weeks. Larger builds are scoped individually. We always give you a realistic timeline before starting — not a number designed to win the brief.",
  },
  {
    q: "How many revisions are included?",
    a: "We don't cap revisions artificially. We work with you until the output is right. In practice, our process is thorough enough that most projects land in 2–3 rounds — but we're not counting.",
  },
  {
    q: "Why isn't your work delivered in 24–48 hours like some others?",
    a: "Because good work takes time. Anyone promising 24-hour turnarounds is using a template. We take time to understand your business first — which is exactly why the end result holds together.",
  },
  {
    q: "What if I don't like the design?",
    a: "Then we go again. We present concepts with clear reasoning, take feedback seriously, and iterate until it's right. We've never delivered a project a client wasn't happy with.",
  },
  {
    q: "Are there any refunds?",
    a: "We don't offer refunds on completed work, but we offer honesty upfront. If we don't think we're the right fit, we'll tell you before we start — not after. That's what the discovery call is for.",
  },
  {
    q: "What's the SKAYL process like?",
    a: "Discover → Design → Build → Launch → Grow. We understand your business first, lock in the creative direction, build everything in parallel, ship with care, and stay embedded afterwards. No handoffs, no radio silence, no surprises.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We're based in the UK with an active presence in Sri Lanka, and we work with clients across both markets and beyond. Time zones have never been an obstacle — and they never will be.",
  },
];

export const pricing = {
  eyebrow: "Pricing",
  title: "Priced around your project.",
  body: "Every business is different. We don't publish fixed packages because we don't do off-the-shelf work. Tell us what you need and we'll give you a clear, honest quote — no obligation, no pitch deck.",
  cta: { label: "Get a Quote →", href: "/contact" },
};

export type Work = {
  slug: string;
  title: string;
  page: string;
  year: string;
  role: string;
  services: string[];
  description: string;
  cover: string;
  glow: string; // brand glow colour behind the card mockup
  tint: string; // card base tint (deep, near-black brand shade)
  cardBg?: string; // full-bleed cinematic background image for the listing card
  category?: string; // editorial category label on the cinematic card
  subtitle?: string; // supporting subtitle under the title on the cinematic card
  cardLede?: string[]; // editorial description paragraphs for the cinematic card
  heroVideo?: string; // optional video hero for the case study page
  heroPoster?: string; // poster/first-frame for the hero video
};

export const works: Work[] = [
  {
    slug: "jma-uk",
    title: "JMA UK",
    page: "01 / 05",
    year: "2025–2026",
    role: "Lead Developer & Designer",
    services: [
      "Website Design",
      "Donation Platform",
      "Content Management",
      "Brand Identity",
    ],
    description:
      "Not every project is about profit. We built the JMA website at no cost — because some causes are worth more than any invoice.",
    cover: "/work/jma/hero.png",
    cardBg: "/images/project-card-bg/jma-card-bg.png",
    category: "Charity / Non-Profit",
    subtitle: "A digital home for community impact",
    cardLede: [
      "Not every project is about profit.",
      "We built JMA’s digital home at no cost — because some causes are worth more than any invoice.",
    ],
    glow: "#0D5C6B",
    tint: "#0D2B1A",
  },
  {
    slug: "framed-splendor",
    title: "Framed Splendor",
    page: "02 / 05",
    year: "2024–2025",
    role: "Lead Developer & Designer",
    services: [
      "E-commerce Development",
      "Brand Identity",
      "Logo Design",
      "Social Media Design",
    ],
    description:
      "A premium LED mirror brand built from zero — website, brand identity, logo, and social content, all delivered by one team.",
    cover: "/work/framed-splendor/hero.png",
    glow: "#1E4E7A",
    tint: "#0B1F3A",
  },
  {
    slug: "zero-excuses",
    title: "Zero Excuses",
    page: "03 / 05",
    year: "2024",
    role: "Content & Social",
    services: ["Social Content", "Videography", "Reels", "Brand Design"],
    description:
      "High-energy gym content built to convert — reels, brand design, and social that actually moves people.",
    cover: "/work/zeroexcuses/web/hero.jpg",
    cardBg: "/images/project-card-bg/zeroexcuses-card-bg.PNG",
    category: "Fitness / Social Content",
    subtitle: "Content built to stop the scroll",
    cardLede: [
      "High-energy content, built to convert.",
      "Reels, brand design, and social that actually move people — not just look good.",
    ],
    heroVideo: "/work/zeroexcuses/web/hero.mp4",
    heroPoster: "/work/zeroexcuses/web/hero.jpg",
    glow: "#5C1D0B",
    tint: "#14100E",
  },
  {
    slug: "autovive",
    title: "AutoVive",
    page: "04 / 05",
    year: "2023–2024",
    role: "Brand Designer & Creative Director",
    services: [
      "Logo Design",
      "Brand Identity",
      "Social Media Design",
      "Pitch Deck",
      "Uniform Design",
    ],
    description:
      "A 360° brand ecosystem for Sri Lanka's first fully digital mobile car wash — built to raise capital and win customers.",
    cover: "/work/autovive/posts/1.png",
    cardBg: "/images/project-card-bg/autovive-card-bg.png",
    category: "Automotive / Startup",
    subtitle: "A 360° brand, built from zero",
    cardLede: [
      "A utility, reimagined as a premium brand.",
      "Sri Lanka’s first fully digital mobile car wash — with a 360° identity built to raise capital and win customers.",
    ],
    glow: "#0A5C8C",
    tint: "#06111A",
  },
  {
    slug: "shajara-tea",
    title: "Shajara Tea",
    page: "05 / 05",
    year: "2023–2024",
    role: "Brand Designer & Creative Director",
    services: [
      "Logo Design",
      "Brand Identity",
      "Packaging Design",
      "Product Photography",
      "Social Media Posts",
      "Reels",
    ],
    description:
      "Complete branding kit for a premium Ceylon tea brand targeting the Middle East — from packaging to reels, all in one visual language.",
    cover: "/work/shajara/posts/1.jpg",
    glow: "#3A6B2A",
    tint: "#070F07",
  },
];

export const footer = {
  columns: [
    {
      heading: "Navigation",
      links: [
        { label: "About", href: "/about" },
        { label: "Works", href: "/works" },
        { label: "Services", href: "/services" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      heading: "Social",
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/skayl.io/?utm_source=ig_web_button_share_sheet",
          external: true,
        },
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
      ],
    },
    {
      heading: "Legals",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Term of Service", href: "/terms-and-conditions" },
      ],
    },
  ],
};

export const processSteps = [
  { no: "01", name: "Discover", body: "We learn your business, your audience, and what success actually looks like — before touching any tools." },
  { no: "02", name: "Design", body: "Creative direction locked in first. Every concept presented with clear reasoning so every decision has a purpose behind it." },
  { no: "03", name: "Build", body: "Development, content, and brand run in parallel — not sequentially. Faster output, tighter consistency, no waiting on handoffs." },
  { no: "04", name: "Launch", body: "Shipped with care. Performance, accessibility, and SEO handled — with a smooth handover your team can actually run." },
  { no: "05", name: "Grow", body: "We stay embedded after launch. Ongoing support, content, and iteration as you scale — no radio silence, no surprises." },
];

export const whyUs = [
  { title: "Fully in-house. Every time.", body: "Design, dev, and content built by us — not managed by us and built by someone else. When we say in-house, we mean it." },
  { title: "One point of contact. One accountable team.", body: "You talk directly to the people doing the work. No account-manager layers, no lost context, no finger-pointing." },
  { title: "Built for your brand — not from a template.", body: "Every project is made to measure. We take time to understand your business before we open Figma or write a line of code." },
  { title: "Honest before we start — and after.", body: "If we're not the right fit, we'll tell you before we start — not after you've paid a deposit. Every project begins with a discovery call precisely for this reason." },
  { title: "UK quality. Global reach.", body: "Based in the UK with an active presence in Sri Lanka. We work with clients across both markets and beyond — time zones have never been an obstacle." },
];

// Animated stat counters for the testimonials section.
export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Brands Served" },
  { value: 100, suffix: "%", label: "In-House Delivery" },
  { value: 2.4, prefix: "£", suffix: "M+", label: "Raised Through Platforms We Built", decimals: 1 },
];

export const testimonials = [
  {
    quote:
      "It's professional — it actually works for our community. Our team can publish campaigns and news without any technical knowledge, and it reflects our Islamic values. Alhamdulillah, we're very pleased with what has been delivered.",
    author: "Secretary",
    role: "Jaffna Muslim Association UK",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  },
  {
    quote:
      "SKAYL understood the brand before we could even explain it. The identity they delivered feels timeless — every touchpoint finally speaks the same language.",
    author: "Founder",
    role: "Framed Splendor",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  },
  {
    quote:
      "The reels hit different. Our engagement doubled and sign-ups followed — content that actually moves people, not just looks good.",
    author: "Owner",
    role: "Zero Excuses Gym",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "why-we-dont-promise-24-hour-turnarounds",
    title: "Why we don’t promise 24-hour turnarounds",
    excerpt:
      "Fast is easy to sell and hard to defend. Here’s how we think about speed versus substance.",
    date: "2026",
    tag: "Process",
    body: [
      "Agencies promising 24-hour turnarounds are usually reaching for a template. That’s fine for some things — but it’s not how you build something made for a specific brand.",
      "We take the time to understand your business first. That upfront work — the discovery call, the brief, the questions most studios skip — is exactly why the end result holds together. The design has a reason, the copy has a voice, and the build is something your team can actually run.",
      "Speed still matters. A focused landing page or brand identity is typically 2–3 weeks with us. But we quote a realistic timeline, not a number designed to win the brief. We’d rather lose a project to someone faster than deliver something that doesn’t hold.",
    ],
  },
  {
    slug: "building-a-donation-platform-that-respects-its-donors",
    title: "Building a donation platform that respects its donors",
    excerpt:
      "What we learned building Islamic giving flows for a UK charity — and why transparency won.",
    date: "2026",
    tag: "Case Notes",
    body: [
      "When we built the JMA UK platform, the donation flow had to do more than take payments. It had to reflect the values of a community that has been giving generously for over 20 years — and make every pound traceable.",
      "We built Islamic giving categories — Zakat, Sadaqah, Lillah, Qurbani, Fitrana — with preset amounts tied to real impact equivalents, Gift Aid support, and a branded confirmation experience that feels worthy of the cause.",
      "The lesson: transparency is a feature. Every active campaign gets its own public page with progress tracking, so donors always know where their money is going. That’s not just good design — it’s the right way to build for trust.",
    ],
  },
  {
    slug: "a-brand-system-is-a-promise-not-a-logo",
    title: "A brand system is a promise, not a logo",
    excerpt:
      "Consistency across every touchpoint is what turns a new studio into a credible one.",
    date: "2025",
    tag: "Branding",
    body: [
      "A logo is the smallest part of a brand. The system — type, colour, spacing, tone of voice — is what people actually feel across a website, an email, a social post, and a printed label.",
      "Consistency is credibility. When every touchpoint agrees, a new organisation reads as an established one. When they don’t, even a beautiful logo can’t save you.",
      "That’s why we deliver systems, not just marks. Colour tokens, typography scales, spacing rules, usage guidelines — so the brand still holds together long after the launch, regardless of who’s using it.",
    ],
  },
  {
    slug: "why-we-produce-content-without-music",
    title: "Why we produce content without music — and why it makes us better",
    excerpt:
      "Our commitment to music-free content isn’t a limitation. It’s what forces us to be more intentional about everything else.",
    date: "2025",
    tag: "Creative Principle",
    body: [
      "When most people think about video content, music is the first thing they reach for. A track sets the mood, fills the silence, and — if we’re honest — does a lot of the emotional heavy lifting so the visuals don’t have to.",
      "At SKAYL, we don’t use music. This is a principle rooted in our Islamic values, and it applies consistently across every project we produce.",
      "What it means in practice is that we have to work harder. Every reel, every brand video, every social clip has to earn its engagement through storytelling, pacing, cinematic visuals, purposeful editing, and authentic sound design. We can’t lean on a trending track to carry the emotion — so we build it into the content itself.",
      "The result is content that connects differently. It doesn’t date. It doesn’t compete with a song people are sick of by next month. It holds its own.",
      "Our clients have seen strong organic reach from content produced this way — not in spite of the no-music approach, but because of the intentionality it demands.",
      "These principles are not limitations. They are the reason the work is better.",
    ],
  },
];

export type Reel = { id: string; src: string; poster: string };

export const reels: Reel[] = [
  { id: "r1", src: "/work/zeroexcuses/web/reel-1.mp4", poster: "/work/zeroexcuses/web/reel-1.jpg" },
  { id: "r2", src: "/work/zeroexcuses/web/reel-2.mp4", poster: "/work/zeroexcuses/web/reel-2.jpg" },
  { id: "r3", src: "/work/zeroexcuses/web/reel-3.mp4", poster: "/work/zeroexcuses/web/reel-3.jpg" },
  { id: "r4", src: "/work/zeroexcuses/web/reel-4.mp4", poster: "/work/zeroexcuses/web/reel-4.jpg" },
  { id: "r5", src: "/work/zeroexcuses/web/reel-5.mp4", poster: "/work/zeroexcuses/web/reel-5.jpg" },
  { id: "r6", src: "/work/zeroexcuses/web/reel-6.mp4", poster: "/work/zeroexcuses/web/reel-6.jpg" },
];

// The daily toolset — shown on the About page.
export type Tool = { name: string; category: string; description: string };

export const toolsStack: Tool[] = [
  { name: "Next.js", category: "Development", description: "The foundation of every website we build. Fast, scalable, and production-ready by default." },
  { name: "Figma", category: "Design", description: "Where every visual idea starts — brand systems, UI flows, and prototypes." },
  { name: "Framer", category: "Web & Prototyping", description: "High-fidelity prototypes and visually rich websites that go beyond templates." },
  { name: "Supabase", category: "Backend", description: "Database, auth, and storage. Open-source and built for speed." },
  { name: "CapCut Pro", category: "Video Editing", description: "Our primary editing suite for reels, brand videos, and social content — cinematic output without music." },
  { name: "Notion", category: "Productivity", description: "Every project brief, content plan, and delivery timeline lives here — transparent and organised." },
  { name: "Stripe", category: "Payments", description: "Integrated into every e-commerce and donation platform we build." },
  { name: "Resend", category: "Email", description: "Transactional email infrastructure for every web product we ship." },
];
