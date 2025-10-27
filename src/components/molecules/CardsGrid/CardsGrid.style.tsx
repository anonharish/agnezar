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
  justifyContent: 'center',
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
  width: 56,
  height: 56,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  background: (theme.palette as any)?.primary?.main ?? '#C74634',
  flexShrink: 0,
  marginBottom: theme.spacing(2),
}));

export default null;
