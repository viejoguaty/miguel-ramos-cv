export const PROFILE = {
  name: "Miguel Ramos",
  initials: "MR",
  title: "Senior Frontend / Web Developer",
  location: "Melbourne, VIC, Australia",
  email: "m.ramos.guaty@gmail.com",
  phone: "+61 403 747 520",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export type SkillGroup = {
  title: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "E-Commerce & CMS",
    skills: ["Shopify (Liquid)", "Drupal 7/8/9", "WordPress"],
  },
  {
    title: "Architecture & Workflow",
    skills: ["Git", "GitHub Actions", "REST APIs", "GraphQL", "Microservices", "Responsive UI"],
  },
  {
    title: "Testing & UI",
    skills: ["Unit / E2E Testing", "Adobe Creative Suite", "UI/UX Design"],
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  highlights: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Technical Data & Digital Records Controller",
    company: "Jetstar Airways",
    location: "Melbourne, Australia",
    period: "Jul 2023 - Present",
    summary:
      "Managing critical technical data and digital record systems while driving front-end tooling improvements for internal operations teams.",
    highlights: [
      "Built and maintained internal dashboards and data-entry tools improving record accuracy and workflow speed.",
      "Collaborated with cross-functional teams to translate operational requirements into clean, responsive interfaces.",
      "Applied strong data-integrity and QA practices to safety-critical digital records.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Zagalabs",
    location: "Colombia (Remote)",
    period: "Jul 2016 - Mar 2023",
    summary:
      "Led front-end development across SaaS and e-commerce products, architecting scalable component systems and mentoring junior developers.",
    highlights: [
      "Architected reusable React + TypeScript component libraries adopted across multiple client products.",
      "Delivered high-performance e-commerce storefronts with Shopify Liquid and headless React frontends.",
      "Integrated REST and GraphQL APIs, optimizing data-fetching and Core Web Vitals.",
      "Mentored developers and established code review, testing, and CI/CD standards.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "VML",
    location: "Colombia",
    period: "Nov 2013 - Jul 2016",
    summary:
      "Developed responsive marketing sites and web applications for enterprise clients, bridging design and engineering.",
    highlights: [
      "Built pixel-perfect, responsive interfaces from design comps leveraging a graphic design background.",
      "Implemented CMS-driven sites on Drupal and WordPress for large enterprise brands.",
      "Partnered closely with designers to ensure brand-accurate, accessible experiences.",
    ],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  demo: string
  repo: string
}

export const PROJECTS: Project[] = [
  {
    title: "Headless Commerce Storefront",
    description:
      "A blazing-fast headless e-commerce experience built on a Shopify backend with a custom React storefront, cart, and checkout flow.",
    tags: ["React", "TypeScript", "Shopify", "GraphQL", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "A responsive analytics dashboard with real-time charts, role-based access, and a themeable design system for a B2B SaaS platform.",
    tags: ["Next.js", "TypeScript", "REST APIs", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Enterprise Component Library",
    description:
      "A documented, accessible component library and design tokens system used across multiple internal enterprise applications.",
    tags: ["React", "TypeScript", "Storybook", "Testing"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Vue Marketing Platform",
    description:
      "A modular marketing site builder in Vue.js with CMS integration, letting non-technical teams ship landing pages independently.",
    tags: ["Vue.js", "JavaScript", "Drupal", "Responsive UI"],
    demo: "#",
    repo: "#",
  },
]
