import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useIndustries = () => {
  const navigate = useNavigate();

  const heroConfig = {
    title: 'Industries We Serve',
    description: 'We provide specialized technology solutions tailored to meet the unique challenges and opportunities across various industries.',
  };

  const industries = [
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'Digital health solutions, patient management systems, and telemedicine platforms.',
      solutions: ['EHR Systems', 'Telemedicine', 'Patient Portals', 'Medical Analytics', 'HIPAA Compliance'],
    },
    {
      icon: '🏦',
      title: 'Financial Services',
      description: 'Fintech solutions, payment processing, and regulatory compliance systems.',
      solutions: ['Mobile Banking', 'Payment Gateways', 'Risk Management', 'Compliance Tools', 'Blockchain'],
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Online marketplaces, inventory management, and customer experience platforms.',
      solutions: ['Online Stores', 'Inventory Management', 'Payment Processing', 'Analytics', 'Mobile Apps'],
    },
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'IoT solutions, supply chain management, and production optimization systems.',
      solutions: ['IoT Integration', 'Supply Chain', 'Quality Control', 'Predictive Maintenance', 'Analytics'],
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Learning management systems, virtual classrooms, and educational analytics.',
      solutions: ['LMS Platforms', 'Virtual Classrooms', 'Student Portals', 'Assessment Tools', 'Analytics'],
    },
    {
      icon: '🚗',
      title: 'Transportation',
      description: 'Fleet management, route optimization, and logistics tracking solutions.',
      solutions: ['Fleet Management', 'Route Optimization', 'Tracking Systems', 'Driver Apps', 'Analytics'],
    },
  ];

  const caseStudies = [
    {
      id: 1,
      industry: 'Healthcare',
      title: 'Digital Health Platform',
      description: 'Developed a comprehensive telemedicine platform that increased patient engagement by 300% and reduced appointment wait times by 50%.',
      results: {
        improvement: '300%',
        timeline: '6 months',
      },
    },
    {
      id: 2,
      industry: 'Financial Services',
      title: 'Mobile Banking App',
      description: 'Created a secure mobile banking application that processed over $1B in transactions and achieved 99.9% uptime.',
      results: {
        improvement: '99.9%',
        timeline: '8 months',
      },
    },
    {
      id: 3,
      industry: 'E-commerce',
      title: 'E-commerce Platform',
      description: 'Built a scalable e-commerce platform that increased sales by 250% and reduced cart abandonment by 40%.',
      results: {
        improvement: '250%',
        timeline: '4 months',
      },
    },
    {
      id: 4,
      industry: 'Manufacturing',
      title: 'IoT Manufacturing System',
      description: 'Implemented IoT sensors and analytics that reduced equipment downtime by 60% and improved efficiency by 35%.',
      results: {
        improvement: '60%',
        timeline: '10 months',
      },
    },
  ];

  const handleLearnMore = useCallback((industryTitle: string) => {
    if (industryTitle === 'Contact') {
      navigate('/contact');
    } else {
      // Handle learn more for specific industry
      console.log(`Learn more about ${industryTitle}`);
    }
  }, [navigate]);

  const handleViewCaseStudy = useCallback((caseStudyId: number) => {
    // Handle view case study
    console.log(`View case study ${caseStudyId}`);
  }, []);

  return {
    heroConfig,
    industries,
    caseStudies,
    handleLearnMore,
    handleViewCaseStudy,
  };
};
