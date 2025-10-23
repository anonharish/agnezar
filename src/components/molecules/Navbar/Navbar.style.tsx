import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledNavbar = styled(Box)(({ theme }) => ({
  '& .MuiAppBar-root': {
    backgroundColor: colors.background.default,
    color: colors.text.primary,
    borderBottom: `1px solid ${colors.neutral[200]}`,
  },
  
  '& .MuiToolbar-root': {
    minHeight: 64,
    padding: '0 24px',
    
    [theme.breakpoints.down('md')]: {
      padding: '0 16px',
    },
  },
}));
