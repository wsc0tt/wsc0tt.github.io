export interface Project {
  id: number
  title: string
  description: string
  status?: string
  imagesDir?: string
  images?: string[]
  logo?: string
  logoAlt?: string
  logoText?: string
  stack: string[]
  github?: string
  link?: string
  video?: string
  cta?: {
    text: string
    href: string
  }
}

export const profile = {
  name: 'William Scott',
  title: 'software engineer',
  imageAlt: 'William Scott',
}

export const homeContent = [
  {
    text: "I'm William Scott, a recent computer science graduate and full-stack software engineer. I enjoy building AI-forward web applications, backend services, and data-driven systems, including agentic and AI-powered tools that are practical, secure, lightweight, efficient, and as performant as possible. This portfolio highlights projects I've built while designing database-backed features, integrating APIs, and collaborating in Agile teams.",
    className:
      'font-sans font-normal text-white text-base lg:text-lg leading-relaxed',
    wrapperClassName:
      'rounded-2xl bg-gradient-to-r from-blue-500 to-blue-900 shadow-2xl',
  },
]

export const aboutContent = {
  imageAlt: 'William Scott collage',
  paragraphs: [
    "I'm a software engineer and Sacramento State graduate with a Bachelor of Science in Computer Science and a 3.8 GPA. I'm seeking an opportunity to build thoughtful, reliable software that makes a real impact.",
    "Growing up in the Pacific Northwest, I initially pursued general engineering but realized it wasn't the right fit. After years in construction—first as a laborer and later as a foreman—I discovered software development while taking a computer science course alongside 12-hour work days.",
    'That transition showed me how much I enjoy learning complex systems, solving practical problems, and turning ideas into working software. It also strengthened the persistence, communication, and ownership I bring to collaborative work.',
    "I'm open to a range of software engineering specializations, especially work involving web applications, backend services, data-driven systems, and AI-powered tools. I like building lightweight, fast, performant software with clean, open user interfaces. I care about writing clean, efficient code and continuing to grow alongside a strong engineering team.",
    'Thank you for reading my story. I look forward to connecting.',
    'William',
  ],
}

export const contactContent = {
  intro:
    'To get in touch, please send me a message on linkedin, discord, or using the form below:',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/wscottdev/',
    discord: 'https://discordapp.com/users/wsc0tt',
  },
}

export const projects: Project[] = [
  {
    id: 7,
    title: 'League Winner',
    description:
      'League Winner is a mobile-first fantasy football draft companion built to help managers make quick, explainable draft decisions. It combines consensus ADP, league-aware auction values, normalized season projections, player details, and head-to-head comparisons. Built with Expo and React Native for mobile, plus Next.js and React for web and APIs, it uses TypeScript, Tailwind, NativeWind, Zod, and a shared deterministic scoring engine. The Next.js backend serves validated player data from checked-in market, identity, and projection snapshots, while the Expo app accesses it over HTTPS. Current features include rankings, position filters, custom league scoring, projected-points sorting, player comparisons, and projection details. Planned work includes live draft assistance, AI recommendations, saved leagues and accounts, source-health reporting, and draft-history persistence. League Winner is planned for release on mobile and web before the 2026 NFL season.',
    stack: [
      'Expo',
      'React Native',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'NativeWind',
      'Zod',
    ],
  },
  {
    id: 5,
    title: 'StockTower',
    status: 'Invite-only preview',
    logo: '/stocktower/stocktower.svg',
    logoAlt: 'StockTower logo',
    logoText: 'StockTower',
    description:
      'StockTower is an in-progress portfolio intelligence platform designed to help investors monitor, analyze, and understand their stock holdings. Users can create an account, upload portfolio positions via CSV, and view holdings in a centralized dashboard with current market prices, gain/loss calculations, and portfolio value tracking. The long-term vision is AI-assisted research, investment thesis tracking, material news and risk monitoring, watchlists, alerts, valuation analysis, competitor comparisons, and portfolio recommendations. I designed and developed the application architecture, authentication system, database schema, portfolio management workflow, and market data integration while using AI-assisted development tools to accelerate implementation without giving up ownership of technical design decisions.',
    stack: [
      'Next.js App Router',
      'TypeScript',
      'Tailwind CSS',
      'Auth.js',
      'Neon PostgreSQL',
      'Drizzle ORM',
      'Vercel',
    ],
    link: 'https://stocktower.vercel.app',
    cta: {
      text: 'request invite code',
      href: '#/contact',
    },
  },
  {
    id: 3,
    title: 'Maritime Assign',
    description:
      "Maritime Assign is a web-based job management platform built for the Marine Engineers' Beneficial Association (MEBA) to replace their outdated Google Sheets-based job board. The application centralizes job listings, streamlines dispatch workflows, and provides secure role-based access for union members, dispatchers, and administrators. It was created to improve reliability, security, efficiency, and real-time visibility for a nationwide maritime job distribution system.",
    imagesDir: 'ma',
    images: [
      'login.png',
      'forgot.png',
      'dash.png',
      'manage.png',
      'add.png',
      'board.png',
      'users.png',
    ],
    stack: [
      'React',
      'Node.js',
      'Vite',
      'Docker',
      'Supabase',
      'JavaScript',
      'PostgreSQL',
      'TailwindCSS',
      'React Testing Library',
      'Jest',
      'Vitest',
      'Formik',
      'Cloudflare',
    ],
    github: 'https://github.com/Maritime-Assign/MEBA',
    link: 'https://meba.pages.dev/',
    video: 'https://www.youtube.com/embed/scoow5AcclU?si=BNqhlPdddotEk7Lm',
  },
  {
    id: 6,
    title: 'Mars Rover Terrain Risk Classifier',
    description:
      'Mars Rover Terrain Risk Classifier is a machine learning research project focused on autonomous navigation for planetary exploration vehicles. The project explores how deep learning can evaluate terrain safety and assist rovers with real-time path planning decisions in unfamiliar environments. Using TensorFlow and transfer learning, the system was trained to classify terrain risk levels from rover imagery. The final model achieved 82.6% classification accuracy while reducing model size by 87.6% compared to baseline approaches, improving suitability for resource-constrained rover hardware. The project also introduced a rule-based heuristic layer that converts terrain classifications into actionable traversability and risk assessments, with findings documented in an accompanying technical research paper.',
    stack: [
      'Python',
      'TensorFlow',
      'Transfer Learning',
      'NumPy',
      'Deep Learning',
      'Computer Vision',
    ],
    github: 'https://github.com/wsc0tt/ai4mars',
  },
  {
    id: 2,
    title: 'Sun Armor Ai',
    description:
      'A web app that uses convolutional neural networks to classify skin lesions from uploaded images. Trained on dermatology datasets using PyTorch and TensorFlow, with client-side inference for fast results. Built with React and TypeScript, and published open-source for developers and researchers.',
    imagesDir: 'sa',
    images: ['home.jpg', 'analysis.png'],
    stack: [
      'React',
      'Node.js',
      'Vite',
      'PyTorch',
      'TensorFlow',
      'JavaScript',
      'Python',
      'ONNX',
      'Tensorflow.js',
      'HuggingFace',
    ],
    link: 'https://wsc0tt.github.io/SunArmorAi/',
    github: 'https://github.com/wsc0tt/SunArmorAi',
  },
  {
    id: 1,
    title: 'Mobile Medical App',
    description:
      'This project was my first exposure to Full-stack and mobile development, where I led a team of 6 other computer science students in creating a real product for a medical organization. The project was completed in 6 2-week sprints, working with evolving client requirements and feature requests.',
    imagesDir: 'mma',
    images: [
      'landingPage.png',
      'login.png',
      'createAccount.png',
      'home.png',
      'drawer.png',
      'form.png',
      'patientSearch.png',
      'schedule.png',
    ],
    stack: [
      'React Native',
      'Node.js',
      'Supabase',
      'Expo',
      'JavaScript',
      'TypeScript',
    ],
    github: 'https://github.com/DreamTeam131/Medical-App',
  },
  {
    id: 4,
    title: "Conway's Game of Life - Java OpenGL",
    description:
      "A real-time cellular automaton simulation built with Java and LWJGL. Renders a dynamic grid on the GPU using OpenGL, where each cell lives or dies each generation based on Conway's four rules. Supports adjustable simulation speed, grid dimensions, and customizable color themes.",
    imagesDir: 'gol',
    images: ['gameOfLife.png'],
    video: 'https://www.youtube.com/embed/XYfafleqi1I?si=qA_PjpHIjWVJD38E',
    stack: ['Java', 'OpenGL', 'Swing', 'LWJGL', 'GLSL'],
    github: 'https://github.com/wsc0tt/GameOfLife',
  },
]
