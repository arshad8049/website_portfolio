// Framer-style motion layer, built on the GSAP presets from ui-ux-pro-max:
// scroll reveals (power1.out, small y), subtle parallax (yPercent 5-15,
// decorative layers only), headline char stagger (expo.out, headlines only),
// and magnetic hover (quickTo, clamped, max 2 focal elements).
// Degrades gracefully: no GSAP or reduced-motion → the CSS .reveal fallback runs.

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const gsapReady = typeof window.gsap !== "undefined";

if (gsapReady && !reducedMotion) {
  const { gsap } = window;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  // Safety net: rAF (and therefore GSAP's clock) freezes in hidden/background
  // tabs, which would leave intro content stuck at opacity 0. setTimeout keeps
  // running, so force-finish any stalled intro tweens after a grace period.
  const introTweens = [];
  setTimeout(() => {
    introTweens.forEach((t) => {
      if (t.progress() < 1) t.progress(1);
    });
  }, 4000);

  /* ===== Hero headline: char stagger (hand-rolled, no SplitText) ===== */
  const title = document.querySelector(".hero__title");
  if (title) {
    const chars = [];
    [...title.childNodes].forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const frag = document.createDocumentFragment();
      for (const ch of node.textContent) {
        if (ch.trim() === "") {
          frag.appendChild(document.createTextNode(ch));
        } else {
          const s = document.createElement("span");
          s.className = "char";
          s.textContent = ch;
          frag.appendChild(s);
          chars.push(s);
        }
      }
      title.replaceChild(frag, node);
    });
    introTweens.push(
      gsap.from(chars, {
        opacity: 0,
        y: 20,
        rotateX: -40,
        duration: 0.6,
        stagger: 0.015,
        ease: "expo.out",
        delay: 0.15,
      })
    );
  }

  /* ===== Hero entrance for supporting elements ===== */
  introTweens.push(
    gsap.from(
      [".hero__eyebrow", ".hero__subtitle", ".hero__cta", ".hero__stats li"],
      { opacity: 0, y: 14, duration: 0.5, stagger: 0.08, ease: "power1.out", delay: 0.4 }
    )
  );

  /* ===== Scroll reveals (replaces the IO fallback) ===== */
  if (window.ScrollTrigger) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible"); // neutralize CSS fallback; GSAP owns it now
      gsap.from(el, {
        opacity: 0,
        y: 12,
        duration: 0.35,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
      });
    });

    /* ===== Subtle parallax: decorative layers only ===== */
    gsap.utils.toArray(".hero__float").forEach((layer, i) => {
      gsap.to(layer, {
        yPercent: (i + 1) * -8,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.5 },
      });
    });
    gsap.to(".hero__spline", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
  }

  /* ===== Magnetic CTAs (hero only — max 2 focal elements) ===== */
  document.querySelectorAll(".hero__cta .btn").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "elastic.out(1,0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "elastic.out(1,0.4)" });
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.3);
    });
    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}
