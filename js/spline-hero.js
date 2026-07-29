// Loads the Spline 3D scene into the hero canvas using the vanilla runtime.
// Scene: user's Spline export (ZVYbrDXPQjhVKJvd).
import { Application } from "https://unpkg.com/@splinetool/runtime@1.9.28/build/runtime.js";

const SCENE_URL = "https://prod.spline.design/ZVYbrDXPQjhVKJvd/scene.splinecode";

const canvas = document.getElementById("spline-canvas");

async function initSpline() {
  if (!canvas) return;
  canvas.classList.add("is-loading");

  try {
    const app = new Application(canvas);
    await app.load(SCENE_URL);
    canvas.classList.remove("is-loading");
  } catch (err) {
    // If the scene fails (offline, blocked CDN), fall back to a static gradient
    console.error("Spline scene failed to load:", err);
    canvas.style.display = "none";
    document.querySelector(".hero").classList.add("hero--no-spline");
  }
}

// Defer loading slightly so first paint (text content) is instant
if ("requestIdleCallback" in window) {
  requestIdleCallback(initSpline);
} else {
  setTimeout(initSpline, 200);
}

// Parallax drift for the floating orbs, follows the pointer subtly
const orbs = document.querySelectorAll(".hero__float");
let raf = null;

window.addEventListener("pointermove", (e) => {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    const dx = (e.clientX / window.innerWidth - 0.5) * 2;
    const dy = (e.clientY / window.innerHeight - 0.5) * 2;
    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 8;
      orb.style.translate = `${dx * depth}px ${dy * depth}px`;
    });
    raf = null;
  });
});
