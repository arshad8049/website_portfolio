// Renders every section from the data modules and wires up interactions.
import {
  identity,
  education,
  experience,
  hackathons,
  startup,
  research,
  skills,
} from "./data/profile.js";
import { projects, categories } from "./data/projects.js";
import { renderFlowchart } from "./flowchart.js";

const $ = (id) => document.getElementById(id);

function chips(list) {
  return `<div class="chips">${list.map((t) => `<span class="chip">${t}</span>`).join("")}</div>`;
}

/* ===== Hero ===== */
$("hero-subtitle").textContent = identity.headline;
$("hero-stats").innerHTML = identity.stats
  .map((s) => `<li><strong>${s.value}</strong><span>${s.label}</span></li>`)
  .join("");

/* ===== Flowchart ===== */
renderFlowchart($("flowchart"));

/* ===== Education ===== */
$("education-cards").innerHTML = education
  .map(
    (e) => `
    <article class="card reveal${e.placeholder ? " card--placeholder" : ""}">
      <h3>${e.school}</h3>
      <div class="card__meta">${e.degree}${e.gpa ? ` · GPA ${e.gpa}` : ""}${e.dates ? ` · ${e.dates}` : ""}</div>
      <ul>${e.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
    </article>`
  )
  .join("");

/* ===== Experience (chronological = ascending complexity) ===== */
$("experience-timeline").innerHTML = experience
  .map(
    (x) => `
    <article class="card reveal">
      <span class="card__complexity">${x.complexity}</span>
      <h3>${x.role}</h3>
      <div class="card__meta">${x.company} · ${x.dates} · ${x.location}</div>
      <ul>${x.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      ${chips(x.tech)}
      ${x.link ? `<p style="margin-top:12px"><a href="${x.link}" target="_blank" rel="noopener">Public leaderboard →</a></p>` : ""}
    </article>`
  )
  .join("");

/* ===== Hackathons ===== */
$("hackathon-lead").textContent =
  "5 wins across university and Ivy League competitions — and one of them became a company.";
$("hackathon-cards").innerHTML = hackathons
  .map(
    (h) => `
    <article class="card reveal">
      <span class="card__award">${h.award} · ${h.event}</span>
      <h3>${h.name}</h3>
      <p>${h.summary}</p>
      <div class="card__impact">${h.impact}</div>
      ${chips(h.tech)}
    </article>`
  )
  .join("");

/* ===== Startup ===== */
$("startup-story").innerHTML = `
  <div class="startup reveal">
    <p class="startup__tagline">“${startup.tagline}”</p>
    ${startup.story.map((p) => `<p>${p}</p>`).join("")}
    <div class="card">
      <h3>What we actually built</h3>
      <ul>${startup.artifacts.map((a) => `<li>${a}</li>`).join("")}</ul>
    </div>
  </div>`;

/* ===== Research ===== */
$("research-cards").innerHTML = research
  .map(
    (r) => `
    <article class="card reveal">
      <h3>${r.title}</h3>
      <div class="card__meta">${r.advisor}</div>
      <p>${r.summary}</p>
      <div class="numbers">
        ${r.numbers.map((n) => `<div><strong>${n.value}</strong><span>${n.label}</span></div>`).join("")}
      </div>
      ${r.link ? `<p style="margin-top:12px"><a href="${r.link}" target="_blank" rel="noopener">View →</a></p>` : ""}
    </article>`
  )
  .join("");

/* ===== Skills ===== */
const skillGroups = [
  { title: "Languages", items: skills.languages },
  { title: "Frameworks", items: skills.frameworks },
  { title: "Cloud & DevOps", items: skills.cloud },
  { title: "Data & NLP", items: skills.data },
];
$("skills-cards").innerHTML = skillGroups
  .map(
    (g) => `
    <article class="card reveal">
      <h3>${g.title}</h3>
      ${chips(g.items)}
    </article>`
  )
  .join("");

/* ===== Projects with filter ===== */
function renderProjects(filter) {
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  $("project-cards").innerHTML = list
    .map(
      (p) => `
      <article class="card reveal is-visible">
        <h3>${p.name}</h3>
        <div class="card__meta">${p.highlight}</div>
        <p>${p.description}</p>
        ${chips(p.tech)}
      </article>`
    )
    .join("");
}

$("project-filter").innerHTML = categories
  .map((c) => `<button data-cat="${c.id}"${c.id === "all" ? ' class="is-active"' : ""}>${c.label}</button>`)
  .join("");

$("project-filter").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  document.querySelectorAll("#project-filter button").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderProjects(btn.dataset.cat);
});

renderProjects("all");

/* ===== Footer ===== */
$("footer-content").innerHTML = `
  <div>© ${new Date().getFullYear()} ${identity.name} · ${identity.location}</div>
  <div>
    <a href="mailto:${identity.email}">${identity.email}</a> ·
    <a href="${identity.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a> ·
    <a href="${identity.links.github}" target="_blank" rel="noopener">GitHub</a>
  </div>`;

/* ===== Scroll reveal ===== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        observer.unobserve(en.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ===== Mobile nav toggle ===== */
const toggle = $("nav-toggle");
const links = $("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.classList.toggle("is-open", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("is-open");
    toggle.classList.remove("is-open");
  }
});
