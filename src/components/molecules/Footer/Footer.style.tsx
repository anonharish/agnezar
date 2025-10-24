import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledFooter = styled(Box)(() => ({
  backgroundColor: colors.neutral[900],
  color: colors.text.primary,
  marginTop: 'auto',
  
  '& .MuiTypography-root': {
    color: colors.text.primary,
  },
  
  '& .MuiLink-root': {
    color: colors.text.secondary,
    '&:hover': {
      color: colors.primary.main,
    },
  },
  
  '& .MuiDivider-root': {
    borderColor: colors.neutral[700],
  },
}));
