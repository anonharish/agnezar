import { styled } from '@mui/material/styles';
import { Box, Typography as MuiTypography } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledUnParalleled = styled(Box)(({ theme }) => ({
  width:"85%",
  margin:"auto",
  textAlign: 'center',
 padding: theme.spacing(4, 0),
}));

export const SmallText = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.secondary?.main ?? colors.secondary.main,
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

export const DescText = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.text?.alt?.body ?? colors.text.alt.body,
  maxWidth: 900,
  margin: '0 auto',
  marginTop: theme.spacing(2),
}));
