import { useCallback } from 'react';

interface UseCardProps {
  hoverable: boolean;
}

export const useCard = ({ hoverable }: UseCardProps) => {
  const handleMouseEnter = useCallback(() => {
    if (hoverable) {
      // Add hover effects if needed
    }
  }, [hoverable]);

  const handleMouseLeave = useCallback(() => {
    if (hoverable) {
      // Remove hover effects if needed
    }
  }, [hoverable]);

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
};
