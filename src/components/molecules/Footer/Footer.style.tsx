import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledFooter = styled(Box)(() => ({
  backgroundColor: '#1E1B4B', // Dark navy background from screenshot
  color: '#fff',
  marginTop: 'auto',
  padding: '64px 0 0px',
}));

export const FooterInner = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  margin: '0 auto',
  padding: '0 24px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const LogoSection = styled(Box)(({ theme }) => ({
  gridColumn: '1',
  [theme.breakpoints.down('md')]: {
    gridColumn: '1 / -1',
  },
}));

export const FooterHeading = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
}));

export const FooterList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const FooterListItem = styled('li')(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

export const FooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.footer ?? colors.text.footer,
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 1,
  },
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  color: theme.palette.text.footer ?? colors.text.footer,
  marginTop: theme.spacing(2),
  '& > *': {
    marginBottom: theme.spacing(1),
  },
}));

export const BottomBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000',
  padding: theme.spacing(2, 8),
  marginTop: theme.spacing(4),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

export const ReviewSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
  },
}));

export const ReviewLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: 28,
  '& img': {
    height: '100%',
    width: 'auto',
  },
}));

export const ReviewContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}));

export const ReviewStars = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  '& svg': {
    fontSize: 16,
  },
}));

export const ReviewText = styled(Box)(({ theme }) => ({
  color: '#F5F5F1B2',
  fontSize: '12px',
  lineHeight: 1,
}));

export const LocationLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  color: '#F5F5F1B2',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
  },
  '& a': {
    color: '#F5F5F1B2',
    textDecoration: 'none',
    fontSize: '14px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
  },
  '& a': {
    color: '#F5F5F1B2',
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.2s ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  '& svg': {
    fontSize: 20,
  },
}));
