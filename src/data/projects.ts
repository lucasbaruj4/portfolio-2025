import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'InverBot - AI Investment Platform',
    description: 'Production-ready financial intelligence platform for the Paraguayan stock market. Full-stack RAG application with real-time chat, personalized investment recommendations, and comprehensive financial analysis for foreign investors.',
    image: '/photos/inverbot_app.avif',
    tags: ['Next.js', 'Supabase', 'Pinecone', 'RAG', 'AI Agents'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/inverbot_app',
  },
  {
    title: 'InverBot - Data Pipeline',
    description: 'Cloud-native ETL pipeline that powers the InverBot platform. Automated scraping, processing, and vector embedding of Paraguayan market data. Runs on Google Cloud Run Jobs with daily and monthly ingestion schedules.',
    image: '/photos/inverbot_pipeline.jpg',
    tags: ['Python', 'Google Cloud Run', 'Supabase', 'Pinecone', 'Playwright', 'FastAPI'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/otra_pipeline',
  },
  {
    title: 'Climate Analysis Dashboard',
    description: 'An interactive dashboard for analyzing historical climate data, built with Python.',
    image: '/photos/climate_analysis.jpg',
    tags: ['Python', 'Pandas', 'Dash', 'Plotly'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/climate_analysis',
  },
  {
    title: 'E-commerce Sales Prediction',
    description: 'A machine learning model to predict future sales for an e-commerce business using historical data. Built with Scikit-learn and Jupyter.',
    image: '/photos/ecommerce_prediction.jpg',
    tags: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'NumPy'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/ecommerce-sales-prediction',
  },
  {
    title: 'Freetime',
    description: "A full-stack Android application to help users test their adherence to their schedules and tweak them to reach better productivity levels.",
    image: '/photos/Freetime_2.png',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/freetime',
  },
];