import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
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
  flexWrap:isClient?'nowrap':'wrap',
  [theme.breakpoints.down("sm")]: {
     marginTop: theme.spacing(0),
    },
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
  [theme.breakpoints.down("md")]: {
      width: 45,
      height: 45,
      padding: theme.spacing(0, 0),
    },

    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
      padding: theme.spacing(0, 0),
    },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  fontSize: '1.5rem',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.2rem',
  },
}));

export default null;
