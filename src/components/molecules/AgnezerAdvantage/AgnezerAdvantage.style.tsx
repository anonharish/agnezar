import { styled } from '@mui/material/styles';
import { Box, Typography as MuiTypography, Grid } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledAdvantage = styled(Box)(({ theme }) => ({
  backgroundColor: (theme.palette as any)?.secondary?.main ?? colors.secondary.main,
  color: '#fff',
  padding: theme.spacing(8, 0),
}));

export const AdvantageInner = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: '0 auto',
  padding: theme.spacing(0, 3),
}));

export const AdvantageTopSmall = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.secondary?.contrastText ?? '#C74634',
  textTransform: 'uppercase',
  fontWeight: 700,
  textAlign: 'center',
}));

export const AdvantageTitle = styled(MuiTypography)(({ theme }) => ({
  color: '#fff',
  textAlign: 'center',
  fontWeight: 700,
  marginTop: theme.spacing(2),
}));

export const AdvantageDesc = styled(MuiTypography)(({ theme }) => ({
  color: '#fff',
  textAlign: 'center',
  marginTop: theme.spacing(2),
  maxWidth: 900,
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const CardsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));

export const AdvantageCardInner = styled(Box)(({ theme }) => ({
  background: '#fff',
  padding: theme.spacing(4),
  borderRadius: 6,
  minHeight: 160,
}));

export const CardIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 8,
  background: (theme.palette as any)?.secondary?.main ?? colors.secondary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  marginBottom: theme.spacing(2),
}));
