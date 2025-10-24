import { useMemo } from 'react';
import { colors } from '@theme/colors';

interface UseTypographyProps {
  color: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'warning' | 'info' | 'success' | 'white';
}

export const useTypography = ({ color }: UseTypographyProps) => {
  const getColorValue = useMemo(() => {
    const colorMap = {
      primary: colors.primary.main,
      secondary: colors.secondary.main,
      textPrimary: colors.text.primary,
      textSecondary: colors.text.secondary,
      error: colors.error.main,
      warning: colors.warning.main,
      info: colors.info.main,
      success: colors.success.main,
      white: '#ffffff',
    };
    
    return () => colorMap[color];
  }, [color]);

  return {
    getColorValue,
  };
};
