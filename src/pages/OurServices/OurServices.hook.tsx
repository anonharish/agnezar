import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useOurServices = () => {
  const navigate = useNavigate();

  const heroConfig = {
    title: 'Our Services',
    description: 'We offer comprehensive technology solutions designed to transform your business and drive growth.',
  };

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure', 'Scalable'],
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Performance', 'Cross-Platform', 'App Store Ready', 'Push Notifications', 'Offline Support'],
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS/Azure/GCP', 'Auto Scaling', 'Cost Optimization', 'Security', 'Monitoring'],
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Automation'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business and data.',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring', 'Incident Response'],
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Predictive Modeling', 'Reporting'],
    },
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'We understand your business goals, challenges, and requirements through detailed consultation.',
    },
    {
      title: 'Planning',
      description: 'We create a comprehensive project plan with timelines, milestones, and deliverables.',
    },
    {
      title: 'Development',
      description: 'Our expert team builds your solution using agile methodologies and best practices.',
    },
    {
      title: 'Deployment',
      description: 'We deploy your solution and provide ongoing support to ensure success.',
    },
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'GraphQL', category: 'API' },
    { name: 'TypeScript', category: 'Language' },
  ];

  const handleGetQuote = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const handleLearnMore = useCallback((serviceTitle: string) => {
    // Handle learn more for specific service
    console.log(`Learn more about ${serviceTitle}`);
  }, []);

  return {
    heroConfig,
    services,
    process,
    technologies,
    handleGetQuote,
    handleLearnMore,
  };
};
