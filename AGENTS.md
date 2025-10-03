# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Static site generation (SSG) optimized for GitHub Pages deployment.

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server with Turbopack (http://localhost:3000)
npm run lint         # Run ESLint
```

### Production Build
```bash
npm run build        # Build for production
npm run build:prod   # Build with production config (copies next.config.production.ts)
npm run deploy       # Alias for build:prod
npm run start        # Start production server
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: Formspree integration
- **Deployment**: GitHub Pages static export

### Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Homepage composition
│   └── globals.css   # Global styles and Tailwind directives
├── components/       # React components
│   ├── Hero.tsx      # Hero section
│   ├── AboutMe.tsx   # About section
│   ├── ProjectCard.tsx # Project display card
│   ├── Header.tsx    # Navigation header
│   └── Footer.tsx    # Footer with social links
├── data/            # Static data
│   └── projects.ts  # Project showcase data
├── types/           # TypeScript type definitions
│   └── project.ts   # Project interface
└── utils/           # Utility functions
```

### Key Patterns
- **Component-Based**: Small, reusable React components with single responsibilities
- **Static First**: All content built as static assets (SSG), no server-side rendering
- **Props-Driven**: Stateless components receiving data via props
- **Type Safety**: Full TypeScript coverage with interfaces for all data structures

## Development Standards

### Naming Conventions
- **Components**: PascalCase (e.g., `ProjectCard.tsx`)
- **Variables/Functions**: camelCase (e.g., `getUserData`)
- **Non-component files**: kebab-case (e.g., `api-helpers.ts`)
- **CSS**: Tailwind utility classes

### Security Requirements
- **Environment Variables**: API keys and secrets in `.env.local` (never commit)
- **Input Validation**: Client-side validation for contact form
- **External Links**: Use `rel="noopener noreferrer"` for security
- **No `dangerouslySetInnerHTML`**: Prevents XSS vulnerabilities
- **Dependency Scanning**: Keep dependencies updated and secure

### Code Style
- Follow ESLint configuration
- TypeScript strict mode enabled
- Components must have documented props via TypeScript interfaces
- Complex logic requires explanatory comments

## GitHub Pages Configuration
- **Base Path**: Configured for `/lucas-portfolio-fresh` in production
- **Static Export**: Images unoptimized for static deployment
- **GitHub Actions**: Automatic deployment on push to main branch
- **Output Directory**: Static files generated in `out/`

## Contact Form
Uses Formspree for email handling. Endpoint URL must be stored in environment variables.

## Performance Goals
- Google Lighthouse score: 90+
- Responsive: 320px to 1920px screens
- WCAG 2.1 AA accessibility compliance
- Browser support: Latest Chrome, Firefox, Safari, Edge