export const PROFILE = {
  name: "Miguel Ramos",
  initials: "MR",
  title: "Senior Frontend / Web Developer",
  location: "Melbourne, VIC, Australia",
  email: "m.ramos.guaty@gmail.com",
  phone: "+61403747520",
  github: "https://github.com/viejoguaty",
  linkedin: "https://www.linkedin.com/in/miguelramosg",
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
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "Vue.js", "Tailwind CSS", "AngularJS", "Boostrap", "Material UI"],
  },
  {
    title: "E-Commerce & CMS",
    skills: ["Shopify (Liquid)", "Drupal 7/8/9", "WordPress", "Joomla"],
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
      "Architected reusable React + TypeScript component libraries and dynamic import structures adopted across multiple client products.",
      "Delivered high-conversion e-commerce storefronts and custom purchasing flows using Shopify Liquid, Theme Kit, and Sass.",
      "Modernized legacy web applications by refactoring AngularJS architectures into modular ReactJS microservices environments.",
      "Integrated REST APIs (GET, POST, PUT) and asynchronous AJAX data flows, optimizing data handling across hybrid application platforms.",
      "Established testing standards by implementing end-to-end (E2E) and component-level unit testing to ensure high software reliability."
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
    title: "Grassrootscoop",
    description:
      "Grass Roots Farmers' Cooperative is a farmer-owned e-commerce site built on Shopify Plus that delivers pasture-raised, 100% regenerative meats directly to consumers.",
    tags: ["Shopify", "Vanilla Js", "Tailwind", "Shopify Liquid"],
    demo: "https://grassrootscoop.com/",
    repo: "",
  },
  {
    title: "Puppyspot",
    description:
      "PuppySpot is an online marketplace connecting vetted dog breeders with prospective owners across the US, it's built with React and JavaScript, running on Node.js with server-side technologies like PHP and Go, integrated with modern cloud infrastructure and API services.",
    tags: ["VanillaJs", "ReactJS", "TypeScript", "REST APIs"],
    demo: "https://www.puppyspot.com/",
    repo: "",
  },
  {
    title: "Todaytix",
    description:
      "It is a ticket discovery and booking platform for theater, musicals, and live events. Its web app is built using Next.js (React Framework), React, TypeScript, GraphQL, Node.js APIs, and Tailwind CSS on the frontend.",
    tags: ["React", "TypeScript", "Storybook", "Testing"],
    demo: "https://www.todaytix.com/",
    repo: "",
  },
  {
    title: "White&Case",
    description:
      "This is the official page for global law firm White & Case LLP (Melbourne office), providing corporate legal services in M&A, finance, and arbitration.  Built using JavaScript, HTML5/CSS3, and typically powered by Drupal (PHP)",
    tags: ["JavaScript", "Drupal", "Responsive UI"],
    demo: "https://www.whitecase.com/",
    repo: "",
  },
  {
    title: "Encyclopedia",
    description:
      "A modular marketing site builder in JavaScript with CMS integration, letting non-technical teams ship landing pages independently.",
    tags: ["JavaScript", "Drupal", "Responsive UI"],
    demo: "https://www.encyclopedia.com/",
    repo: "",
  },
]
