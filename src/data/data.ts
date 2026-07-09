export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "Ezzi School - School Management Application",
    category: "Web App",
    description:
      "A web based application for school management",
    tags: ["Reactjs", "ExpressJs", "MongoDB"],
  },
  {
    title: "Ezzi Work - HRIS Application",
    category: "Web App",
    description:
      "A web based application for HRIS application.",
    tags: ["Reactjs", "ExpressJs", "MongoDB"],
  },
  {
    title: "Learning Project - Digital Wallet and Ecommerce Web App",
    category: "Web App",
    description:
      "This is a separate project but connected app, the first one is Digital Wallet web based Rest API using Grpc for communication on the microservice, and the second one is ecommerce web Rest API using Kafka as communication on the microservice, the app is connected so the wallet is used for transaction on ecommerce service.",
    tags: ["Go", "Grpc", "Kafka", "Microsevice"],
  },
  {
    title: "Learning Project - Digital Product Marketplace",
    category: "Web App",
    description:
      "This is a marketplace but for digital product such as video, image, or other digital asset",
    tags: ["NestJS", "AWS"],
  },
  {
    title: "Learning Project - AI Notetaking",
    category: "Web App",
    description:
      "This is a custom note app with AI chatbot to ask about related note, and an AI based search feature with cosine similiarity to search based on vector so user can find based on the context.",
    tags: ["Go", "ReactJS", "Supabase/PostgreSQL", "Gemini"],
  },
  {
    title: "Half Project - A delivery courier app for FnB business",
    category: "Web App",
    description:
      "An order and courier management using a websocket for integration with mobile app. But unfortunetaly the project cancelled in the middle",
    tags: ["NextJS", "ExpressJS", "Websocket"],
  },
  {
    title: "Half Project - Kerjahub, a job seeker for",
    category: "Web App",
    description:
      "A job seeker application integrated with mobile app. It has a feature for job seeker to find a job or for company to post a job vacancy. But unfortunetaly the project cancelled in the middle",
    tags: ["NextJS", "PostgreSQL"],
  },
  {
    title: "Learning Project - Remake Thread apps",
    category: "Web App",
    description:
      "Remaking Thread apps based on tutorial on Youtube As A Programmer.",
    tags: ["ReactJS", "ExpressJS", "MongoDB"],
  },
  {
    title: "Learning Project - Remake Iphone 15 Web",
    category: "Web App",
    description:
      "Remaking Apple Iphone 15 web based on tutorial on Javscript Mastery.",
    tags: ["ReactJS", "GSAP"],
  },
  {
    title: "Learning Project - BWA Job Hunt",
    category: "Web App",
    description:
      "A job seeker application, it has a feature for job seeker to find a job or for company to post a job vacancy.",
    tags: ["NextJS", "PostgreSQL"],
  },
  {
    title: "Learning Project - BWA Dashboard Job Hunt",
    category: "Web App",
    description:
      "This is the dahsboard for the Learning Project - BWA Job Hunt, this dashboard is for management company and management job vacancy",
    tags: ["NextJS", "PostgreSQL"],
  },
  {
    title: "Learning Project - Luxspace a furniture marketplace",
    category: "Web App",
    description:
      "This a marketplace for furniture from view to purchase and pay using a mockup API.",
    tags: ["ReactJS", "TailwindCSS"],
  },
  {
    title: "Digital Signature using a QR Code Web Application",
    category: "Web App",
    description:
      "This is a Final Project as a requirement to graduate from my college, this project purpose is to change digital signature from just image to QR Code on my major",
    tags: ["Laravel 8", "MySQL", "Bootstrap"],
  },
  {
    title: "Final Bootcamp Project - Tickety a ticket selling web platform",
    category: "Web App",
    description:
      "This is a Final Project from my laravel bootcamp, this a platform for buy and sell ticket for an event such as webinar, workshop, concert, and etc.",
    tags: ["Laravel 8", "MySQL"],
  },
  {
    title: "Final Bootcamp Project - E-commerce website using NextJS",
    category: "Web App",
    description:
      "This is a Final Project from my nextjs bootcamp, the purpose is to learn some complex thing using nextjs such as dashboard, state management, and etc.",
    tags: ["Laravel 8", "MySQL"],
  },
  {
    title: "State Asset Management Information System (SIP BMN) of the Ministry of Research, Technology and Innovation (BRIN)",
    category: "Web App",
    description:
      "This is a inventory or asset management for Ministry of Research, Technology and Innovation (BRIN)",
    tags: ["Codeigniter 3"],
  },
]

export type Certificate = {
  title: string
  issuer: string
  issued: string
  verified: boolean
  href: string
}

export const certifications: Certificate[] = [
  {
    title: "Certificate of Completion - [Paket All In One] 6 Proyek Backend Menguasai Golang (Dasar - Lanjutan)",
    issuer: "Fast Campus",
    issued: "Issued June 2026",
    verified: false,
    href: "https://drive.google.com/file/d/1Q6xE-8i80bBj5zWNOYmXuaJSiSd8tczy/view?usp=sharing"
  },
  {
    title: "Certificate of Completion - Optimalisasi performa React hingga migrasi ke Next.js",
    issuer: "Fast Campus",
    issued: "Issued January 2026",
    verified: false,
    href: "https://drive.google.com/file/d/1vmkZuVoozxyZpJnlghXawEeW5tsHN9Zv/view?usp=sharing"
  },
  {
    title: "Full Stack Golang React: Integrasi AI LLM Bikin Supernote",
    issuer: "BuildWithAngga",
    issued: "Issued January 2026",
    verified: false,
    href: "https://drive.google.com/file/d/1t3zEIkqERf8iu9RYCbyXKksYMcVTvRko/view?usp=sharing"
  },
  {
    title: "Mastering Golang Microservices with Vue: Warehouse & Point of Sales",
    issuer: "BuildWithAngga",
    issued: "Issued June 2026",
    verified: false,
    href: "https://drive.google.com/file/d/1hqOdeOAc_nAmMNC4bX0za9TvZl0UvUKO/view?usp=sharing"
  },
  {
    title: "NestJS & AWS Serverless Mastery: Web Jual Beli Produk Digital",
    issuer: "BuildWithAngga",
    issued: "Issued January 2026",
    verified: false,
    href: "https://drive.google.com/file/d/1qB3DNVdo9N7bfzO9A42J_dcinF3BJjtU/view?usp=sharing"
  },
  {
    title: "Bangun REST API Rapi & Scalable dengan NestJS & Prisma",
    issuer: "Dunia Coding",
    issued: "Issued January 2026",
    verified: false,
    href: "https://drive.google.com/file/d/1uIsf7zNOX2RnS_wJRrIO0UQ9OTnPw1Cy/view?usp=sharing"
  },
  {
    title: "K6 for Engineers: Load Testing Real-World Apps at Scale",
    issuer: "BuildWithAngga",
    issued: "Issued December 2025",
    verified: false,
    href: "https://drive.google.com/file/d/1hPdrcfFE1zhJv35pg0WGtAEqWGUiI4ea/view?usp=sharing"
  },
  {
    title: "UX/UI Design Principles Compact (Theory + Figma Exercise)",
    issuer: "Udemy (Christine moonlearning)",
    issued: "Issued November 2024",
    verified: false,
    href: "https://drive.google.com/file/d/1uIsf7zNOX2RnS_wJRrIO0UQ9OTnPw1Cy/view?usp=sharing"
  },
  {
    title: "Belajar Dasar Express.js",
    issuer: "Codepolitan",
    issued: "Issued August 2024",
    verified: false,
    href: "https://drive.google.com/file/d/1cWaPM1bBTPnpaJ5ploBrnOU46cRN0iwt/view?usp=sharing"
  },
  {
    title: "Belajar Vue.js 3",
    issuer: "Codepolitan",
    issued: "Issued August 2024",
    verified: false,
    href: "https://drive.google.com/file/d/1Tsn1kDEAWOPBtrjDg7FaQjWmVLAER2Yy/view?usp=sharing"
  },
  {
    title: "UI/UX Design Bootcamp",
    issuer: "Sanbercode",
    issued: "Issued March 2023",
    verified: false,
    href: "https://drive.google.com/file/d/1QL-leFT7T8H_bxM1qZye8m4yBB4KLPW-/view?usp=sharing"
  },
  {
    title: "UI/UX Design Bootcamp",
    issuer: "Sanbercode",
    issued: "Issued March 2023",
    verified: false,
    href: "https://drive.google.com/file/d/1QL-leFT7T8H_bxM1qZye8m4yBB4KLPW-/view?usp=sharing"
  },
  {
    title: "NextJS Bootcamp",
    issuer: "Sanbercode",
    issued: "Issued October 2023",
    verified: false,
    href: "https://drive.google.com/file/d/1oBBbxofYSMNQrKib7U95bz9NXw1Qy1X8/view?usp=sharing"
  },
  {
    title: "Belajar ReactJS",
    issuer: "Sanbercode",
    issued: "Issued September 2023",
    verified: false,
    href: "https://drive.google.com/file/d/1-__Lj7KmrAjKEdXTfpYmlon8AhFcaBud/view?usp=sharing"
  },
  {
    title: "Menguasai Framework Nest JS dari awal sampai mahir",
    issuer: "Mister Coding",
    issued: "Issued December 2023",
    verified: false,
    href: "https://drive.google.com/file/d/1-__Lj7KmrAjKEdXTfpYmlon8AhFcaBud/view?usp=sharing"
  },
  {
    title: "Belajar Menguasai Nest.js",
    issuer: "Codepolitan",
    issued: "Issued November 2023",
    verified: false,
    href: "https://drive.google.com/file/d/1-__Lj7KmrAjKEdXTfpYmlon8AhFcaBud/view?usp=sharing"
  },
]

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I work on personal portfolios, product websites, landing pages, dashboards, and design systems for startups and small teams.",
  },
  {
    q: "How soon can you respond?",
    a: "I usually reply within one business day. For urgent requests, my social media is the fastest way to reach me.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes, I collaborate remotely with clients and teams across different time zones.",
  },
  {
    q: "Can you help with both design and development?",
    a: "Design is not my speciality so maybe i will help as much as i can, but for development absolutely i can help",
  },
]

export const mydata = {
  email: "yogarizky51@gmail.com",
  phone: "+6287870548126",
  location: {
    remote: "Remote only",
    fulltime: "Jakarta, Depok, Bogor, or Remote"
  },
  available: {
    freelance: "Available for Freelance",
    fulltime: "Available for Fulltime or Freelance",
    close: "Not Available for Work"
  },
  social_media: {
    github:"https://github.com/YogaRP",
    linkedin:"https://linkedin.com/in/yogarizkyputra",
    instagram:"https://www.instagram.com/yogarizkyputra",
    threads:"https://www.threads.com/@yogarizkyputra"
  }
}