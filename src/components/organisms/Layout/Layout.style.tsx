import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledLayout = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingTop: 'calc(40px + 64px)',
}));
