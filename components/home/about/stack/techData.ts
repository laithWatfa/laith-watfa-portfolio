export type TechCategory = "frontend" | "backend" | "tools";

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiReactrouter,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiPrisma,
    SiSupabase,
    SiMysql,
    SiGit,
    SiFigma,
  SiPostman,
} from "react-icons/si";

import type { IconType } from "react-icons";

export type Tech = {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  icon: IconType;
  connections: string[];
};

export const technologies: Tech[] = [
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    description:
      "The foundation I use for building interactive web experiences.",
    icon: SiJavascript,
    connections: ["typescript", "react"],
  },

  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    description:
      "Type-safe development for more maintainable applications.",
    icon: SiTypescript,
    connections: [
      "javascript",
      "react",
      "nextjs",
    ],
  },

  {
    id: "react",
    name: "React",
    category: "frontend",
    description:
      "Component-driven interfaces with reusable UI architecture.",
    icon: SiReact,
    connections: [
      "javascript",
      "typescript",
      "nextjs",
    ],
  },

  {
    id: "react-router",
    name: "React Router",
    category: "frontend",
    description:
      "Client-side routing for React applications.",
    icon: SiReactrouter,
    connections: ["react"],
  },

  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    description:
      "My primary framework for building production-ready React applications.",
    icon: SiNextdotjs,
    connections: [
      "react",
      "typescript",
      "tailwind",
      "motion",
    ],
  },

  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    description:
      "Utility-first styling for responsive and consistent interfaces.",
    icon: SiTailwindcss,
    connections: [
      "nextjs",
      "motion",
    ],
  },

  {
    id: "motion",
    name: "Motion",
    category: "frontend",
    description:
      "The animation layer I use to create fluid and purposeful interactions.",
    icon: SiFramer,
    connections: [
      "nextjs",
      "tailwind",
    ],
  },

  {
    id: "prisma",
    name: "Prisma",
    category: "backend",
    description:
      "Type-safe database access and ORM for full-stack applications.",
    icon: SiPrisma,
    connections: ["supabase"],
  },

  {
    id: "supabase",
    name: "Supabase",
    category: "backend",
    description:
      "Backend services including database, authentication and storage.",
    icon: SiSupabase,
    connections: [
      "prisma",
      "mysql",
    ],
  },

  {
    id: "mysql",
    name: "MySQL",
    category: "backend",
    description:
      "Relational database technology for structured application data.",
    icon: SiMysql,
    connections: ["supabase"],
  },

  {
    id: "git",
    name: "Git",
    category: "tools",
    description:
      "Version control and project history management.",
    icon: SiGit,
    connections: [
      "figma",
      "postman",
    ],
  },

  {
    id: "figma",
    name: "Figma",
    category: "tools",
    description:
      "Interface design, prototyping and visual systems.",
    icon: SiFigma,
    connections: ["git"],
  },

  {
    id: "postman",
    name: "Postman",
    category: "tools",
    description:
      "API testing and development workflow.",
    icon: SiPostman,
    connections: ["git"],
  },
];