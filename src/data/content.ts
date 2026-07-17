export interface TeamMember {
  name: string;
  role: string;
  school?: string;
  bio?: string;
  photo?: string;
}

export interface CaseStudy {
  category: string;
  title: string;
  summary: string;
  outcome: string;
}

export interface Article {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

// ────────────────────────────────────────
// SERVICES — edit titles, descriptions as needed
// ────────────────────────────────────────
export const services: Service[] = [
  {
    number: "01",
    title: "Competitive Intelligence",
    description:
      "Deep-dive analysis of your competitive landscape. We map positioning, pricing, product strategy, and go-to-market approaches so you can make informed decisions.",
  },
  {
    number: "02",
    title: "Market Entry Research",
    description:
      "Comprehensive research on new markets, segments, or geographies. We identify opportunities, barriers, key players, and the dynamics that will shape your entry strategy.",
  },
  {
    number: "03",
    title: "Acquisition Due Diligence",
    description:
      "Rigorous research to support M&A decisions. We evaluate targets across market positioning, competitive threats, customer perception, and growth potential.",
  },
  {
    number: "04",
    title: "Custom Research Projects",
    description:
      "Tailored research engagements scoped to your specific needs. From industry trend analysis to customer segmentation, we build the research around the question you need answered.",
  },
];

// ────────────────────────────────────────
// CASE STUDIES — replace with real engagements
// ────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    category: "Market Entry",
    title: "SaaS Expansion Into Southeast Asia",
    summary:
      "Mapped the competitive landscape across 4 countries for a B2B SaaS company evaluating regional expansion. Identified 3 underserved segments and recommended a phased entry strategy.",
    outcome: "Client entered the market 6 months ahead of plan",
  },
  {
    category: "Competitive Intelligence",
    title: "Enterprise Security Positioning Study",
    summary:
      "Conducted a 360-degree competitive analysis for an enterprise security startup, covering 12 direct competitors across pricing, feature parity, and customer sentiment.",
    outcome: "Repositioned product messaging, 40% increase in qualified leads",
  },
  {
    category: "Due Diligence",
    title: "Pre-Acquisition Target Assessment",
    summary:
      "Evaluated a potential acquisition target in the logistics-tech space. Assessed market position, customer base overlap, technology differentiation, and integration risks.",
    outcome: "Informed a successful acquisition at favorable terms",
  },
];

// ────────────────────────────────────────
// TEAM — replace names, roles, bios with real members
// ────────────────────────────────────────
export const leadership: TeamMember[] = [
  {
    name: "Vasu Garg",
    role: "Director",
    photo: "/team/vasu-garg.jpeg",
  },
  {
    name: "Ansh Gupta",
    role: "Vice President",
    photo: "/team/ansh-gupta.jpeg",
  },
];

export const associates: TeamMember[] = [
  {
    name: "Ayushman Srivastava",
    role: "Associate",
    photo: "/team/ayushman-srivastava.jpeg",
  },
  {
    name: "Aradhya Mishra",
    role: "Associate",
    photo: "/team/aradhya-mishra.jpeg",
  },
  {
    name: "Rohan GM",
    role: "Associate",
    photo: "/team/rohan-gm.jpeg",
  },
  {
    name: "Avin Makan",
    role: "Associate",
  },
];

// ────────────────────────────────────────
// INSIGHTS — replace with real articles
// ────────────────────────────────────────
export const articles: Article[] = [
  {
    date: "June 2026",
    category: "Policy Research",
    title: "India's Fiscal Federalism Under Strain",
    excerpt:
      "Centre-State transfers, devolution gaps, and the road to the 16th Finance Commission. A systematic analysis of GST-induced fiscal erosion, formula limitations, and six actionable reform recommendations.",
    readTime: "25 min read",
    slug: "fiscal-federalism",
    featured: true,
  },
  {
    date: "June 2026",
    category: "Market Analysis",
    title: "The Shifting Landscape of B2B SaaS in Emerging Markets",
    excerpt:
      "As enterprise software adoption accelerates in Southeast Asia and Latin America, B2B companies face a fundamentally different competitive environment. We break down the key dynamics shaping market entry strategies in 2026.",
    readTime: "8 min read",
    slug: "b2b-saas-emerging-markets",
  },
  {
    date: "May 2026",
    category: "Competitive Intelligence",
    title: "Why Most Competitive Analysis Misses the Point",
    excerpt:
      "Feature comparison matrices and pricing tables are table stakes. The real value in competitive intelligence lies in understanding positioning narratives, customer switching costs, and ecosystem lock-in.",
    readTime: "6 min read",
    slug: "competitive-analysis-done-right",
  },
  {
    date: "April 2026",
    category: "Due Diligence",
    title: "Five Red Flags in Pre-Acquisition Market Research",
    excerpt:
      "After supporting multiple M&A due diligence projects, we have identified recurring patterns that signal a target may be less attractive than initial metrics suggest.",
    readTime: "10 min read",
    slug: "acquisition-red-flags",
  },
  {
    date: "March 2026",
    category: "Industry Trends",
    title: "The Student Consulting Model: Why It Works for B2B Research",
    excerpt:
      "Student-led consulting organizations bring a unique combination of intellectual rigor, diverse perspectives, and cost efficiency to market research.",
    readTime: "5 min read",
    slug: "student-consulting-model",
  },
];

// ────────────────────────────────────────
// SITE CONFIG — update email, links
// ────────────────────────────────────────
export const siteConfig = {
  name: "Ridgeview Consulting",
  tagline: "Student-Led Market Intelligence",
  email: "hello@ridgeviewconsulting.in",
  domain: "ridgeviewconsulting.in",
  description:
    "Ridgeview Consulting delivers competitive intelligence and market research for B2B companies. 50+ student analysts across multiple colleges.",
};
