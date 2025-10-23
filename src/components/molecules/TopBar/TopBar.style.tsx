import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledTopBar = styled(Box)(({ theme }) => ({
  backgroundColor: colors.neutral[900],
  color: colors.text.primary,
  borderBottom: `1px solid ${colors.neutral[700]}`,
  
  '& .MuiTypography-root': {
    color: colors.text.primary,
    fontSize: '0.875rem',
  },
  
  '& .MuiIconButton-root': {
    color: colors.text.secondary,
    '&:hover': {
      color: colors.primary.main,
    },
  },
  
  [theme.breakpoints.down('md')]: {
    '& .MuiContainer-root': {
      padding: '0 16px',
    },
  },
}));
