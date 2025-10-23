import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));
