import { styled } from '@mui/material/styles';
import { Box, Typography as MuiTypography } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledAdvantage = styled(Box)(({ theme }) => ({
  backgroundColor: (theme.palette as any)?.secondary?.main ?? colors.secondary.main,
  color: '#fff',
  padding: theme.spacing(0,0, 8, 0),
}));

interface AdvantageInnerProps {
  isClient?: boolean;
}

export const AdvantageInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isClient",
})<AdvantageInnerProps>(({ theme, isClient }) => ({
  maxWidth: "90%",
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  ...(isClient && {
    margin: "0 auto",
    padding: theme.spacing(0, 3),
display:'flex',
flexDirection:'row',
    gap: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }),
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

// Cards grid and card substyles moved to the reusable CardsGrid component
