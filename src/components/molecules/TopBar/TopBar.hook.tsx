import { useMemo } from 'react';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

interface UseTopBarProps {
  // Add any props if needed
}

export const useTopBar = ({}: UseTopBarProps = {}) => {
  const defaultSocialLinks = useMemo(() => [
    {
      platform: 'Facebook',
      href: 'https://facebook.com/agnezar',
      icon: <Facebook fontSize="small" />,
    },
    {
      platform: 'Twitter',
      href: 'https://twitter.com/agnezar',
      icon: <Twitter fontSize="small" />,
    },
    {
      platform: 'LinkedIn',
      href: 'https://linkedin.com/company/agnezar',
      icon: <LinkedIn fontSize="small" />,
    },
    {
      platform: 'Instagram',
      href: 'https://instagram.com/agnezar',
      icon: <Instagram fontSize="small" />,
    },
  ], []);

  return {
    defaultSocialLinks,
  };
};
