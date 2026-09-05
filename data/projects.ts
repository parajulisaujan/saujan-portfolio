export type Project = {
  name: string;
  context: string;
  area: string;
  description: string;
  highlights: string[];
  technologies: string[];
  code: string;
  live?: string;
  note?: string;
  role?: string;
};
export const projects: Project[] = [
  {
    name: "AI Browser Agent",
    context: "Independent project · 2026",
    area: "AI + AUTOMATION",
    description:
      "A browser automation demo that translates natural-language tasks into planned actions, with human approval for browser interactions.",
    highlights: [
      "Separated OpenAI planning from FastAPI/Playwright tools for page extraction, summaries, and screenshots.",
      "Required human approval for click/type actions, with backend guardrails and approval regression tests.",
      "Streamed run progress and logs to a Next.js interface using WebSockets.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Playwright",
      "OpenAI",
      "Next.js",
      "TypeScript",
    ],
    code: "https://github.com/parajulisaujan/AI-browser-agent",
  },
  {
    name: "Job Market Intelligence Dashboard",
    context: "Independent data / analytics project",
    area: "DATA + ANALYTICS",
    description:
      "An end-to-end analytics application demonstrating data cleaning, relational storage, SQL analysis, and interactive visualization with fictional job-posting data.",
    highlights: [
      "Cleaned 81 fictional rows into 80 postings with pandas, handling duplicates, missing values, and normalization.",
      "Built relational jobs and job_skills tables, SQL joins and CTEs, and filterable Plotly views with CSV export.",
      "Tested the pipeline with pytest; included an educational TF-IDF and Logistic Regression exercise.",
    ],
    technologies: [
      "Python",
      "pandas",
      "SQL / SQLite",
      "Streamlit",
      "Plotly",
      "scikit-learn",
    ],
    code: "https://github.com/parajulisaujan/job-market-intelligence",
    live: "https://job-market-intelligence-sp.streamlit.app/",
    note: "Uses fictional demo job-posting data.",
  },
  {
    name: "StudyAI",
    context: "3-person Senior Design team · Spring–Summer 2026",
    area: "AI + COLLABORATION",
    description:
      "Contributed to an AI-assisted study application that helps students interact with course PDFs through retrieval and local language models.",
    role: "Backend Support, AI Integration & Testing",
    highlights: [
      "Supported Python/FastAPI backend and AI/RAG integration using PDF extraction, ChromaDB, and Ollama.",
      "Performed manual and automated testing, investigated backend failures, and supported fixes.",
      "Coordinated sprint tracking, contributed technical documentation, and supported the final demo and presentation.",
    ],
    technologies: ["Python", "FastAPI", "RAG", "ChromaDB", "Ollama", "PyMuPDF"],
    code: "https://github.com/boyedandtoyed/StudyAI",
  },
  {
    name: "Academic Records Analysis Database",
    context: "Independent project",
    area: "SQL + RELATIONAL MODELING",
    description:
      "A relational analysis of undergraduate coursework, using SQL to examine course loads and prerequisite relationships.",
    highlights: [
      "Loaded 48 completed courses and 145 credits across three institutions into SQLite using Python.",
      "Used joins, aggregations, and recursive CTEs to trace prerequisite relationships: a longest chain of seven courses.",
      "Analyzed seven courses directly unlocked by Algorithms & Data Structures and visualized results with Matplotlib.",
    ],
    technologies: ["Python", "SQL", "SQLite", "Recursive CTEs", "Matplotlib"],
    code: "https://github.com/parajulisaujan/cs-degree-database",
  },
  {
    name: "Student Task Manager",
    context: "Independent learning project",
    area: "FRONTEND FUNDAMENTALS",
    description:
      "A responsive React application for creating, editing, filtering, and completing tasks, with priorities, due dates, and overdue highlighting.",
    highlights: [
      "Built reusable components and browser persistence with localStorage. Task and user data stays in the browser; there is no backend.",
    ],
    technologies: ["React", "JavaScript", "Vite", "CSS", "localStorage"],
    code: "https://github.com/parajulisaujan/student-task-manager",
  },
];
