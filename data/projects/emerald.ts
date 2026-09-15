import { CaseStudyProject } from "@/types/projects";

export const emerald: CaseStudyProject = {
  slug: "emerald",
  title: "EMERALD",
  subtitle: "High-Performance Natural Stone Catalog & Admin Ecosystem",
  
  description:
    "A commercial-grade, SEO-optimized stone catalog platform built for premium suppliers and fabrication showrooms to showcase marble, granite, and quartz collections alongside a secure, data-rich media management dashboard.",

  technologies: [
    "Next.js 16 (App Router)",
    "TypeScript",
    "Supabase (Database & Auth)",
    "Supabase Storage Buckets",
    "Tailwind CSS",
    "Next/Image Optimization",
    "Vercel Deployment",
  ],

  role: [
    "Owning the UI/UX Product Design, establishing a clean luxury-brand aesthetic optimized for multi-resolution high-fidelity stone imagery.",
    "Architecting full-stack server-side rendered (SSR) catalog structures integrating metadata, localized Arabic copy, and dynamic availability matrices.",
    "Engineering a secure media upload pipeline targeting Supabase Storage to seamlessly manage multiple heavy image files per item.",
    "Implementing strict performance enhancements via Next/Image architectures alongside targeted robots.txt route exclusions to optimize automated Lighthouse metrics.",
    "Designing and enforcing granular data safety protocols utilizing Supabase Row Level Security (RLS) layers to isolate administrative mutation endpoints securely.",
  ],

  isDemo: false,
  liveUrl: "https://emerald-granite-marble.vercel.app/", // Ready for production deployment tracking link

  githubUrl: "https://github.com/laithWatfa/Emerald-Granite-Marble",

  images: [
    {
      src: "/projects/emerald/hero.webp",
      alt: "Emerald Stone Gallery premium hero section",
    },
    {
      src: "/projects/emerald/products.webp",
      alt: "Emerald Stone Catalog Layout with Advanced Filtering Matrix",
    },
    {
      src: "/projects/emerald/product-details.webp",
      alt: "Premium Natural Stone High-Fidelity Showroom Product Page",
    },
    {
      src: "/projects/emerald/admin-dashboard.webp",
      alt: "Secure Emerald Administrative Inventory",
    },
    {
      src: "/projects/emerald/about.webp",
      alt: "Emerald Stone Gallery storytelling and company background view optimized for luxury brand clarity.",
    },
    {
      src: "/projects/emerald/contact.webp",
      alt: "Seamless commercial lead capture, business communication forms, and showroom location tracking mapping.",
    },
  ],
};
