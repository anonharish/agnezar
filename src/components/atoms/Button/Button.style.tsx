import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';
import { colors } from '@theme/colors';

interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'text';
  size: 'small' | 'medium' | 'large';
}

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'size',
})<StyledButtonProps>(({ theme, variant, size }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  
  ...(size === 'small' && {
    padding: '8px 16px',
    fontSize: '0.875rem',
  }),
  
  ...(size === 'medium' && {
    padding: '12px 24px',
    fontSize: '1rem',
  }),
  
  ...(size === 'large' && {
    padding: '16px 32px',
    fontSize: '1.125rem',
  }),
  
  ...(variant === 'primary' && {
    backgroundColor: colors.primary.main,
    color: colors.primary.contrastText,
    '&:hover': {
      backgroundColor: colors.primary.dark,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
    },
  }),
  
  ...(variant === 'secondary' && {
    backgroundColor: colors.secondary.main,
    color: colors.secondary.contrastText,
    '&:hover': {
      backgroundColor: colors.secondary.dark,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(229, 62, 62, 0.3)',
    },
  }),
  
  ...(variant === 'outline' && {
    backgroundColor: 'transparent',
    color: colors.primary.main,
    border: `2px solid ${colors.primary.main}`,
    '&:hover': {
      backgroundColor: colors.primary.main,
      color: colors.primary.contrastText,
      transform: 'translateY(-2px)',
    },
  }),
  
  ...(variant === 'text' && {
    backgroundColor: 'transparent',
    color: colors.primary.main,
    '&:hover': {
      backgroundColor: colors.neutral[100],
    },
  }),
}));
