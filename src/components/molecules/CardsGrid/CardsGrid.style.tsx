import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

export const CardsGridWrapper = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const CardBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  padding: theme.spacing(2),
  minHeight: 160,
}));

export const CardIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  marginBottom: theme.spacing(2),
}));

export default null;
