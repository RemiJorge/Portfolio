/**
 * Single source of truth for public site copy (skills, timeline, Covaloris).
 * Replace `public/resume.pdf` manually when your CV changes.
 */
export const SITE = {
  title: "Rémi Jorge — AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in production multi-agent systems, closed-loop ML, and reinforcement learning. CTO & AI Expert at Covaloris.",
} as const;

export const PERSON = {
  displayName: "Rémi Jorge",
  headline: "AI/ML Engineer",
  subheadline: "CTO & AI Expert at Covaloris",
  tagline:
    "AI/ML Engineer specializing in production multi-agent systems, closed-loop ML, and reinforcement learning. Currently CTO & AI Expert at Covaloris (startup). Open to fully remote US opportunities.",
  email: "remijorge5@gmail.com",
  phone: "+33771634485",
  phoneDisplay: "+33 7 71 63 44 85",
  githubUrl: "https://github.com/remijorge",
  linkedinUrl: "https://www.linkedin.com/in/remi-jorge",
  openTo: "Open to remote international opportunities.",
} as const;

export const COVALORIS = {
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
} as const;

/** Skills taxonomy — chips on the Skills page (superset of prior badge lists + current AI focus). */
export const SKILL_CATEGORIES: Record<string, readonly string[]> = {
  "ML / AI": [
    "Reinforcement Learning (PPO, reward modeling)",
    "RAG",
    "Multi-agent systems",
    "LLM fine-tuning & serving",
    "Embeddings",
    "FAISS",
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
    "Next.js",
    "Angular",
    "Express.js",
    "JavaFX",
  ],
  Languages: [
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Java",
    "C",
    "C++",
    "C#",
    "Swift",
    "Rust",
    "Scala",
    "OCaml",
    "R",
    "SQL",
    "NoSQL",
    "Assembly",
  ],
  Data: [
    "ETL pipelines",
    "Vector databases",
    "PostgreSQL",
    "MongoDB",
    "Backtesting frameworks",
    "Structured & unstructured data at scale",
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
  "Platforms & tools": [
    "Vercel",
    "GitHub",
    "GitLab",
    "GitHub Actions",
    "VS Code",
    "IntelliJ IDEA",
    "PyCharm",
    "Unity",
    "GitHub Copilot",
    "Cursor",
  ],
  Leadership: [
    "Technical team management",
    "Agile",
    "SCRUM",
    "SAFe",
    "Sprint planning",
    "Azure DevOps",
    "Cross-functional stakeholder communication",
  ],
  "Soft skills": [
    "Rigorous",
    "Hard-working",
    "Strong communication",
    "Problem-solving skills",
    "Quick learner",
    "Leadership potential",
    "Cross-functional teamwork",
    "Adaptability",
  ],
} as const;

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  /** Filename under /public or empty to use gradient fallback in Journey */
  image: string;
};

export const TIMELINE_EVENTS: readonly TimelineEvent[] = [
  {
    year: "Sept 2025 – Present",
    title: "Covaloris — CTO & AI Expert",
    description: `
Leading AI delivery at a startup: shipping production-grade multi-agent systems, RAG, and ML for enterprise clients. Full ownership from discovery to secure cloud deployment, internal tooling for evaluation, and mentoring a compact engineering team.
    `.trim(),
    image: "globe.svg",
  },
  {
    year: "2025",
    title: "AI Internship at Airbus",
    description: `
Earlier in 2025 I completed an internship at Airbus on AI-driven diagnostics for aviation connectivity systems. Work is confidential; in broad terms I designed and deployed deep learning and ML models and integrated Retrieval-Augmented Generation (RAG) pipelines.

This strengthened my understanding of real-world AI in critical, safety-first environments.
    `.trim(),
    image: "airbus.jpg",
  },
  {
    year: "2023",
    title: "First Internship — Introduction to AI (Zumtobel, Austria)",
    description: `
As AI adoption accelerated, I joined Zumtobel in Austria for a research-focused internship. I explored supervised and unsupervised ML for classification — my first sustained exposure to production-style AI workflows.
    `.trim(),
    image: "zumtobel.jpg",
  },
  {
    year: "2022–2025",
    title: "Engineering School — Software & AI Specialization",
    description: `
At Polytech Montpellier I focused on software engineering and AI: full-stack web and mobile, architecture, DevOps, and cloud. Coursework spanned classical ML to deep learning and Transformer architectures. I led many team and solo projects and graduated with honors.
    `.trim(),
    image: "ecolepolytech.jpg",
  },
  {
    year: "2019–2022",
    title: "Preparatory Classes — Mathematics, Theory & Logic",
    description: `
Three years in a French preparatory track: mathematics, physics, theoretical CS. OCaml for functional programming and modeling; Python for algorithms. Strong emphasis on complexity, logic, data structures, and optimization — foundations I still rely on daily.
    `.trim(),
    image: "logic.jpg",
  },
  {
    year: "2017–2018",
    title: "High School — Programming on a Calculator",
    description: `
TI-Basic on a TI-83 Premium: no real functions, tight constraints — yet full games and math tools, including a turn-based RPG on the order of thousands of lines. A crash course in optimization, memory discipline, and low-level control flow.
    `.trim(),
    image: "calculator.jpg",
  },
  {
    year: "2015–2016",
    title: "Discovering the Fundamentals with Scratch",
    description: `
Middle school CS with Scratch: conditionals, loops, recursion. I practiced daily and discovered a passion that set the direction for my studies and career.
    `.trim(),
    image: "scratch.jpg",
  },
  {
    year: "2015",
    title: "Observation Internship at ONERA",
    description: `
A week at ONERA (French aerospace lab): supercomputing and fluid simulation for aircraft design. First exposure to Python — the spark that became a long-term focus on computing and simulation-heavy problems.
    `.trim(),
    image: "onera.webp",
  },
] as const;
