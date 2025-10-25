import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledFooter = styled(Box)(() => ({
  backgroundColor: '#1E1B4B', // Dark navy background from screenshot
  color: '#fff',
  marginTop: 'auto',
  padding: '64px 0 32px',
}));

export const FooterInner = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
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
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(3),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  '& a': {
    color: '#fff',
    opacity: 0.8,
    transition: 'opacity 0.2s ease',
    '&:hover': {
      opacity: 1,
    },
  },
}));
