import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#1E1B4B',
  color: '#fff',
  marginTop: 'auto',
  padding: '64px 0 0px',
  
  [theme.breakpoints.down('md')]: {
    padding: '48px 0 0px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '32px 0 0px',
  }
}));

export const FooterInner = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  margin: '0 auto',
  padding: theme.spacing(0, 4),
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(4),
  
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: theme.spacing(0, 3),
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    padding: theme.spacing(0, 2),
    gap: theme.spacing(2.5),
  }
}));

export const LogoSection = styled(Box)(({ theme }) => ({
  gridColumn: '1',
  '& img': {
    width: '150px',
    height: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    gridColumn: '1 / -1',
    '& img': {
      width: '130px',
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '120px',
    }
  }
}));

export const FooterHeading = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
    marginBottom: theme.spacing(2.5),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginBottom: theme.spacing(2),
  }
}));

export const FooterList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const FooterListItem = styled('li')(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(1.25),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  }
}));

export const FooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.footer ?? colors.text.footer,
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
  fontSize: '16px',
  '&:hover': {
    opacity: 1,
  },
  
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  }
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  color: theme.palette.text.footer ?? colors.text.footer,
  marginTop: theme.spacing(2),
  fontSize: '16px',
  '& > *': {
    marginBottom: theme.spacing(1),
  },
  
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
    marginTop: theme.spacing(1.5),
    '& > *': {
      marginBottom: theme.spacing(0.75),
    }
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    marginTop: theme.spacing(1),
    '& > *': {
      marginBottom: theme.spacing(0.5),
    }
  }
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

export const ReviewLogo = styled(Box)(() => ({
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

export const ReviewText = styled(Box)(() => ({
  color: '#fff',
  fontSize: '12px',
  lineHeight: 1,
  fontWeight: 500,
}));

export const LocationLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
  },
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },
  '& p': {
    color: '#fff',
    fontSize: '14px',
    margin: 0,
  },
  '& span.divider': {
    width: '1px',
    height: '20px',
    backgroundColor: '#fff',
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
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.2s ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  '& svg': {
    fontSize: 24,
  },
}));
