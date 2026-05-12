/**
 * Single source of truth for portfolio identity, experience, and skills.
 */

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export type JourneyEvent = {
  year: string;
  title: string;
  description: string;
  /** Filename under /public (served with optional NEXT_BASE_PATH). */
  image: string;
};

export const identity = {
  name: "Rémi Jorge",
  /** ASCII form for URLs / meta where accents are awkward */
  nameAscii: "Remi Jorge",
  email: "remijorge5@gmail.com",
  phone: "+33771634485",
  phoneDisplay: "+33 7 71 63 44 85",
  githubUrl: "https://github.com/remijorge",
  linkedinUrl: "https://www.linkedin.com/in/remi-jorge",
} as const;

/** One-line positioning for heroes and metadata. */
export const pitchOneLine =
  "AI/ML Engineer specializing in production multi-agent systems, closed-loop ML, and reinforcement learning. CTO & AI Expert at Covaloris. Open to fully remote US opportunities.";

/** Short paragraph for home / about leads */
export const pitchShort =
  "I architect and ship end-to-end AI products for enterprise clients—from requirements to cloud deployment—with deep focus on production multi-agent systems, RAG, model quality, and secure DevOps.";

export const experiences: ExperienceEntry[] = [
  {
    company: "Covaloris",
    role: "CTO & AI Expert",
    location: "Paris, France (Remote)",
    period: "Sept 2025 – Present",
    highlights: [
      "Architect and ship end-to-end AI products for enterprise clients: from requirements gathering to cloud deployment, full ownership of the stack.",
      "Design and orchestrate production multi-agent systems (LangChain, LangGraph, custom orchestrators) with RAG pipelines, semantic retrieval, and agentic workflows.",
      "Build and fine-tune ML models (classification, regression, NLP, embeddings); optimize inference latency and throughput for production environments.",
      "Develop internal SaaS tools for AI workflow management and pipeline evaluation, enabling clients to monitor and assess model quality.",
      "Own the full DevOps and security stack: CI/CD, Docker/Kubernetes, API design, infrastructure hardening, and secrets management.",
      "Lead and mentor a small technical team; drive cross-functional delivery across engineering and client-facing stakeholders.",
    ],
  },
  {
    company: "Airbus",
    role: "AI/ML Engineering Intern – Avionics",
    location: "Toulouse, France",
    period: "Mar 2025 – Aug 2025",
    highlights: [
      "Built a scalable multi-agent AI framework for automated analysis of avionics connectivity logs (millions of entries: FOMAX, FSA-NG) using Mistral LLMs, Hugging Face embeddings, LangChain, FAISS, and RAG pipelines.",
      "Achieved ~90% response accuracy on anomaly detection and contextual log interpretation in a high-integrity aeronautical environment.",
    ],
  },
];

export const skillCategories: Record<string, readonly string[]> = {
  "ML / AI": [
    "Reinforcement learning (PPO, reward modeling)",
    "RAG & semantic retrieval",
    "Multi-agent systems",
    "LLM fine-tuning & serving",
    "Embeddings & FAISS",
    "NLP",
    "Computer vision",
    "Time-series forecasting",
    "Transfer learning",
  ],
  Frameworks: [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "LangChain",
    "LangGraph",
    "Hugging Face",
    "FastAPI",
    "React",
    "Angular",
    "JavaFX",
  ],
  Infra: [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "REST APIs",
    "Distributed data pipelines",
    "Cloud deployment",
    "Security hardening",
  ],
  Languages: [
    "Python",
    "TypeScript",
    "Rust",
    "Scala",
    "Java",
    "C / C++",
    "C#",
    "Swift",
    "OCaml",
    "SQL / NoSQL",
  ],
  Data: [
    "ETL pipelines",
    "Vector databases",
    "Backtesting frameworks",
    "Structured & unstructured data at scale",
  ],
  Leadership: [
    "Technical team management",
    "SCRUM",
    "SAFe",
    "Sprint planning",
    "Cross-functional stakeholder communication",
  ],
};

/** Narrative timeline for /journey (order: most recent first). */
export const journeyTimeline: JourneyEvent[] = [
  {
    year: "2025 – Present",
    title: "Covaloris — CTO & AI Expert",
    description: `
Leading technical direction for a startup delivering enterprise AI: production multi-agent platforms, RAG, model training and serving, and hardened cloud operations. I own delivery from discovery to production and mentor engineers while partnering directly with clients.
    `,
    image: "covaloris.jpg",
  },
  {
    year: "Mar – Aug 2025",
    title: "Airbus — AI/ML Engineering Intern (Avionics)",
    description: `
Built a scalable multi-agent framework to interpret massive avionics connectivity logs (FOMAX, FSA-NG) with Mistral LLMs, Hugging Face embeddings, LangChain, FAISS, and RAG—reaching roughly 90% accuracy on anomaly and contextual analysis in a safety-critical environment. This deepened my practice shipping AI where reliability and auditability matter most.
    `,
    image: "airbus.jpg",
  },
  {
    year: "2023",
    title: "First Internship – Introduction to AI (Zumtobel, Austria)",
    description: `
As AI became increasingly popular following OpenAI's early public releases, I secured a research-focused internship at Zumtobel in Austria.

There, I explored supervised and unsupervised machine learning techniques for classification tasks. It was my first hands-on experience with real-world AI workflows — and I knew I wanted to dive deeper.
  `,
    image: "zumtobel.jpg",
  },
  {
    year: "2022–2025",
    title: "Engineering School – Software & AI Specialization",
    description: `
After mastering theory in preparatory classes, I transitioned to an engineering school to focus on practical software engineering and artificial intelligence.

I gained experience in full-stack web development, mobile and desktop applications, software architecture, design patterns, DevOps, and cloud deployment. We also had advanced AI courses ranging from traditional ML to deep learning, including a deep dive into Transformer architectures.

Throughout the program, I led numerous individual and team-based projects, which helped me reach the top of my class and graduate with honors.
  `,
    image: "ecolepolytech.jpg",
  },
  {
    year: "2019–2022",
    title: "Preparatory Classes – Mathematics, Theory & Logic",
    description: `
For three years, I pursued rigorous studies in a French preparatory program for engineering schools, focusing on mathematics, physics, and theoretical computer science.

I explored complexity theory, logic, formal verification, data structures, and algorithmic optimization. We used OCaml for functional programming and theoretical modeling, while Python was applied for practical algorithmic work.

These intense years refined my analytical thinking, problem-solving ability, and research orientation. I also built my first serious academic projects, often going beyond the syllabus into unexplored areas.
  `,
    image: "logic.jpg",
  },
  {
    year: "2017–2018",
    title: "High School – Programming on a Calculator",
    description: `
During high school, I chose an advanced mathematics track, as computer science wasn't offered in a meaningful way. However, we were provided with TI-83 Premium calculators, which supported programming in TI-Basic — a very limited language with just 26 variables, loops, conditionals, and no functions (only GOTO, which I avoided for performance reasons). 

Despite its constraints, I developed several complete video games and mathematical tools, including a turn-based RPG with ~6000 lines of code (on a calculator) — all written linearly due to the lack of functions. Looking back, it felt like programming in a simplified form of assembly.

This experience deeply shaped my understanding of optimization, memory handling, clean loop logic, and low-level thinking — skills that gave me a strong head start in future programming challenges.
    `,
    image: "calculator.jpg",
  },
  {
    year: "2015–2016",
    title: "Discovering the Fundamentals with Scratch",
    description: `
Eager to continue after my internship, I enrolled in a new computer science class at my middle school. There, we learned the basics of programming using Scratch — a visual programming platform that introduced me to concepts like conditionals, loops, and even recursion.

I practiced daily, often outpacing the teacher, and discovered a passion that would guide my future. This hands-on period solidified my understanding of core programming logic.
    `,
    image: "scratch.jpg",
  },
  {
    year: "2015",
    title: "Observation Internship at ONERA",
    description: `
At just 14 years old, I spent a week at ONERA (The French Aerospace Lab) for my observation internship. I explored how they used supercomputers to simulate fluid dynamics for aircraft and rocket designs.

This was my very first exposure to computer science. I attended an introductory Python session and learned about basic programming concepts — it sparked something in me that would become a life-long passion.
    `,
    image: "onera.webp",
  },
];

/** Badge URLs for key tools (skills page). */
export const skillBadges: { name: string; badge: string }[] = [
  {
    name: "Python",
    badge:
      "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
  },
  {
    name: "PyTorch",
    badge:
      "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
  },
  {
    name: "LangChain",
    badge:
      "https://img.shields.io/badge/LangChain-009688?style=for-the-badge&logo=langchain&logoColor=white",
  },
  {
    name: "LangGraph",
    badge:
      "https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white",
  },
  {
    name: "FastAPI",
    badge:
      "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
  },
  {
    name: "Docker",
    badge:
      "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
  },
  {
    name: "Kubernetes",
    badge:
      "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white",
  },
  {
    name: "React",
    badge:
      "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
  },
  {
    name: "TypeScript",
    badge:
      "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
  },
];

export function assertProfileIntegrity(): void {
  const hasCovaloris = experiences.some((e) =>
    e.company.toLowerCase().includes("covaloris")
  );
  const hasAirbus = experiences.some((e) =>
    e.company.toLowerCase().includes("airbus")
  );
  if (!hasCovaloris || !hasAirbus) {
    throw new Error("Profile must include Covaloris and Airbus experiences.");
  }
  for (const exp of experiences) {
    if (!exp.highlights.length || exp.highlights.some((h) => !h.trim())) {
      throw new Error(`Experience ${exp.company} must have non-empty highlights.`);
    }
    if (!exp.period.trim()) {
      throw new Error(`Experience ${exp.company} must have a period.`);
    }
  }
}
