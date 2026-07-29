// Research blog posts. Each post is plain data; body supports simple HTML.
// Add a new post object and it appears on the blog automatically.

export const posts = [
  {
    id: "seal-evals",
    title: "Deterministic Evaluation Systems for Frontier LLMs",
    date: "2025-11-10",
    tag: "LLM Evaluation",
    minutes: 8,
    abstract:
      "How multi-dimensional rubrics, golden reference implementations, and fail-to-pass unit tests make LLM evaluation reproducible — lessons from working on SEAL benchmark suites at Scale AI.",
    body: `
      <p>Evaluating a large language model on code and multi-step reasoning sounds simple until you try to do it twice and get two different answers. At Scale AI I worked on making evaluation <em>deterministic</em>: the same model, the same task, the same verdict, every run.</p>
      <h3>The three pillars</h3>
      <p><strong>Multi-dimensional scoring rubrics</strong> break "is this answer good?" into orthogonal axes — correctness, tool-use efficiency, safety — each scored independently. <strong>Golden reference implementations</strong> give graders a known-correct anchor instead of vibes. <strong>Fail-to-pass unit tests</strong> flip the framing: start from a failing test suite and measure whether the model's patch makes it pass.</p>
      <h3>Why failure-mode analysis matters</h3>
      <p>Large-scale failure analysis across tool use, code generation, and safety revealed that most regressions cluster into a handful of recurring modes. Mitigations aligned with RLHF and reward modeling target the mode, not the symptom.</p>
      <p><a href="https://labs.scale.com/leaderboard/sweatlas-tw" target="_blank" rel="noopener">SEAL SWE-Atlas leaderboard →</a></p>
    `,
  },
  {
    id: "insightlegi",
    title: "InsightLegi: Teaching Generative AI to Read Legislation",
    date: "2025-04-20",
    tag: "Legal AI",
    minutes: 7,
    abstract:
      "Building a legal-AI research platform at GMU's Schar School: Vertex AI model training, NLP scraping pipelines, and what a 75-person datathon taught us about data validation.",
    body: `
      <p>Legislation is written for lawyers, not language models. InsightLegi, a research project at GMU's Schar School of Policy & Government, set out to make legislative text tractable for generative AI.</p>
      <h3>The pipeline</h3>
      <p>We scraped and normalized legislative text with Puppeteer and Cheerio, then processed it with NLTK and spaCy before training on GCP Vertex AI. The full-stack layer — React on the front, Node.js behind — turned the models into a usable research tool.</p>
      <h3>The datathon</h3>
      <p>Data quality was the bottleneck, so we organized a 75-person datathon to validate the corpus. Result: <strong>94% data-validation accuracy</strong> — and a template for using structured crowd effort inside a research project.</p>
    `,
  },
  {
    id: "smart-building-cv",
    title: "SCOPE: Computer Vision for Buildings That Maintain Themselves",
    date: "2025-01-15",
    tag: "Computer Vision",
    minutes: 9,
    abstract:
      "From a 1st-place hackathon project to a near-YC startup: custom YOLOv5 models, camera homography for pixel-to-world mapping, and the economics of proactive facilities maintenance.",
    body: `
      <p>SCOPE (Smart Campus Operations & Predictive Environment) started as a hackathon question: what if a building could notice its own problems? Overflowing trash, spills in hallways, doors left open — all visible to cameras that nobody is watching.</p>
      <h3>The stack</h3>
      <p>Custom YOLOv5 models trained on Roboflow datasets detect facilities issues in DVR camera feeds. A homography calibration system maps camera pixels to real-world coordinates, so an alert says <em>where</em> in the building, not just <em>which camera</em>. A React dashboard shows live status.</p>
      <h3>From project to venture</h3>
      <p>The prototype won 1st place at the GMU Hackathon 2024 and grew into brik-e — pitch deck, patent draft, and a near-application to Y Combinator. The full story is on the <a href="../index.html#startup">startup section</a> of the main site.</p>
    `,
  },
  {
    id: "ehealth-chatbot",
    title: "An Azure OpenAI Chatbot for E-Health Literacy",
    date: "2024-08-30",
    tag: "Public Health AI",
    minutes: 6,
    abstract:
      "Deploying an AI assistant for marginalized older adults in the DMV area: 500+ users, a 40% engagement lift, and what 'real-world deployment' actually demands.",
    body: `
      <p>Under Prof. Le-Mei Chen at GMU's Department of Public Health, our research asked whether AI tools could improve digital and health literacy for marginalized older adults in the DC-Maryland-Virginia area.</p>
      <h3>Deployment over demos</h3>
      <p>We built a chatbot on Azure OpenAI and automated data collection with Azure AI. The system served <strong>500+ users</strong> and lifted engagement by <strong>40%</strong> across diverse communities.</p>
      <p>The lesson: for underserved populations, the model is the easy part. Trust, accessibility, and language matter more than parameter counts.</p>
    `,
  },
];

export const blogTags = ["All", "LLM Evaluation", "Legal AI", "Computer Vision", "Public Health AI"];
