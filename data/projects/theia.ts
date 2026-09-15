import { CaseStudyProject } from "@/types/projects";


export const theia : CaseStudyProject = {
  slug: "theia",
  title: "THEIA",
  subtitle: "Ophthalmology Management & AI Diagnostics Dashboard",
  
  // Elevating the description to highlight the technical complexity and impact
  description:
    "High-performance ophthalmology management platform engineered to orchestrate patient workflows, medical billing, and real-time interactive visualizations for AI-assisted fundus image diagnostics.",

  technologies: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Axios",
    "NextJS API Routes",
    "Next-Intl (i18n)",
  ],


  // Transformed standard feature names into clear technical achievements
  role: [
    "Owning the end-to-end Product Design, translating complex clinical user journeys into high-fidelity UI/UX wireframes and comprehensive dashboard layout systems.",
    "Architecting full-scale dashboard layout systems with integrated, production-ready RTL (Arabic) / LTR (English) localization toggle patterns.",
    "Implementing strict type safety structures across external medical records data models to ensure seamless design-to-code alignment.",
    "Crafting clean, accessible, and reusable component libraries optimized for high-density, data-heavy healthcare interfaces."
  ],
      isDemo: true,
      liveUrl: "https://your-live-demo.com",

    githubUrl: "https://github.com/laithWatfa/Theia",

  images: [
    {
      src: "/projects/theia/left.webp",
      alt: "Theia patients dashboard",
    },
    {
      src: "/projects/theia/main.webp",
      alt: "Theia dashboard",
    },
    {
      src: "/projects/theia/right.webp",
      alt: "Theia diagnosis dashboard",
    },
    {
      src: "/projects/theia/hero.webp",
      alt: "Theia Ophthalmology platform promotional welcome banner layout showcase.",
    },
    {
      src: "/projects/theia/login.webp",
      alt: "Secure multi-tenant clinical staff portal and gateway login validation canvas.",
    },
    {
      src: "/projects/theia/bills-ar.webp",
      alt: "Right-to-Left (RTL) localized Arabic dynamic medical invoice and accounting module.",
    },
    {
      src: "/projects/theia/treatments-ar.webp",
      alt: "Right-to-Left (RTL) localized Arabic clinical patient treatment pathway matrix tracker.",
    },
  ],

};

