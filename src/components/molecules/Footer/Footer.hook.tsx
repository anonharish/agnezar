import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseFooterProps {
  // Add any props if needed
}

export const useFooter = ({}: UseFooterProps = {}) => {
  const navigate = useNavigate();

  const handleLinkClick = useCallback((event: React.MouseEvent, href: string) => {
    // Check if it's an internal link
    if (href.startsWith('/')) {
      event.preventDefault();
      navigate(href);
    }
    // External links will open normally
  }, [navigate]);

  return {
    handleLinkClick,
  };
};
