// Blog listing + reader. Uses location.hash (#post-id) so posts are linkable.
import { posts, blogTags } from "./data/blog.js";
import { identity } from "./data/profile.js";

const $ = (id) => document.getElementById(id);

const fmtDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

/* ===== Listing ===== */
function renderList(tag) {
  const list = tag === "All" ? posts : posts.filter((p) => p.tag === tag);
  $("blog-list").innerHTML = list
    .map(
      (p) => `
      <article class="card blog-card" data-id="${p.id}" tabindex="0" role="link" aria-label="Read: ${p.title}">
        <div class="blog-card__meta">
          <span class="chip">${p.tag}</span>
          <span>${fmtDate(p.date)} · ${p.minutes} min read</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.abstract}</p>
        <span class="blog-card__more">Read →</span>
      </article>`
    )
    .join("");
}

$("blog-filter").innerHTML = blogTags
  .map((t) => `<button data-tag="${t}"${t === "All" ? ' class="is-active"' : ""}>${t}</button>`)
  .join("");

$("blog-filter").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  document.querySelectorAll("#blog-filter button").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderList(btn.dataset.tag);
});

/* ===== Reader ===== */
function openPost(id) {
  const p = posts.find((x) => x.id === id);
  if (!p) return;
  $("blog-article").innerHTML = `
    <div class="blog-card__meta">
      <span class="chip">${p.tag}</span>
      <span>${fmtDate(p.date)} · ${p.minutes} min read</span>
    </div>
    <h1>${p.title}</h1>
    ${p.body}`;
  document.querySelector(".blog-list").parentElement.hidden = true;
  $("blog-reader").hidden = false;
  window.scrollTo({ top: 0 });
  document.title = `${p.title} — ${identity.name}`;
}

function closePost() {
  $("blog-reader").hidden = true;
  document.querySelector(".blog-list").parentElement.hidden = false;
  document.title = `Research Blog — ${identity.name}`;
  history.replaceState(null, "", location.pathname);
}

$("blog-list").addEventListener("click", (e) => {
  const card = e.target.closest(".blog-card");
  if (card) location.hash = card.dataset.id;
});

$("blog-list").addEventListener("keydown", (e) => {
  const card = e.target.closest(".blog-card");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    location.hash = card.dataset.id;
  }
});

$("blog-back").addEventListener("click", closePost);

window.addEventListener("hashchange", () => {
  const id = location.hash.slice(1);
  id ? openPost(id) : closePost();
});

/* ===== Footer + init ===== */
$("footer-content").innerHTML = `
  <div>© ${new Date().getFullYear()} ${identity.name} · ${identity.location}</div>
  <div>
    <a href="mailto:${identity.email}">${identity.email}</a> ·
    <a href="${identity.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a> ·
    <a href="${identity.links.github}" target="_blank" rel="noopener">GitHub</a>
  </div>`;

renderList("All");
if (location.hash) openPost(location.hash.slice(1));
