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
}));
export const SmallText = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.primary?.main ?? colors.primary.main,
  fontWeight: 600,
  fontSize: '0.75rem',
  letterSpacing: '0.08em',
}));

export const MainHeading = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.text?.alt?.heading ?? colors.text.alt.heading,
  fontWeight: 700,
  fontSize: '2.5rem',
  lineHeight: 1.1,
   marginTop: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
}));

export const DescText = styled(MuiTypography, { shouldForwardProp: (prop) => prop !== 'alignment' })<{
  alignment?: 'left' | 'center';
}>(({ theme, alignment }) => ({
  color: (theme.palette as any)?.text?.alt?.body ?? colors.text.alt.body,
  maxWidth: 900,
  margin: alignment === 'left' ? undefined : '0 auto',
  marginTop: theme.spacing(2),
}));
