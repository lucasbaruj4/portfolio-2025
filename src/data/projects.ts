import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Climate Analysis Dashboard',
    description: 'An interactive dashboard for analyzing historical climate data, built with Python.',
    image: './photos/climate_analysis.jpg',
    tags: ['Python', 'Pandas', 'Dash', 'Plotly'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/climate_analysis',
  },
  {
    title: 'E-commerce Sales Prediction',
    description: 'A machine learning model to predict future sales for an e-commerce business using historical data. Built with Scikit-learn and Jupyter.',
    image: './photos/ecommerce_prediction.jpg',
    tags: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'NumPy'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/ecommerce-sales-prediction',
  },
  {
    title: 'Freetime',
    description: "A full-stack Android application to help users test their adherence to their schedules and tweak them to reach better productivity levels.",
    image: './photos/Freetime_2.png',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    liveDemoLink: '',
    sourceCodeLink: 'https://github.com/lucasbaruj4/freetime',
  },
];