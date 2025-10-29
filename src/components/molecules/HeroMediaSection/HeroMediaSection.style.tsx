import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const StyledHeroMediaSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(8, 0),

  // Tablet
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },

  // Mobile
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

export const HeroMediaContainer = styled(Container)(({ theme }) => ({
  width: '85%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'white',
  gap: theme.spacing(6),

  // On large and below, stack so image can be placed on top for smaller screens
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down('md')]: {
    width: '95%',
    gap: theme.spacing(3),
    padding: theme.spacing(0, 2),
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    gap: theme.spacing(2),
    padding: theme.spacing(0, 1.5),
  },
}));

export const MediaText = styled(Box)(({ theme }) => ({
  flex: '0 0 45%',
  maxWidth: '45%',
  color: 'white',

  '& h3': {
    margin: 0,
    // default desktop size
    fontSize: '1.9rem',
    lineHeight: 1.12,
    [theme.breakpoints.down('md')]: {
      // tablet: reduce heading to avoid dominating the viewport
      fontSize: '1.4rem',
      lineHeight: 1.18,
    },
    [theme.breakpoints.down('sm')]: {
      // mobile: make heading compact and readable
      fontSize: '1.15rem',
      lineHeight: 1.25,
      fontWeight: 700,
    },
  },

  [theme.breakpoints.down('lg')]: {
    flex: '0 0 100%',
    maxWidth: '100%',
    textAlign: 'center',
  },

  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(1.5),
  },
}));

export const MediaImage = styled(Box)(({ theme }) => ({
  flex: '0 0 50%',
  maxWidth: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 0,

  [theme.breakpoints.down('lg')]: {
    flex: '0 0 100%',
    maxWidth: '100%',
    marginTop: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 2),
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& img': {
    display: 'block',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: theme.spacing(0.5),
    // constrain very large images
    maxWidth: '720px',
  },

  [theme.breakpoints.down('md')]: {
    '& img': {
      maxWidth: '520px',
    }
  },

  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(2),
    '& img': {
      // keep images readable but not tiny; allow full-width under small containers
      maxWidth: '320px',
      width: '100%',
      height: 'auto',
    }
  }
}));

