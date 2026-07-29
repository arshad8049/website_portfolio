// Projects sourced from ~/Desktop/Start/projects — the real folder, not a highlight reel.
// categories: "ai" | "web" | "systems" | "hackathon" | "research"

export const projects = [
  {
    name: "InsightLegi",
    category: "research",
    description:
      "Legal-AI research platform for legislative insight built at GMU's Schar School. Vertex AI model training, NLP scraping pipelines (Puppeteer, Cheerio, NLTK, spaCy), and a React + Node.js full-stack app.",
    tech: ["GCP Vertex AI", "React", "Node.js", "NLP"],
    highlight: "75-person datathon · 94% data-validation accuracy",
  },
  {
    name: "SCOPE — Smart Building CV",
    category: "ai",
    description:
      "Smart Campus Operations & Predictive Environment: AI computer vision + IoT that turns reactive building maintenance into a proactive, autonomous process — trash overflow detection, spill alerts, real-time facilities response.",
    tech: ["YOLO-World", "NVIDIA NanoSAM", "ROS2", "IoT"],
    highlight: "Grew out of the 1st-place GMU hackathon win → startup",
  },
  {
    name: "Triagely",
    category: "web",
    description:
      "Productivity tool that unifies Gmail and Slack messages into one triaged inbox, with message polling and AWS Cognito authentication.",
    tech: ["React", "AWS Cognito", "Gmail API", "Slack API"],
    highlight: "Unified inbox across two ecosystems",
  },
  {
    name: "Velora",
    category: "web",
    description:
      "Apple-inspired self-marketing site for a freelance business building websites and AI agents — floating glass cards, smooth scroll animations, mouse-driven parallax.",
    tech: ["Vite", "React 18", "TypeScript"],
    highlight: "Design-first: glassmorphism + parallax",
  },
  {
    name: "CalAi",
    category: "ai",
    description:
      "Cross-platform iOS calorie tracker built with React Native. A Python backend and the DeepSeek model estimate calories from plain-language food descriptions.",
    tech: ["React Native", "Python", "DeepSeek"],
    highlight: "LLM-powered calorie estimation from text",
  },
  {
    name: "gdgShazam",
    category: "systems",
    description:
      "Audio-recognition pipeline for a Google Developer Group challenge: Speech-to-Text, Cloud Storage lifecycle rules, Firestore job tracking, Pub/Sub workers, and Cloud Run services.",
    tech: ["GCP", "Pub/Sub", "Cloud Run", "Firestore"],
    highlight: "Event-driven audio processing on GCP",
  },
  {
    name: "NdLinear experiments",
    category: "ai",
    description:
      "Experiments with Ensemble AI's NdLinear, a parameter-efficient replacement for nn.Linear that preserves multi-dimensional tensor structure.",
    tech: ["PyTorch", "Python"],
    highlight: "Architecture-level ML research",
  },
  {
    name: "career-ops",
    category: "systems",
    description:
      "AI job-search command center: portal scanners, CV generators with PDF rendering, application tracker, liveness checks, and follow-up cadence automation — a full internal-tools suite.",
    tech: ["Node.js", "Puppeteer", "YAML pipelines"],
    highlight: "Automation that runs my own job search",
  },
  {
    name: "ddlaw",
    category: "web",
    description:
      "Website for the DD Law Society, built with a clean token-driven CSS architecture (variables.css as the single source of truth).",
    tech: ["HTML", "CSS", "JavaScript"],
    highlight: "Client work · design tokens",
  },
  {
    name: "uiDesignMaplarge",
    category: "web",
    description:
      "Minimal web UI for interactive geometric transforms (rotate, translate, reflect, dilate) on map-based shapes — replacing blocking prompts with on-screen controls.",
    tech: ["JavaScript", "Canvas"],
    highlight: "Interaction design for geospatial tooling",
  },
  {
    name: "WellSpent",
    category: "hackathon",
    description:
      "ML-powered financial advisor from HackNC 2023 — spending-pattern visualization and trend prediction with R analytics and Zilliz Cloud.",
    tech: ["R", "Zilliz Cloud", "Flutter", "Firebase"],
    highlight: "2x winner at HackNC 2023",
  },
  {
    name: "Interview Copilot",
    category: "ai",
    description:
      "Real-time interview assistant experiments — transcription plus LLM-generated answer support.",
    tech: ["Python", "LLMs"],
    highlight: "Realtime LLM tooling",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "research", label: "Research" },
  { id: "web", label: "Web" },
  { id: "systems", label: "Systems" },
  { id: "hackathon", label: "Hackathon" },
];
