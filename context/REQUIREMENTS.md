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