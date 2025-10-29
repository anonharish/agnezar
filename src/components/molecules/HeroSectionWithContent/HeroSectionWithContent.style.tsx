import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const StyledHeroSection = styled(Box)<{ backgroundColor?: string }>(({ theme, backgroundColor }) => ({
  width: '100%',
  padding: theme.spacing(10, 0),
  backgroundColor: backgroundColor || theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0, 8),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0, 6),
  }
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  width: '95%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(8),
  position: 'relative',
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    gap: theme.spacing(4),
    width: '100%',
    padding: theme.spacing(0, 3),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
    padding: theme.spacing(0, 2),
  }
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  flex: '0 0 45%',
  maxWidth: '45%',

  '& .section-label': {
    display: 'inline-block',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: '1.1rem',
    letterSpacing: '0.5px',
    
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginBottom: theme.spacing(1.5),
    }
  },

  '& .hero-title': {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: theme.spacing(3),
    lineHeight: 1.2,

    [theme.breakpoints.down('md')]: {
      fontSize: '2.75rem',
      marginBottom: theme.spacing(2.5),
      lineHeight: 1.25,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.25rem',
      marginBottom: theme.spacing(2),
      lineHeight: 1.3,
    }
  },

  '& .hero-description': {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    maxWidth: '600px',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,

    [theme.breakpoints.down('md')]: {
      fontSize: '1.15rem',
      marginBottom: theme.spacing(3),
      lineHeight: 1.5,
      maxWidth: '550px',
      margin: '0 auto 24px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      marginBottom: theme.spacing(2.5),
      lineHeight: 1.4,
      maxWidth: '100%',
    }
  },

  [theme.breakpoints.down('md')]: {
    flex: '0 0 100%',
    maxWidth: '100%',
    padding: theme.spacing(0),
    marginTop: theme.spacing(2),
  }
}));

export const HeroImage = styled(Box)(({ theme }) => ({
  flex: '0 0 50%',
  maxWidth: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '& img': {
    maxWidth: '100%',
    height: 'auto',
    transition: 'all 0.3s ease',
    objectFit: 'contain',
  },

  [theme.breakpoints.down('md')]: {
    flex: '1 1 auto',
    maxWidth: '100%',
    width: '100%',
    margin: 0,
    padding: theme.spacing(0, 2),
    
    '& img': {
      width: '100%',
      maxWidth: '500px',
      marginTop: theme.spacing(-1),
    }
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 1),
    '& img': {
      maxWidth: '100%',
    }
  }
}));