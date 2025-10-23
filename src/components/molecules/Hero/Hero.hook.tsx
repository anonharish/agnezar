import { useCallback } from 'react';

interface UseHeroProps {
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
}

export const useHero = ({ primaryButton, secondaryButton }: UseHeroProps) => {
  const handlePrimaryClick = useCallback(() => {
    primaryButton?.onClick();
  }, [primaryButton]);

  const handleSecondaryClick = useCallback(() => {
    secondaryButton?.onClick();
  }, [secondaryButton]);

  return {
    handlePrimaryClick,
    handleSecondaryClick,
  };
};
