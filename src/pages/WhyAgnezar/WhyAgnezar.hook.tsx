import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Security, Speed, Support, Star, TrendingUp, Group } from '@mui/icons-material';

export const useWhyAgnezar = () => {
  const navigate = useNavigate();

  const heroConfig = {
    title: 'Why Choose Agnezar?',
    description: 'We combine technical expertise, industry experience, and a client-first approach to deliver exceptional results that drive your business forward.',
  };

  const advantages = [
    {
      icon: <Security fontSize="large" color="inherit" />,
      title: 'Proven Expertise',
      description: 'Our team brings years of experience and deep technical knowledge to every project.',
      features: [
        '15+ years of industry experience',
        'Certified professionals',
        'Cutting-edge technology stack',
        'Proven methodologies',
        'Continuous learning and development',
      ],
    },
    {
      icon: <Speed fontSize="large" color="inherit" />,
      title: 'Fast Delivery',
      description: 'We deliver high-quality solutions quickly without compromising on quality.',
      features: [
        'Agile development process',
        'Rapid prototyping',
        'Quick turnaround times',
        'Efficient project management',
        'On-time delivery guarantee',
      ],
    },
    {
      icon: <Support fontSize="large" color="inherit" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems run smoothly.',
      features: [
        '24/7 technical support',
        'Dedicated account managers',
        'Proactive monitoring',
        'Quick response times',
        'Comprehensive documentation',
      ],
    },
    {
      icon: <TrendingUp fontSize="large" color="inherit" />,
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business and adapt to changing needs.',
      features: [
        'Modular architecture',
        'Cloud-native solutions',
        'Auto-scaling capabilities',
        'Future-proof technology',
        'Easy maintenance and updates',
      ],
    },
    {
      icon: <Star fontSize="large" color="inherit" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure reliable solutions.',
      features: [
        'Comprehensive testing',
        'Code reviews',
        'Performance optimization',
        'Security audits',
        'Quality metrics tracking',
      ],
    },
    {
      icon: <Group fontSize="large" color="inherit" />,
      title: 'Client Partnership',
      description: 'We work as your technology partner, not just a vendor.',
      features: [
        'Collaborative approach',
        'Transparent communication',
        'Regular progress updates',
        'Flexible engagement models',
        'Long-term partnership focus',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp',
      quote: 'Agnezar transformed our digital infrastructure. Their expertise and dedication exceeded our expectations.',
    },
    {
      name: 'Michael Chen',
      position: 'CEO',
      company: 'StartupXYZ',
      quote: 'The team delivered our mobile app ahead of schedule with exceptional quality. Highly recommended!',
    },
    {
      name: 'Emily Davis',
      position: 'Product Manager',
      company: 'E-commerce Plus',
      quote: 'Their cloud migration solution saved us 40% in costs while improving performance significantly.',
    },
  ];

  const awards = [
    {
      icon: '🏆',
      title: 'Best Tech Company',
      year: '2023',
    },
    {
      icon: '⭐',
      title: 'Excellence in Innovation',
      year: '2023',
    },
    {
      icon: '🚀',
      title: 'Fastest Growing',
      year: '2022',
    },
    {
      icon: '💎',
      title: 'Client Satisfaction',
      year: '2023',
    },
  ];

  const handleGetStarted = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const handleContactUs = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const whatSetsUsApartData = {
    smallText: '',
    mainHeading: 'What sets us apart:',
    description: '',
    cards: [
      {
        title: 'End-to-End Depth',
        description:
          'From method development, impurity characterization, and stability prediction to filing-ready regulatory submissions, we cover the full CMC lifecycle. You deal with one partner — no handoffs, no miscommunications.',
      },
      {
        title: 'Regulatory-First Thinking',
        description:
          'Our lab doesn’t just run tests; we anticipate regulatory challenges. Every procedure, report, and interaction is designed to align with global health authority expectations before they become roadblocks.',
      },
      {
        title: 'AI-Driven Efficiency & Predictivity',
        description:
          'Using predictive modeling and machine learning, we cut down experimental cycles, accelerate method validation, and forecast stability issues proactively. This saves precious API, time, and budget for you.',
      },
      {
        title: 'Adaptive Startup Agility with Veteran Expertise',
        description:
          'We blend the nimbleness of a startup — fast responses, flexibility, tailored solutions — with the rigor and credibility that come from deep experience in global pharmaceutical organizations.',
      },
      {
        title: 'Strategic Partnership, Not Transactional Service',
        description:
          'We engage with your goals as our own. Whether you\'re racing against regulatory clock-times, navigating FDA inquiries, or optimizing formulations, we act as your advisor, not just a vendor.',
      },
      {
        title: 'Unmatched Transparency & Client Ownership',
        description:
          'Clear communication, real-time project updates, robust documentation, and ownership of outcomes. Errors are few, but when they occur, you’ll see resolution—not excuses.',
      },
      {
        title: 'Cost-Effectiveness Without Sacrificing Quality',
        description:
          'We optimize each step of the analytical workflow — from instrument time, resource allocation, to reporting — without compromising scientific or regulatory integrity.',
      },
      {
        title: 'Unique Promise You Won’t Find Elsewhere',
        description:
          'With Agnezar, your analytical strategy becomes predictive, your regulatory path becomes navigable, and your timelines shrink—without sacrificing accuracy or compliance.',
      },
    ],
  };

  return {
    heroConfig,
    advantages,
    testimonials,
    awards,
    whatSetsUsApartData,
    handleGetStarted,
    handleContactUs,
  };
};
