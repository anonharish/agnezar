import { useMemo } from 'react';

interface UseLayoutProps {
  // Add any props if needed
}

export const useLayout = ({}: UseLayoutProps = {}) => {
  const topBarConfig = useMemo(() => ({
    phone: '+1 (555) 123-4567',
    email: 'hello@agnezar.com',
  }), []);

  const navbarConfig = useMemo(() => ({
    logoText: 'Agnezar',
    menuItems: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'Why Agnezar', href: '/why-agnezar' },
      // { label: 'Contact Us', href: '/contact' },
    ],
    ctaButton: {
      label: 'Login',
      onClick: () => {
        // Handle CTA click
        console.log('Get Started clicked');
      },
    },
  }), []);

  const footerConfig = useMemo(() => ({
    companyName: 'Agnezar',
    companyDescription: 'Your trusted partner in digital transformation and innovation.',
    links: [
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '/about' },
          { label: 'Our Team', href: '/team' },
          { label: 'Careers', href: '/careers' },
          { label: 'News', href: '/news' },
        ],
      },
      {
        title: 'Services',
        items: [
          { label: 'Web Development', href: '/services/web' },
          { label: 'Mobile Apps', href: '/services/mobile' },
          { label: 'Cloud Solutions', href: '/services/cloud' },
          { label: 'Consulting', href: '/services/consulting' },
        ],
      },
      {
        title: 'Support',
        items: [
          { label: 'Help Center', href: '/help' },
          { label: 'Documentation', href: '/docs' },
          { label: 'Contact', href: '/contact' },
          { label: 'Status', href: '/status' },
        ],
      },
    ],
    socialLinks: [
      {
        platform: 'LinkedIn',
        href: 'https://linkedin.com/company/agnezar',
        icon: 'LinkedIn',
      },
      {
        platform: 'Twitter',
        href: 'https://twitter.com/agnezar',
        icon: 'Twitter',
      },
      {
        platform: 'Facebook',
        href: 'https://facebook.com/agnezar',
        icon: 'Facebook',
      },
    ],
  }), []);

  return {
    topBarConfig,
    navbarConfig,
    footerConfig,
  };
};
