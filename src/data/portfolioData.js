export const DATA = {
  name: "Upendra Khadka",
  nameSlug: "upendra.",
  available: true,

  tagline: ["Creative", "Developer", "& Maker"],
  heroStats: [
    { num: "2+", label: "Years building",               color: "#c8f135" },
    { num: "12", label: "Projects shipped",             color: "#b8e8ff" },
    { num: "NP", label: "Based in NP, remote-friendly", color: "#ffb5d0" },
  ],

  bio: [
    "I'm Upendra Khadka, a full-stack developer with a creative obsession. I build digital products that sit at the edge of what's technically interesting and what feels genuinely beautiful to use.",
    "My stack spans React frontends, Node backends, and everything in between — but I care just as much about the micro-interactions, the typography, and the moments that make someone smile while using something I built.",
  ],
  quote: '"I don\'t separate engineering from design. The best experiences are both."',
  chips: [
    { label: "Full-Stack Dev",  cls: "bg-lime-400/10  text-lime-400  border border-lime-400/20"  },
    { label: "Creative Coder", cls: "bg-orange-400/10 text-orange-400 border border-orange-400/20" },
    { label: "Open Source",    cls: "bg-sky-300/10   text-sky-300   border border-sky-300/20"   },
    { label: "Remote-First",   cls: "bg-pink-300/10  text-pink-300  border border-pink-300/20"  },
  ],
  stats: [
    { val: "2+",               label: "Years of experience", color: "#c8f135" },
    { val: "12",               label: "Projects shipped",    color: "#ff5c1a" },
    { val: "10",               label: "Open-source repos",   color: "#b8e8ff" },
    { val: "upendrakda@gmail.com", label: "Drop me a line",      small: true      },
  ],

  projects: [
    {
      index: "01", year: "2026", tech: "React · NewsAPI",
      techCls: "bg-lime-400/10 text-lime-400",
      ctaCls: "bg-lime-400/10 text-lime-400 border border-lime-400/20",
      title: "Press Paper",
      desc: "A responsive React news app powered by NewsAPI — browse headlines by category, search topics, and read the latest news in a clean, modern UI.",
      link: "https://presspaper.netlify.app/",
    },
    {
      index: "02", year: "2026", tech: "JavaScript · React",
      techCls: "bg-sky-300/10 text-sky-300",
      ctaCls: "bg-sky-300/10 text-sky-300 border border-sky-300/20",
      title: "Mero List",
      desc: "A simple yet functional Todo app built in React featuring task management, filters (All / Completed / Pending), and data persistence across page reloads.",
      link: "https://merolist.netlify.app/",
    },
    {
      index: "03", year: "2025", tech: "JavaScript · HTML",
      techCls: "bg-orange-400/10 text-orange-400",
      ctaCls: "bg-orange-400/10 text-orange-400 border border-orange-400/20",
      title: "Scissor Paper Rock",
      desc: "A fun little browser game where you battle the computer in Rock-Paper-Scissors! Simple controls, cool animations, score tracking — everything you need for quick entertainment.",
      link: "https://scissorpaper.netlify.app/",
    },
    {
      index: "04", year: "2025", tech: "Python · Game",
      techCls: "bg-violet-400/10 text-violet-400",
      ctaCls: "bg-violet-400/10 text-violet-400 border border-violet-400/20",
      title: "Bangles",
      desc: "A classic logic-based number guessing game. Guess the 3-digit number and get clues: Fermi, Pico, Bagels. Use logic and deduction to find the secret number!",
      link: "https://github.com/upendrakda/Bangles.git",
    },
  ],

  skillPanels: [
    {
      icon: "⚡", iconBg: "bg-lime-400/10", headCls: "text-lime-400", label: "Frontend",
      accentCls: "bg-lime-400/10 text-lime-400",
      skills: [
        { name: "React", accent: true }, { name: "Next.js", accent: true },
        { name: "TypeScript", accent: true }, { name: "CSS / Tailwind", accent: false },
        { name: "Framer Motion", accent: false }, { name: "WebGL", accent: false },
        { name: "Three.js", accent: false }, { name: "Figma", accent: false },
      ],
    },
    {
      icon: "🔧", iconBg: "bg-sky-300/10", headCls: "text-sky-300", label: "Backend",
      accentCls: "bg-sky-300/10 text-sky-300",
      skills: [
        { name: "Node.js", accent: true }, { name: "Python", accent: true },
        { name: "FastAPI", accent: true }, { name: "GraphQL", accent: false },
        { name: "REST", accent: false }, { name: "PostgreSQL", accent: false },
        { name: "Redis", accent: false }, { name: "Prisma", accent: false },
      ],
    },
    {
      icon: "☁", iconBg: "bg-orange-400/10", headCls: "text-orange-400", label: "Infra & DevOps",
      accentCls: "bg-orange-400/10 text-orange-400",
      skills: [
        { name: "Docker", accent: true }, { name: "Kubernetes", accent: true },
        { name: "AWS", accent: false }, { name: "Vercel", accent: false },
        { name: "GCP", accent: false }, { name: "CI/CD", accent: false },
        { name: "Terraform", accent: false },
      ],
    },
    {
      icon: "✦", iconBg: "bg-pink-300/10", headCls: "text-pink-300", label: "Creative & Craft",
      accentCls: "bg-pink-300/10 text-pink-300",
      skills: [
        { name: "Creative coding", accent: true }, { name: "Generative art", accent: true },
        { name: "UI/UX design", accent: false }, { name: "Motion design", accent: false },
        { name: "Data viz", accent: false }, { name: "Typography", accent: false },
      ],
    },
  ],

  contact: {
    email:    "upendrakda@gmail.com",
    github:   "github.com/upendrakda",
    linkedin: "linkedin.com/in/upendrakda",
  },
};
