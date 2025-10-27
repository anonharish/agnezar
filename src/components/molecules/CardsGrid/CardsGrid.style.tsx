import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import { colors } from '@theme/colors';

interface CardsGridWrapperProps {
  isClient?: boolean;
}

export const CardsGridWrapper = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'isClient',
})<CardsGridWrapperProps>(({ theme, isClient }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: isClient ? 'column' : 'row',
  flexWrap:isClient?'nowrap':'wrap'
}));

export const CardBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  padding: theme.spacing(2),
  minHeight: 160,
  border: `1px solid ${(theme.palette as any)?.borders?.muted ?? colors.borders.muted}`,
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
