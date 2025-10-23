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
    ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`
    : colors.gradients.hero,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  // ...(overlay && {
  //   '&::before': {
  //     content: '""',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     background: colors.gradients.hero,
  //     opacity: 0.8,
  //     zIndex: 1,
  //   },
  // }),
  
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
  
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh',
    textAlign: 'center',
  },
   [theme.breakpoints.down('md')]: {
  // delete this line if present:
  // minHeight: '60vh',
  textAlign: 'center',
},
}));

export const HeroTitle = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any).white?.main ?? colors.white.main,
}));

export const HeroSubtitle = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any).white?.secondary ?? colors.white.secondary,
  textTransform: 'uppercase',
}));

export const HeroDescription = styled(MuiTypography)(({ theme }) => ({
  color: (theme.palette as any).white?.main ?? colors.white.main,
}));
