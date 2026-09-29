# Suyog Suryawanshi — Portfolio

Frontend Developer with 4+ years of experience building modern, responsive, and user-friendly web applications.

A single-page React portfolio built with Vite. Plain CSS, no UI framework,
so there's nothing extra to learn to edit it.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production bundle: `npm run build` (output lands in `dist/`).

## Where things live

- **All text content** — name, about copy, skills, experience, projects,
  certifications, contact details — is in one file:
  `src/data/content.js`. Edit that file to update the site; you shouldn't
  need to touch any component for a content change.
- **One section = one component**, all in `src/components/`:
  `Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Certifications`,
  `Projects`, `Contact`, `Footer`.
- **All styling** is in `src/index.css`, organized top to bottom to match
  the section order. The `:root` block at the top holds the color, font,
  and spacing variables — change a value there and it updates everywhere.

## Common edits

- **Add a project**: add an object to the `projects` array in
  `src/data/content.js`.
- **Add a job**: add an object to the `experience` array (same file).
- **Change colors**: edit the CSS variables at the top of `src/index.css`
  (`--bg-mint`, `--bg-peach`, `--accent`, etc.).
- **Change fonts**: swap the Google Fonts `<link>` in `index.html` and
  update `--font-mono` / `--font-sans` in `src/index.css`.
- **Wire up the contact form**: `src/components/Contact.jsx` currently
  opens the visitor's email client on submit (no backend). Swap the
  `handleSubmit` function for a `fetch()` call to a form service (e.g.
  Formspree, EmailJS) or your own API once you have one.

## Notes

- Fully responsive: the layout collapses to a single column and the nav
  becomes a hamburger menu under ~720px.
- The active nav link updates automatically as you scroll, using an
  `IntersectionObserver` in `Navbar.jsx`.
