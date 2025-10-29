import { styled } from '@mui/material/styles';
import { Box, Typography as MuiTypography } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledSpotlightBox = styled(Box)(({ theme }) => ({
  width:"85%",
  margin:"4rem auto 0 auto",
  backgroundColor: (theme.palette as any)?.background?.spotlight?.bg10 ?? colors.background.spotlight.bg10,
  borderLeft: `1px solid ${(theme.palette as any)?.primary?.main ?? colors.primary.main}`,
  padding: theme.spacing(3),
  borderRadius: 4,
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'flex-start',

  [theme.breakpoints.down('md')]: {
    width: "90%",
    padding: theme.spacing(2.5),
    gap: theme.spacing(3),
    margin: "3rem auto 0 auto",
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  [theme.breakpoints.down('sm')]: {
    width: "95%",
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    margin: "2rem auto 0 auto",
  },
}));

export const SpotlightHeading = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.primary?.main ?? colors.secondary.main,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '.9rem',
}));

export const SpotlightTitle = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.text?.alt?.heading ?? colors.text.alt.heading,
  fontWeight: 700,
  fontSize: '1.25rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

export const SpotlightDescription = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.text?.alt?.body ?? colors.text.alt.body,
  fontSize: '1rem',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9375rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
}));
