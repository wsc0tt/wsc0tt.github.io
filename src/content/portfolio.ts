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
      'League Winner is a mobile-first fantasy football draft companion for fast, explainable decisions. It pairs consensus ADP and league-aware auction values with normalized projections, game logs, injury data, head-to-head comparisons, and AI-written player outlooks grounded in current reporting. Additionally, League Winner includes a live drafting companion feature called War Room that recommends picks from positional scarcity and auto-adjusts player values based on league budgets. Next.js owns the API and a shared deterministic scoring engine, Expo and React Native drive the mobile client, and Clerk and Neon Postgres back accounts and saved leagues. Player data refreshes daily from public sources. Live on web; mobile to follow.',
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
    link: 'https://league-winner-ten.vercel.app',
  },
  {
    id: 5,
    title: 'StockTower',
    status: 'Invite-only preview',
    logo: '/stocktower/stocktower.svg',
    logoAlt: 'StockTower logo',
    logoText: 'StockTower',
    description:
      'StockTower is an invite-only platform for understanding stock portfolios. Investors can upload positions, track performance, and review their holdings from one dashboard. Future releases will add AI-assisted research, thesis tracking, news monitoring, alerts, and valuation tools.',
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
      "Maritime Assign is a job management platform built for the Marine Engineers' Beneficial Association. It centralizes listings and dispatch workflows with role-based access for union members, dispatchers, and administrators. The system replaces a spreadsheet-based process with a more reliable, secure, and transparent nationwide job board.",
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
      'Mars Rover Terrain Risk Classifier explores autonomous navigation for planetary vehicles. It classifies terrain imagery and converts the results into actionable risk assessments. The final model achieved 82.6% accuracy while reducing model size by 87.6% compared with baseline approaches.',
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
      'Sun Armor AI is a web app that classifies skin lesions from uploaded images. Its neural network runs in the browser for fast, private results. The project is open source for developers and researchers.',
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
      'Mobile Medical App is a full-stack patient management tool created for a medical organization. I led six other computer science students through six two-week sprints while adapting to evolving client requirements. The project gave me my first experience leading a team and shipping a real mobile product.',
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
      "Conway's Game of Life is a real-time cellular automaton rendered on the GPU. Each cell evolves by Conway's four rules to create complex patterns from simple behavior. Users can adjust the simulation speed, grid dimensions, and color theme.",
    imagesDir: 'gol',
    images: ['gameOfLife.png'],
    video: 'https://www.youtube.com/embed/XYfafleqi1I?si=qA_PjpHIjWVJD38E',
    stack: ['Java', 'OpenGL', 'Swing', 'LWJGL', 'GLSL'],
    github: 'https://github.com/wsc0tt/GameOfLife',
  },
]
