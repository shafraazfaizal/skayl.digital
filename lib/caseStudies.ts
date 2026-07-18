export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  deliveredBy: string;
  year: string;
  headline: string;
  colours: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  stats: { value: string; label: string }[];
  challenge: { title: string; body: string };
  problems: string[];
  built: { no: string; title: string; body: string }[];
  quote: { text: string; author: string };
  outcomes: string[];
  stack: { area: string; detail: string }[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "jma-uk": {
    slug: "jma-uk",
    client: "Jaffna Muslim Association UK",
    sector: "Charity / Non-Profit",
    deliveredBy: "SKAYL",
    year: "2025 – 2026",
    headline:
      "Digital transformation for a UK charity serving the Jaffna Muslim community.",
    colours: {
      primary: "#0D5C6B",
      secondary: "#073D47",
      accent: "#C9A84C",
      background: "#0D2B1A",
    },
    stats: [
      { value: "£2.4M+", label: "Raised for Jaffna" },
      { value: "200+", label: "Projects Documented" },
      { value: "7", label: "Admin Modules Built" },
      { value: "20+", label: "Years of History Told" },
    ],
    challenge: {
      title:
        "A community with two decades of impact — and no digital presence to show for it.",
      body: "The Jaffna Muslim Association has operated in the UK since 2002, raising over £2.4 million for communities in northern Sri Lanka. Despite this track record, JMA had no website capable of telling that story, accepting online donations, or letting their team publish updates without a developer. Their digital presence was holding back their fundraising potential and making it harder to connect with a younger UK diaspora audience.",
    },
    problems: [
      "No online donation capability — donors had to make bank transfers manually.",
      "No content management — any update required a developer.",
      "No campaign transparency — donors couldn't track where their money was going.",
      "No community archive — 22 years of projects and history existed only in documents and institutional memory.",
      "Brand inconsistency — no defined visual identity across social, email, and print.",
    ],
    built: [
      {
        no: "01",
        title: "Website Design & Development",
        body: "A fully custom Next.js 15 website — not a template. Built from the ground up with animated navigation, 15+ pages, mobile-first design, and WCAG-compliant accessibility.",
      },
      {
        no: "02",
        title: "Donation Platform",
        body: "Stripe-powered giving with Islamic donation categories (Zakat, Sadaqah, Lillah, Qurbani, Fitrana), preset amounts with contextual impact equivalents, Gift Aid support, and a branded confirmation experience.",
      },
      {
        no: "03",
        title: "Content Management System",
        body: "A purpose-built admin dashboard with 7 content modules — Campaigns, News & Newsletter, Blog, Events, Impact Stories, Gallery, and Announcements — so the JMA team can update everything themselves without touching code.",
      },
      {
        no: "04",
        title: "Gallery with Video Support",
        body: "Photo albums with multi-image upload and in-browser lightbox navigation, plus YouTube video integration with auto-fetched thumbnails — zero storage cost for video content.",
      },
      {
        no: "05",
        title: "Database & Infrastructure",
        body: "Supabase for database, authentication, and file storage. Vercel for hosting with branch-based deployment. Full DNS configuration and SSL auto-provisioned.",
      },
      {
        no: "06",
        title: "Heritage & Copywriting",
        body: "Full editorial history page covering seven eras of Jaffna Muslim heritage — from 7th century Arab trade origins to JMA's work today. All content researched, written, and delivered to JMA's secretary for community review before publication.",
      },
    ],
    quote: {
      text: "It's professional — it actually works for our community. Our team can publish campaigns and news without any technical knowledge, and it reflects our Islamic values. Alhamdulillah, we're very pleased with what has been delivered.",
      author: "Secretary, Jaffna Muslim Association UK",
    },
    outcomes: [
      "Online donations enabled — JMA can now accept donations 24/7 from anywhere in the world.",
      "Full editorial independence — the JMA team can publish campaigns, news, events, and gallery content without any developer involvement.",
      "Campaign transparency — every active campaign has its own public page with progress tracking and a direct donate button.",
      "Community archive live — 22 years of impact stories and project history are publicly documented for the first time.",
      "Professional brand presence — consistent visual identity across every touchpoint, positioning JMA as a credible modern charity.",
      "Infrastructure for growth — built to scale, new campaigns and content types can be added without rebuilding from scratch.",
    ],
    stack: [
      { area: "Frontend", detail: "Next.js 15 · TypeScript · Tailwind CSS · Framer Motion" },
      { area: "Backend", detail: "Supabase (PostgreSQL + Auth + Storage) · Next.js Server Actions" },
      { area: "Payments", detail: "Stripe (PaymentIntent API · Sandbox + Live ready)" },
      { area: "Email", detail: "Resend (transactional email infrastructure)" },
      { area: "Hosting", detail: "Vercel (branch-based deployment · auto SSL)" },
      { area: "Design", detail: "Custom design system · Plus Jakarta Sans · Inter · Noto Serif Display" },
    ],
  },
};
