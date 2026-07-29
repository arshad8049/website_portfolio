// Single source of truth for personal/career content.
// Sourced from career-ops (cv.md, profile.yml). Update here, the UI re-renders.

export const identity = {
  name: "Arshad Ahmed Shaik",
  headline: "AI Engineer specializing in LLMs, applied ML systems, and full-stack AI products.",
  exitStory:
    "5x hackathon winner and AI builder with experience training LLMs, building evaluation systems, and deploying production-ready AI applications across research and industry.",
  location: "Fairfax, VA",
  email: "ashaik8.us@gmail.com",
  phone: "+1 (571) 587-6641",
  links: {
    linkedin: "https://www.linkedin.com/in/hire-arshad-shaik/",
    github: "https://github.com/ashaik8",
    portfolio: "https://ashaik8us.wixsite.com/portfolio",
  },
  stats: [
    { value: "5x", label: "Hackathon wins" },
    { value: "500+", label: "Users served by my chatbot" },
    { value: "94%", label: "Datathon data-validation accuracy" },
    { value: "3.6", label: "GPA @ George Mason" },
  ],
};

export const education = [
  {
    school: "George Mason University",
    degree: "B.S. in Computer Science",
    location: "Fairfax, VA",
    dates: "2022 — May 2026",
    gpa: "3.6",
    highlights: [
      "Dean's List (4x), Mason Distinction Scholarship, Mason Idea Scholarship",
      "Coursework: Data Structures & Algorithms, Software Engineering, Cloud Computing, Formal Methods & Models, OOP (Java), Systems Programming (C)",
      "Certifications: GCP Secured Networks, AWS Cloud Essentials, Vertex AI Prompt Design, IBM Quantum Platform Basics",
    ],
  },
  {
    school: "Central Texas College — Aviation Science",
    degree: "A.A.S. Aviation Science + Commercial Pilot Certificate (Instrument Rating)",
    location: "Killeen, TX",
    dates: "Fall 2026 —",
    gpa: null,
    highlights: [
      "FAA-approved Part 141 flight school; flight training at Skylark Field on Cessna 152s, Vulcanair V1s, Piper Archers and Arrows, with a Cessna 310 multi-engine add-on",
      "Curriculum aligned with Texas A&M University–Central Texas B.S. in Aviation",
      "Transferred 62 credits from GMU; path: Private Pilot → Instrument → Commercial → CFI → ATP",
      "The pivot: after building AI systems from hackathons to Scale AI, I chose the sky — I withdrew my OPT application to train as a professional pilot, bringing an engineer's mindset to the flight deck.",
    ],
  },
];

// Ordered chronologically — which also happens to be ascending complexity:
// each role scaled up in scope, users, and technical depth.
export const experience = [
  {
    company: "Rise Educational Consultancy",
    role: "Machine Learning Intern",
    dates: "May 2023 — Aug 2023",
    location: "Remote",
    complexity: "Foundation: first applied-ML system",
    bullets: [
      "Developed an AI-powered personalized learning system using student quiz, engagement, and preference data to generate study plans",
      "Improved student success rates by 20% within 3 months",
      "Led SEO and digital marketing campaigns to grow web traffic",
    ],
    tech: ["Python", "Scikit-learn", "SEO"],
  },
  {
    company: "George Mason University — Dept. of Public Health",
    role: "Machine Learning Research Assistant",
    dates: "May 2024 — Aug 2024",
    location: "Fairfax, VA",
    complexity: "Scale-up: production chatbot for real communities",
    bullets: [
      "Automated large-scale data collection with Azure AI, improving pipeline scalability",
      "Built an Azure OpenAI chatbot serving 500+ users in underserved communities",
      "Increased engagement by 40% across diverse communities while promoting digital and e-health literacy",
    ],
    tech: ["Azure OpenAI", "Azure AI", "Python", "NLP"],
  },
  {
    company: "George Mason University — Schar School of Policy & Government",
    role: "Software Development Engineer (Research) — GCP AI",
    dates: "Aug 2024 — Present",
    location: "Fairfax, VA",
    complexity: "Full-stack AI research: legal AI at institutional scale",
    bullets: [
      "Core contributor to InsightLegi, a legal-AI research project; trained generative models on GCP Vertex AI",
      "Built NLP pipelines with Puppeteer, Cheerio, NLTK, and spaCy",
      "Organized a 75-person datathon achieving 94% data-validation accuracy",
      "Shipped the full-stack app (React.js + Node.js) integrating the AI backend end-to-end",
    ],
    tech: ["GCP Vertex AI", "React", "Node.js", "NLTK", "spaCy"],
  },
  {
    company: "Scale AI",
    role: "Generative AI Intern",
    dates: "May 2025 — Present",
    location: "Remote (San Francisco, CA)",
    complexity: "Frontier: LLM training & evaluation at the lab level",
    bullets: [
      "Tuned large language models for reasoning and agentic tool use by modifying model weights and optimization strategies",
      "Improved performance on SEAL benchmark suites for code and multi-step reasoning",
      "Built deterministic evaluation systems: multi-dimensional scoring rubrics, golden reference implementations, fail-to-pass unit test frameworks",
      "Ran large-scale failure-mode analysis (tool use, code generation, safety) and developed mitigations aligned with RLHF and reward modeling",
    ],
    tech: ["LLMs", "RLHF", "Evals", "Python", "PyTorch"],
    link: "https://labs.scale.com/leaderboard/sweatlas-tw",
  },
];

export const hackathons = [
  {
    name: "WellSpent",
    award: "Winner (2x)",
    event: "HackNC 2023",
    summary:
      "ML-powered financial advisor that visualizes spending patterns and predicts trends, built with R analytics and Zilliz Cloud.",
    impact:
      "Helped students see and change their spending habits — a personal-finance tool built by students, for students.",
    tech: ["R", "Zilliz Cloud", "Flutter", "Firebase"],
  },
  {
    name: "Smart Building System",
    award: "1st Place",
    event: "GMU Hackathon 2024",
    summary:
      "ML + IoT + computer vision for building energy optimization, security, and predictive maintenance.",
    impact:
      "The win that became a startup — this prototype grew into brik-e, the smart-building venture that nearly went to Y Combinator.",
    tech: ["YOLOv5", "IoT", "Computer Vision", "Python"],
  },
  {
    name: "Asclepius",
    award: "Runner-Up",
    event: "GMU Hackathon 2024",
    summary:
      "AI-powered healthcare app focused on symptom prediction and early diagnostics.",
    impact:
      "Prototyped how AI triage could reach people before conditions escalate.",
    tech: ["Python", "ML", "Healthcare AI"],
  },
  {
    name: "MediCognize",
    award: "Winner",
    event: "Princeton Hackathon",
    summary:
      "AI diagnostic tool for doctors and underserved patients, focused on accessibility and healthcare equity.",
    impact:
      "Built to close the diagnostic gap for communities with limited access to specialists.",
    tech: ["Python", "ML", "Accessibility"],
  },
];

export const startup = {
  name: "brik-e — Smart Building System",
  status: "PLACEHOLDER — links and full story coming from Arshad",
  tagline: "We were this close to a YC application.",
  story: [
    "What started as a 1st-place GMU hackathon project became a real venture: a computer-vision and IoT platform for smart buildings — custom YOLOv5 models, camera-to-world coordinate mapping, a live dashboard, and a patent draft.",
    "TODO(user): timeline, team, the YC decision, and links.",
  ],
  artifacts: [
    "Custom YOLOv5 training pipeline with Roboflow datasets",
    "Camera homography system mapping pixels to real-world coordinates",
    "React smart-building dashboard with live camera feeds",
    "Patent draft and pitch deck",
  ],
};

export const research = [
  {
    title: "E-Health & Digital Literacy in Marginalized Older Adults (DMV Area)",
    advisor: "Prof. Le-Mei Chen — GMU Dept. of Public Health",
    summary:
      "Research on improving digital and health literacy using AI-driven tools, focused on real-world deployment for underserved communities.",
    numbers: [
      { value: "500+", label: "users served by the Azure OpenAI chatbot" },
      { value: "40%", label: "increase in engagement across communities" },
    ],
  },
  {
    title: "InsightLegi — Legal AI Systems",
    advisor: "GMU Schar School of Policy & Government",
    summary:
      "Generative-AI system for legislative insight: model training on Vertex AI, NLP scraping pipelines, and a full-stack research platform.",
    numbers: [
      { value: "94%", label: "data-validation accuracy at the datathon" },
      { value: "75", label: "participants in the datathon I organized" },
    ],
  },
  {
    title: "LLM Evaluation & SEAL Benchmarks — Scale AI",
    advisor: "Scale AI, Generative AI team",
    summary:
      "Deterministic evaluation systems for frontier LLMs: scoring rubrics, golden references, fail-to-pass test frameworks, and failure-mode analysis feeding RLHF.",
    numbers: [
      { value: "SEAL", label: "public leaderboard contributions (SWE-Atlas)" },
    ],
    link: "https://labs.scale.com/leaderboard/sweatlas-tw",
  },
];

export const skills = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "C", "Swift", "SQL", "R", "MATLAB", "PHP"],
  frameworks: ["PyTorch", "TensorFlow", "Scikit-learn", "React", "Node.js", "Flask", "FastAPI", "Firebase"],
  cloud: ["GCP / Vertex AI", "Azure OpenAI", "AWS", "Docker", "Kubernetes"],
  data: ["MongoDB", "Kafka", "Elasticsearch", "RabbitMQ", "NLTK", "spaCy"],
};
