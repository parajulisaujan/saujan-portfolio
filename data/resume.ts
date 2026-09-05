import { skills } from "./skills";

export const resume = {
  summary:
    "Computer Science graduate with hands-on project experience in AI applications, backend systems, and relational data workflows. Worked with Python, SQL, FastAPI, LLM/RAG tools, browser automation, testing, and web technologies.",
  skills: [
    {
      name: "Languages",
      items: [...skills[0].items, ...(skills[0].additional ?? [])],
    },
    {
      name: "AI / ML",
      items: [
        "OpenAI API",
        "LLM applications",
        "RAG",
        "ChromaDB",
        "Ollama",
        "scikit-learn",
      ],
    },
    {
      name: "Backend / Data",
      items: [
        "FastAPI",
        "REST APIs",
        "WebSockets",
        "Playwright",
        "SQLite",
        "pandas",
        "Relational modeling",
      ],
    },
    {
      name: "Web / Tools",
      items: [
        "React",
        "Next.js",
        "Streamlit",
        "Plotly",
        "Git",
        "GitHub",
        "pytest",
      ],
    },
  ],
};
