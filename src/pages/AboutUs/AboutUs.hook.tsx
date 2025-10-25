import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAboutUs = () => {
  const navigate = useNavigate();

  const heroConfig = {
    title: 'About Agnezar',
    description: 'Agnezar is a next-generation Analytical Service Laboratory committed to advancing the quality, safety, and innovation of pharmaceutical products. We provide comprehensive analytical solutions that empower research, development, and manufacturing teams to achieve excellence in every stage of the product lifecycle.',
  };

  const mission = 'To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We believe in creating lasting partnerships and delivering exceptional value to our clients through our expertise and dedication.';

  const vision = 'To be the global leader in digital transformation, recognized for our innovative solutions, exceptional service, and commitment to client success. We envision a future where technology seamlessly integrates with business goals to create unprecedented opportunities.';

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity and transparency in all our business relationships.',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We embrace innovation and continuously seek new ways to solve complex business challenges.',
    },
    {
      icon: '👥',
      title: 'Collaboration',
      description: 'We believe in the power of collaboration and work closely with our clients to achieve shared goals.',
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'We are committed to the growth and success of our clients, team, and company.',
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'We aim to make a positive impact on the world through our technology solutions and services.',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of experience in technology and business strategy.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      bio: 'Technology expert specializing in cloud architecture and digital transformation.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Mike Chen',
      position: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating scalable and efficient solutions.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Davis',
      position: 'Design Director',
      bio: 'Creative designer focused on user experience and modern interface design.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'David Wilson',
      position: 'Project Manager',
      bio: 'Experienced project manager ensuring timely delivery and client satisfaction.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Lisa Brown',
      position: 'Marketing Director',
      bio: 'Marketing strategist with expertise in digital marketing and brand development.',
      avatar: 'https://via.placeholder.com/150',
    },
  ];

  const handleContactUs = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  return {
    heroConfig,
    mission,
    vision,
    values,
    team,
    handleContactUs,
  };
};
