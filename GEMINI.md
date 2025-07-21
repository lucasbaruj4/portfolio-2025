---
alwaysApply: true
---
# Development Rules and Standards

This document defines the development standards for the personal portfolio project. All code, including contributions from AI assistants, must adhere to these rules.

## 1. Code Style and Formatting
- **Linter/Formatter:** The project will use ESLint and Prettier, configured to run on pre-commit hooks.
- **JavaScript/TypeScript:** Follow the Airbnb Style Guide for general best practices.

## 2. Architecture and Design Principles
- **Component-Based Architecture:** The UI must be built with small, reusable, single-responsibility React components.
- **Static First:** All pages and content must be buildable as static assets (SSG). Client-side rendering (CSR) should be used only where absolutely necessary.
- **Props-Driven:** Components should be stateless where possible, receiving data and callbacks via props.

## 3. Naming Conventions
- **Components:** PascalCase (e.g., `ProjectCard.tsx`).
- **Variables/Functions:** camelCase (e.g., `getUserData`).
- **CSS Utility Classes:** Follow Tailwind CSS conventions.
- **Files:** Use kebab-case for non-component files (e.g., `api-helpers.ts`).

## 4. MANDATORY SECURITY GUARDRAILS (AI MUST FOLLOW)
- **NEVER Store Secrets in Code:** All API keys, endpoint URLs, or other secrets MUST be stored in environment variables (`.env.local`) and this file MUST be included in `.gitignore`. The AI assistant is forbidden from hardcoding any secret.
- **ALWAYS Validate and Sanitize Inputs:** While this project has minimal input, the principle applies. The contact form must have robust client-side validation.
- **USE SECURE DEFAULTS:** When using external libraries (e.g., Framer Motion, Formspree), use them according to their security best practices. Links in project data should have `rel="noopener noreferrer"` to prevent tabnabbing.
- **NO `dangerouslySetInnerHTML`:** The AI assistant is prohibited from using this React property to prevent XSS vulnerabilities.
- **ENABLE DEPENDENCY SCANNING:** GitHub's Dependabot must be enabled on the repository to automatically detect and report vulnerable dependencies.

## 5. Testing Requirements
- **Manual Testing:** Thoroughly test all functionality on major browsers and devices (or via browser dev tools).
- **Component Storybook (Optional):** For larger projects, use Storybook to develop and test components in isolation.
- **Validation:** Test all links, form submissions, and responsive breakpoints.

## 6. Git Workflow
- **Branching:** Use feature branches for new development (e.g., `feature/contact-form`).
- **Commit Messages:** Follow the Conventional Commits specification (e.g., `feat: add project gallery section`).
- **Pull Requests:** All code must be reviewed via a Pull Request before merging to `main`.

## 7. Documentation
- **Component Props:** All React components must have their props documented using TypeScript interfaces or JSDoc.
- **Complex Logic:** Any non-obvious code or complex algorithm must be accompanied by a clear comment explaining its purpose.

# Project Requirements: Personal Portfolio Website

## 1. Project Overview and Objectives
This document outlines the requirements for a personal portfolio website. The primary objective is to create a professional, stylish, and high-performance static website to showcase software development projects. The site will serve as a digital resume and point of contact for recruiters, potential clients, and collaborators. The final product will be deployed and hosted on GitHub Pages.

## 2. Functional Requirements

### 2.1. User Stories
- **As a Recruiter,** I want to quickly understand who the person is and what their core skills are.
- **As a Recruiter,** I want to view a gallery of their projects with clear descriptions and links to live demos and source code.
- **As a Potential Client,** I want to easily find a way to contact them to discuss a project.
- **As a User,** I want to have a seamless experience whether I'm on my phone or a desktop computer.

### 2.2. Features
- **Homepage:** Contains an "About Me" section with a professional photo, a short bio, and a summary of key skills.
- **Project Gallery:** Displays projects in a card-based, responsive grid.
  - Each card must display: Project Title, Image/Thumbnail, Short Description, Technology Tags.
  - Each card must contain two buttons: "Live Demo" and "Source Code."
- **Contact Form:**
  - Fields: Name (required), Email (required, must be valid format), Message (required).
  - A success message will be displayed upon successful submission.
  - An error message will be displayed upon failed submission.
- **Navigation:** A persistent, responsive header with links to all main sections of the site.
- **Footer:** Contains links to professional social profiles (GitHub, LinkedIn) and a copyright notice.

## 3. Non-Functional Requirements
- **Performance:** The site must achieve a Google Lighthouse performance score of 90+.
- **Responsiveness:** The site must be fully functional and visually appealing on screen widths from 320px to 1920px.
- **Accessibility:** Must strive for WCAG 2.1 AA compliance, including semantic HTML, ARIA attributes where necessary, and keyboard navigability.
- **Browser Compatibility:** Must render correctly on the latest versions of Chrome, Firefox, Safari, and Edge.

## 4. SECURITY REQUIREMENTS
- **Data Protection:** No sensitive user data shall be stored. The contact form will directly forward data to an email address via a third-party service (Formspree) and will not be stored on any server controlled by this project.
- **Input Validation:** All user-submitted data via the contact form must be validated on the client-side before submission to prevent invalid data.
- **Third-Party Service Security:** The Formspree endpoint URL must be treated as a secret and stored in environment variables, not committed to the repository.
- **Dependency Management:** The project must use `npm audit` or Dependabot to monitor for vulnerabilities in third-party packages.
- **Cross-Site Scripting (XSS) Prevention:** Although the site is static, all data rendered from the `projects.ts` file must be treated as trusted content. Avoid using `dangerouslySetInnerHTML` in React.

## 5. Threat Model and Security Assumptions
- **Threat Agent:** Malicious user attempting to abuse the contact form.
- **Attack Vector:** Submitting spam, malicious links, or attempting script injection through form fields.
- **Mitigation:** Client-side validation reduces spam/invalid data. The use of a reputable third-party form handler (Formspree) offloads the risk of server-side vulnerabilities. The static nature of the site prevents database injection or server-side code execution attacks.
- **Assumption:** The content within `src/data/projects.ts` is static, trusted, and managed by the developer. It is not user-generated.

## 6. Technical Constraints
- The application must be a static site.
- It must be deployable on GitHub Pages.
- No backend server or database is permitted.

## 7. Success Metrics
- The website is successfully deployed and accessible via its `github.io` URL.
- All functional requirements are met and tested.
- All non-functional requirements (performance, responsiveness) are met.
- The contact form successfully sends emails.