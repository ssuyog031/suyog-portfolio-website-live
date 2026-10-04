// ------------------------------------------------------------------
// All editable site content lives here. Update this file and the
// components below will pick up the changes automatically — you
// should not need to touch component code to update text.
// ------------------------------------------------------------------

export const profile = {
  name: "Suyog Suryawanshi",
  role: "Frontend Developer",
  location: "Pune, Maharashtra, India",
  email: "suyogss031@gmail.com",
  phone: "+91 78419 34373",
  linkedinHandle: "suyog-suryawanshi",
  linkedinUrl:
    "https://www.linkedin.com/in/suyog-suryawanshi-833877103/",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Frontend Developer — Pune, Maharashtra, India",
  headline: "I build interfaces that hold up under real usage.",
  subtext:
    "4+ years designing and shipping React.js applications that stay fast and clear even at national scale — clean UI, solid accessibility, and frontend architecture that's easy to maintain.",
  primaryCta: { label: "See the work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  stats: [
    { value: "4+", label: "Years in production frontend" },
    { value: "25%", label: "Faster load times delivered" },
    { value: "30%", label: "Reduction in shipped defects" },
    { value: "70–80%", label: "Faster development with AI tools" },
  ],
  snippet: [
    "const dev = {",
    "  name: 'Suyog Suryawanshi',",
    "  role: 'Frontend Developer',",
    "  stack: ['React', 'JavaScript','TypeScript'],",
    "  focus: ['performance', 'accessibility'],",
    "  status: 'open to new work',",
    "};",
  ],
};

export const about = {
  paragraphs: [
    "I'm a frontend developer focused on building scalable, high-performance applications with React.js, TypeScript, and Redux. Most of my work sits at the intersection of large user bases and small margins for error — the kind of product where a slow interaction or a broken flow reaches millions of people, not thousands.",
    "At LTIMindtree I work on ABHA and the ABDM Core Website for India's National Health Authority, partnering closely with design and backend teams to keep the interface fast, accessible, and stable through constant iteration. Earlier roles at DigiWill and Benchmark IT gave me ownership of frontend builds end to end, from first component to production release.",
    "I've also been folding AI-assisted tooling — GitHub Copilot, Claude, and prompt engineering — into day-to-day development, which has cut the time I spend on routine implementation work by roughly 70–80% without giving up code quality or review rigor.",
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Sass",
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      "Unit Testing",
      "Integration Testing",
      "Performance Testing",
      "Chrome DevTools",
      "Postman",
      "Git",
      "GitHub",
      "npm",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Practices",
    skills: [
      "UI/UX Design",
      "Debugging",
      "Cross-Browser Compatibility",
      "Agile/Scrum",
      "Performance Optimization",
      "Code Splitting",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "AI & Dev Tools",
    skills: [
      "GitHub Copilot",
      "Prompt Engineering",
      "Claude AI",
      "ChatGPT",
      "AI-assisted Code Review",
      "AI-assisted Testing",
    ],
  },
];

export const experience = [
  {
    period: "Apr 2023 — Present",
    title: "Product Engineer",
    org: "LTM Limited (formerly known as LTIMindtree Limited and L&T Infotech",
    meta: "Client: National Health Authority (ABDM)",
    points: [
      "Built and supported ABHA (Ayushman Bharat Health Account) and the ABDM Core Website, used by millions across India.",
      "Developed interfaces in React.js with a focus on performance, responsiveness, and accessibility.",
      "Partnered with design and backend teams to deliver smooth, coherent user experiences.",
      "Improved UI components, fixed bugs, and optimized code for speed and usability.",
      "Maintained daily client communication and stayed aligned with Agile delivery goals.",
    ],
  },
  {
    period: "May 2022 — Jan 2023",
    title: "Front End Developer",
    org: "DigiWill · Servfar Services Pvt Ltd, Pune",
    meta: null,
    points: [
      "Built the official website for DigiWill, an AI-powered estate planning platform covering asset discovery, nominee management, and communication tools.",
      "Owned frontend development independently using React.js.",
      "Worked closely with the UI/UX team to implement clean, responsive designs.",
    ],
  },
  {
    period: "Oct 2021 — Mar 2022",
    title: "UI Developer",
    org: "Benchmark IT Solution",
    meta: null,
    points: [
      "Learned the fundamentals of React.js and UI development, building clean, user-friendly interfaces.",
      "Learned and applied UI/UX fundamentals.",
      "Focused on clean and user-friendly web interfaces."
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering, Information Technology",
  school: "METs Institute of Engineering, Bhujbal Knowledge City, Nashik",
  university: "Pune University",
};

export const certifications = [
  { title: "GitHub Copilot Certification", issuer: "GitHub" },
  { title: "Claude Certified Developer — Foundation", issuer: "Anthropic" },
];

export const projects = [
  {
    title: "ABHA — Ayushman Bharat Health Account",
    description:
      "National digital health ID platform. Contributed to interface development focused on performance and accessibility at population scale.",
    url: "https://abha.abdm.gov.in/abha/v3",
  },
  {
    title: "ABDM Core Website",
    description:
      "Public-facing site for the Ayushman Bharat Digital Mission, India's national digital health infrastructure.",
    url: "https://abdm.gov.in/",
  },
  {
    title: "ABDM Grievance Portal",
    description:
      "UI development for the grievance-handling portal supporting ABDM users.",
    url: "https://grievance.abdm.gov.in/",
  },
  {
    title: "DigiWill",
    description:
      "AI-powered estate planning platform — asset discovery, nominee management, and communication tools. Owned the frontend build.",
    url: "https://digiwill.in/",
  },
];
