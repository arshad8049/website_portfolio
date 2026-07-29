// Interactive SVG career-path flowchart.
// Nodes are laid out on a simple grid; edges are cubic curves between them.

const NODES = [
  {
    id: "gmu",
    title: "GMU — B.S. CS",
    sub: "2022 · Fairfax, VA",
    detail:
      "Started Computer Science at George Mason University. Dean's List 4x, Mason Distinction & Idea Scholarships. GPA 3.6.",
    col: 0, row: 1,
  },
  {
    id: "rise",
    title: "Rise Consultancy",
    sub: "2023 · ML Intern",
    detail:
      "First applied-ML role: personalized learning system that improved student success rates by 20% in 3 months.",
    col: 1, row: 0,
  },
  {
    id: "hackathons",
    title: "5x Hackathon Wins",
    sub: "2023–2024",
    detail:
      "WellSpent (2x, HackNC), Smart Building (1st, GMU), Asclepius (Runner-up), MediCognize (Winner, Princeton).",
    col: 1, row: 2, badge: "5x",
  },
  {
    id: "publichealth",
    title: "GMU Public Health",
    sub: "2024 · ML Research",
    detail:
      "Azure OpenAI chatbot serving 500+ users; engagement up 40% across underserved communities in the DMV area.",
    col: 2, row: 0,
  },
  {
    id: "startup",
    title: "brik-e (Startup)",
    sub: "2024–2025 · Founder",
    detail:
      "Smart-building CV + IoT venture born from the hackathon win. Patent draft, pitch deck, live dashboard — one step short of a YC application.",
    col: 2, row: 2, badge: "YC−1",
  },
  {
    id: "schar",
    title: "GMU Schar School",
    sub: "2024–now · SDE Research",
    detail:
      "InsightLegi legal-AI platform: Vertex AI training, NLP pipelines, 75-person datathon at 94% validation accuracy.",
    col: 3, row: 0,
  },
  {
    id: "scale",
    title: "Scale AI",
    sub: "2025–now · GenAI Intern",
    detail:
      "LLM tuning for reasoning and agentic tool use, SEAL benchmark improvements, deterministic eval systems, RLHF-aligned mitigations.",
    col: 3, row: 1,
  },
  {
    id: "aviation",
    title: "CTC Aviation Science",
    sub: "Fall 2026 · The pivot ✈",
    detail:
      "Central Texas College, Killeen TX: A.A.S. Aviation Science + Commercial Pilot certificate at an FAA Part 141 flight school. 62 GMU credits transferred; OPT withdrawn to chase the sky. Private Pilot → Instrument → Commercial → CFI → ATP.",
    col: 4, row: 1, pivot: true,
  },
];

const EDGES = [
  ["gmu", "rise"],
  ["gmu", "hackathons"],
  ["rise", "publichealth"],
  ["hackathons", "startup"],
  ["publichealth", "schar"],
  ["startup", "scale"],
  ["schar", "scale"],
  ["scale", "aviation"],
];

const NODE_W = 168;
const NODE_H = 64;
const COL_GAP = 210;
const ROW_GAP = 100;
const PAD = 24;

function nodeCenter(n) {
  return {
    x: PAD + n.col * COL_GAP + NODE_W / 2,
    y: PAD + n.row * ROW_GAP + NODE_H / 2,
  };
}

export function renderFlowchart(container) {
  const cols = Math.max(...NODES.map((n) => n.col)) + 1;
  const rows = Math.max(...NODES.map((n) => n.row)) + 1;
  const width = PAD * 2 + (cols - 1) * COL_GAP + NODE_W;
  const height = PAD * 2 + (rows - 1) * ROW_GAP + NODE_H;

  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  const edgePaths = EDGES.map(([a, b]) => {
    const p1 = nodeCenter(byId[a]);
    const p2 = nodeCenter(byId[b]);
    const mx = (p1.x + p2.x) / 2;
    return `<path class="fc-edge" d="M ${p1.x} ${p1.y} C ${mx} ${p1.y}, ${mx} ${p2.y}, ${p2.x} ${p2.y}" />`;
  }).join("");

  const nodeEls = NODES.map((n) => {
    const x = PAD + n.col * COL_GAP;
    const y = PAD + n.row * ROW_GAP;
    const badge = n.badge
      ? `<rect class="fc-badge" x="${x + NODE_W - 40}" y="${y - 10}" width="40" height="20" rx="10"></rect>
         <text class="fc-badge-text" x="${x + NODE_W - 20}" y="${y + 4}" text-anchor="middle">${n.badge}</text>`
      : "";
    return `
      <g class="fc-node${n.pivot ? " fc-node--pivot" : ""}" data-id="${n.id}" tabindex="0" role="button" aria-label="${n.title}">
        <rect x="${x}" y="${y}" width="${NODE_W}" height="${NODE_H}" rx="12"></rect>
        <text x="${x + 14}" y="${y + 26}" font-size="13">${n.title}</text>
        <text class="fc-node__sub" x="${x + 14}" y="${y + 46}" font-size="11">${n.sub}</text>
        ${badge}
      </g>`;
  }).join("");

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Career path flowchart">
      <defs>
        <linearGradient id="fc-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#9a9a9a"/>
        </linearGradient>
      </defs>
      ${edgePaths}
      ${nodeEls}
    </svg>
    <div class="fc-detail" id="fc-detail">
      <h4>Click a node</h4>
      <p>Every step of the path, from first CS class to the cockpit — tap any node to read the story.</p>
    </div>`;

  const detail = container.querySelector("#fc-detail");

  function select(id) {
    const n = byId[id];
    if (!n) return;
    container.querySelectorAll(".fc-node").forEach((el) =>
      el.classList.toggle("is-active", el.dataset.id === id)
    );
    detail.classList.add("is-swapping");
    setTimeout(() => {
      detail.innerHTML = `<h4>${n.title} <span style="color:var(--text-dim);font-weight:500;font-size:.85em">${n.sub}</span></h4><p>${n.detail}</p>`;
      detail.classList.remove("is-swapping");
    }, 180);
  }

  container.querySelectorAll(".fc-node").forEach((el) => {
    el.addEventListener("click", () => select(el.dataset.id));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select(el.dataset.id);
      }
    });
  });
}
