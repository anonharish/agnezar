import { useState, useCallback } from 'react';

interface UseButtonProps {
  onClick?: () => void;
  loading?: boolean;
}

export const useButton = ({ onClick, loading }: UseButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(async () => {
    if (loading || isLoading) return;
    
    setIsLoading(true);
    try {
      await onClick?.();
    } finally {
      setIsLoading(false);
    }
  }, [onClick, loading, isLoading]);

  return {
    handleClick,
    isLoading: loading || isLoading,
  };
};
