import { useNavigate } from 'react-router-dom';

export const useHome = () => {
  const navigate = useNavigate();

  const heroConfig = {
    title: 'Transform Your Business with Agnezar',
    subtitle: 'Innovation & Excellence',
    description: 'We deliver cutting-edge digital solutions that drive growth, enhance efficiency, and transform your business into a market leader.',
    backgroundImage: '/assets/images/hero-bg.png',
    primaryButton: {
      label: 'Get Started',
      onClick: () => navigate('/contact'),
    },
    secondaryButton: {
      label: 'Learn More',
      onClick: () => navigate('/about'),
    },
  };

  const features = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We leverage the latest technologies and methodologies to deliver solutions that keep you ahead of the competition.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Our agile development process ensures rapid delivery without compromising on quality or functionality.',
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability are built into every solution we deliver.',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business, ensuring long-term value and performance.',
    },
    {
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Every project is tailored to your specific needs and business objectives.',
    },
    {
      icon: '💼',
      title: 'Expert Team',
      description: 'Our experienced professionals bring years of industry expertise to every project.',
    },
  ];

  return {
    heroConfig,
    features,
  };
};
