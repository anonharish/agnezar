import { styled } from '@mui/material/styles';
import { Box, Typography as MuiTypography } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledSpotlightBox = styled(Box)(({ theme }) => ({
  width:"85%",
  margin:"4rem auto",
  backgroundColor: (theme.palette as any)?.background?.spotlight?.bg10 ?? colors.background.spotlight.bg10,
  borderLeft: `3px solid ${(theme.palette as any)?.secondary?.main ?? colors.secondary.main}`,
  padding: theme.spacing(3),
  borderRadius: 4,
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'flex-start',
}));

export const SpotlightHeading = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.secondary?.main ?? colors.secondary.main,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '0.75rem',
}));

export const SpotlightTitle = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.text?.alt?.heading ?? colors.text.alt.heading,
  fontWeight: 700,
  fontSize: '1.25rem',
}));

export const SpotlightDescription = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any)?.text?.alt?.body ?? colors.text.alt.body,
}));
