import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledNavbar = styled(Box)(({ theme }) => ({
  '& .MuiAppBar-root': {
    position: 'fixed',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: colors.background.default,
    color: colors.text.primary,
    borderBottom: `1px solid ${colors.neutral[200]}`,
    zIndex: (theme.zIndex as any)?.appBar ?? 1200,
  },
  
  '& .MuiToolbar-root': {
    minHeight: 64,
    padding: '0 24px',
    
    [theme.breakpoints.down('md')]: {
      padding: '0 16px',
    },
  },
}));
