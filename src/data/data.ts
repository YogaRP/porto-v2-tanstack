export type Project = {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    category: "Web App",
    description:
      "A real-time analytics platform delivering interactive charts and actionable product insights.",
    image: "/images/analytics.png",
    tags: ["React", "Firebase", "D3"],
  },
  {
    title: "Smart City App",
    category: "Mobile",
    description:
      "An IoT-driven mobile app connecting citizens with city services through a single hub.",
    image: "/images/smartcity.png",
    tags: ["Flutter", "Node.js", "MQTT"],
  },
  {
    title: "Design System Kit",
    category: "UI/UX",
    description:
      "A comprehensive design system with reusable components, tokens and documentation.",
    image: "/images/designsystem.png",
    tags: ["Figma", "Tokens", "Storybook"],
  },
  {
    title: "Shopify Storefront",
    category: "Web App",
    description:
      "A high-converting e-commerce storefront with optimized checkout and product discovery.",
    image: "/images/storefront.png",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "DataViz Studio",
    category: "Web App",
    description:
      "An interactive data visualization studio for building custom dashboards and reports.",
    image: "/images/dataviz.png",
    tags: ["Vue", "Python", "Plotly"],
  },
  {
    title: "Shader Toolkit",
    category: "Open Source",
    description:
      "An open-source GLSL shader library with utilities and examples for creative coding.",
    image: "/images/shader.png",
    tags: ["WebGL", "GLSL", "TypeScript"],
  },
]

export const latestProjects: Project[] = [
  {
    title: "Analytics Dashboard",
    category: "Web App",
    description:
      "A clean analytics interface for monitoring product performance and user engagement in real time.",
    image: "/images/analytics.png",
    tags: ["React", "Tailwind", "Chart.js"],
  },
  {
    title: "Finance Tracker",
    category: "Mobile App",
    description:
      "A mobile-first budgeting app with intuitive charts, goals, and transaction insights.",
    image: "/images/finance.png",
    tags: ["Next.js", "Supabase", "Framer"],
  },
  {
    title: "Shop Experience",
    category: "E-commerce",
    description:
      "A conversion-focused storefront with streamlined browsing, product discovery, and checkout.",
    image: "/images/shop.png",
    tags: ["Vue", "Stripe", "Node"],
  },
]

export type Certificate = {
  title: string
  issuer: string
  issued: string
  verified: boolean
}

export const certifications: Certificate[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issued: "Issued March 2024",
    verified: true,
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    issued: "Issued January 2024",
    verified: true,
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta / Coursera",
    issued: "Issued November 2023",
    verified: true,
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    issued: "Issued September 2023",
    verified: true,
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow",
    issued: "Issued July 2023",
    verified: true,
  },
  {
    title: "Scrum Master Certified (PSM I)",
    issuer: "Scrum.org",
    issued: "Issued April 2023",
    verified: true,
  },
]

export const awards = [
  {
    title: "Best Innovation Award",
    year: "2024",
    description:
      "Awarded for developing an AI-powered accessibility tool at the annual TechForward conference.",
  },
  {
    title: "1st Place — Global Hackathon",
    year: "2023",
    description:
      "Led a team of four to victory among 200+ teams building a real-time collaboration platform.",
  },
  {
    title: "Top Contributor of the Year",
    year: "2023",
    description:
      "Recognized for outstanding open-source contributions to popular developer libraries.",
  },
  {
    title: "Dean's List Excellence",
    year: "2022",
    description:
      "Maintained top academic standing across four consecutive semesters in Computer Science.",
  },
]

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I work on personal portfolios, product websites, landing pages, dashboards, and design systems for startups and small teams.",
  },
  {
    q: "How soon can you respond?",
    a: "I usually reply within one business day. For urgent requests, email is the fastest way to reach me.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes, I collaborate remotely with clients and teams across different time zones.",
  },
  {
    q: "Can you help with both design and development?",
    a: "Absolutely. I can support UI/UX design, front-end implementation, and design system setup.",
  },
]
