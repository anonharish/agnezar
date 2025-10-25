import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const StyledHeroSection = styled(Box)<{ backgroundColor?: string }>(({ theme, backgroundColor }) => ({
  width: '100%',
  padding: theme.spacing(8, 0),
  backgroundColor: backgroundColor || theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  width: '95%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(6),
  position: 'relative',
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  flex: '0 0 40%',
  maxWidth: '40%',

  '& .section-label': {
    display: 'inline-block',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 600,
  },

  '& .hero-title': {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: theme.spacing(3),
    lineHeight: 1.2,

    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },

  '& .hero-description': {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    maxWidth: '600px',
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem',
    },
  },

  [theme.breakpoints.down('lg')]: {
    flex: '0 0 100%',
    maxWidth: '100%',

    '& .hero-description': {
      margin: '0 auto',
    },
  },
}));

export const HeroImage = styled(Box)(({ theme }) => ({
  flex: '0 0 60%',
  maxWidth: '60%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& img': {
    maxWidth: '100%',
    height: 'auto',
    // borderRadius: theme.spacing(2),
  },

  [theme.breakpoints.down('lg')]: {
    flex: '0 0 100%',
    maxWidth: '100%',
    marginTop: theme.spacing(4),
  },
}));