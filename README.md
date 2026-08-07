# Priyadharshini T — Developer Portfolio

A premium, dark-themed, glassmorphic portfolio built with React.js, Vite, Framer Motion, React Icons and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## Editing content

All resume content (name, projects, skills, experience, certifications, contact info) lives in one place:

```
src/data/portfolioData.js
```

Edit that file to update copy anywhere on the site — no need to touch components.

## Replacing the resume PDF

Drop your PDF into `public/resume/` and update `resumePdf` in `src/data/portfolioData.js` if you rename the file. The current file is `Priyadharshini_T_Resume.pdf` (your uploaded resume).

## Adding a profile photo

Replace the placeholder "PT" monogram in `src/components/Hero/Hero.jsx` (the `.hero__portrait-placeholder` div) with an `<img>` tag pointing to a photo placed in `src/assets/`.

## Adding a new project

Add an object to the `projects` array in `src/data/portfolioData.js` — the Projects section renders automatically from this array (image/color, name, description, tech stack, links).

## Folder structure

```
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Certifications/
│   ├── Resume/
│   ├── Contact/
│   ├── Footer/
│   └── common/        (Reveal, GradientButton — shared building blocks)
├── data/
│   └── portfolioData.js
├── hooks/
│   └── useActiveSection.js
├── App.jsx
└── main.jsx
```
