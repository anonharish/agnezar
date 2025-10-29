import { styled } from '@mui/material/styles';
import { Box, Typography as MuiTypography } from '@mui/material';
import { colors } from '@theme/colors';

interface StyledUnParalleledProps {
isClient?:boolean;
}

export const StyledUnParalleled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'textAlign' && prop !== 'padding',
})<StyledUnParalleledProps>(({ theme,isClient }) => ({
  width:"85%",
  margin:isClient?"none":"auto",
  textAlign: 'center',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('md')]: {
    width: "90%",
    padding: theme.spacing(3, 0),
  },
  [theme.breakpoints.down('sm')]: {
    width: "95%",
    padding: theme.spacing(2, 0),
  }
}));
export const SmallText = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.primary?.main ?? colors.primary.main,
  fontWeight: 800,
  fontSize: '0.9rem',
  letterSpacing: '0.08em',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.85rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    letterSpacing: '0.06em',
  }
}));

export const MainHeading = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.text?.alt?.heading ?? colors.text.alt.heading,
  fontWeight: 700,
  fontSize: '2.5rem',
  lineHeight: 1.1,
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    marginTop: theme.spacing(2.5),
    lineHeight: 1.2,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
    marginTop: theme.spacing(2),
    lineHeight: 1.3,
  }
}));

export const DescText = styled(MuiTypography, { shouldForwardProp: (prop) => prop !== 'alignment' })<{
  alignment?: 'left' | 'center';
}>(({ theme, alignment }) => ({
  color: (theme.palette as any)?.text?.body ?? colors.text.body,
  maxWidth: 900,
  margin: alignment === 'left' ? undefined : '0 auto',
  marginTop: theme.spacing(2),
  fontSize: '1.2rem',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    lineHeight: 1.5,
    maxWidth: 700,
    marginTop: theme.spacing(1.5),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.4,
    maxWidth: '100%',
    marginTop: theme.spacing(1),
  }
}));
