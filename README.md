# Lucas Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases software development projects and skills in a modern, responsive design.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Static Site Generation**: Fast loading with Next.js static export
- **Modern UI**: Built with Tailwind CSS and Framer Motion
- **Contact Form**: Integrated with Formspree for easy communication
- **Project Gallery**: Showcase your work with live demos and source code links

## Getting Started

### Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will generate static files in the `out/` directory.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project: `npm run build`
2. The static files will be generated in the `out/` directory
3. Deploy the contents of the `out/` directory to your web server

### GitHub Pages Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the project on every push to the main branch
- Deploys the static files to GitHub Pages

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Select "GitHub Actions" as the source
4. The site will be available at `https://yourusername.github.io/lucas-portfolio-fresh`

## Configuration

- **Base Path**: Configured for GitHub Pages deployment at `/lucas-portfolio-fresh`
- **Images**: Optimized for static export with unoptimized images
- **Contact Form**: Uses Formspree for form handling

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)
