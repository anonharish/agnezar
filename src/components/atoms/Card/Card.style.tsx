import { styled } from '@mui/material/styles';
import { Card as MuiCard } from '@mui/material';
import { colors } from '@theme/colors';

interface StyledCardProps {
  customVariant?: 'elevated' | 'outlined' | 'filled';
  hoverable: boolean;
}

export const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'customVariant' && prop !== 'hoverable',
})<StyledCardProps>(({ customVariant, hoverable }) => ({
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  
  ...(customVariant === 'elevated' && {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  }),
  
  ...(customVariant === 'outlined' && {
    border: `1px solid ${colors.neutral[300]}`,
    boxShadow: 'none',
  }),
  
  ...(customVariant === 'filled' && {
    backgroundColor: colors.neutral[50],
    boxShadow: 'none',
  }),
  
  ...(hoverable && {
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    },
  }),
}));
