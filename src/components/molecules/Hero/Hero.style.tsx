import { styled } from '@mui/material/styles';
import { Box, Typography as MuiTypography } from '@mui/material';
import { colors } from '@theme/colors';

interface StyledHeroProps {
  backgroundImage?: string;
  overlay: boolean;
}

export const StyledHero = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage' && prop !== 'overlay',
})<StyledHeroProps>(({ theme, backgroundImage }) => ({
  position: 'relative',
  minHeight: 'calc(100vh - 104px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: backgroundImage
    ? `url(${backgroundImage})`
    : colors.gradients.hero,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: backgroundImage
      ? 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6))'
      : 'none',
    zIndex: 1,
  },
  
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
  
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh',
    textAlign: 'center',
    padding: theme.spacing(4, 2),
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '50vh',
    padding: theme.spacing(3, 1),
  },
}));

export const HeroTitle = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any).white?.main ?? colors.white.main,
  fontSize: '2.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
}));

export const HeroSubtitle = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any).white?.secondary ?? colors.white.secondary,
  textTransform: 'uppercase',
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.875rem',
  },
}));

export const HeroDescription = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any).white?.main ?? colors.white.main,
  fontSize: '1.125rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
}));
