# Arshad Ahmed Shaik — Portfolio

Personal portfolio + research blog. Vanilla HTML/CSS/JS with a Spline 3D hero,
an interactive career-path flowchart, and a data-driven content model —
monochrome black/white aesthetic inspired by Spline's showcase sites.

## Structure

```
index.html            Main page (hero, flowchart, education, experience,
                      hackathons, startup, research, projects)
blog/index.html       Research blog (listing + reader, hash-linkable posts)
css/                  One stylesheet per concern
  main.css            Design tokens, nav, buttons, footer
  hero.css            Spline canvas, floating orbs, hero layout
  sections.css        Cards, timeline, chips, filters
  flowchart.css       Career flowchart styles
  blog.css            Blog listing + reader
  responsive.css      Mobile nav, mobile hero, reduced motion
js/
  main.js             Renders all sections from data modules
  spline-hero.js      Loads the Spline scene (@splinetool/runtime)
  flowchart.js        Interactive SVG career-path flowchart
  blog.js             Blog listing/reader logic
  data/               ← EDIT CONTENT HERE
    profile.js        Identity, education, experience, hackathons,
                      startup, research, skills
    projects.js       Project cards + categories
    blog.js           Blog posts (HTML bodies)
server/
  app.py              Zero-dependency Python server (static + /api)
```

## Run locally

Any static server works (ES modules need http, not file://):

```bash
python3 server/app.py            # http://localhost:8000
```

or

```bash
python3 -m http.server 8321
```

## Editing content

All site content lives in `js/data/`. Add a project, post, or job there and
the UI re-renders — no markup changes needed.

## Design notes

- Colors are CSS variables in `css/main.css` (`:root`); the site is themed
  monochrome — swap the accent tokens to re-color everything.
- The Spline hero scene is grayscaled via a CSS `filter` in `hero.css`;
  delete that line to restore the scene's original colors.
- The scene URL lives in `js/spline-hero.js` (`SCENE_URL`).
