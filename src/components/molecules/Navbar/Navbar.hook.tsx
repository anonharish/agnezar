import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseNavbarProps {
  // Add any props if needed
}

export const useNavbar = ({}: UseNavbarProps = {}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleMenuClick = useCallback((href: string) => {
    navigate(href);
    closeMobileMenu();
  }, [navigate, closeMobileMenu]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    handleMenuClick,
  };
};
