import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { colors } from '@theme/colors';

interface StyledHeroProps {
  backgroundImage?: string;
  overlay: boolean;
}

export const StyledHero = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage' && prop !== 'overlay',
})<StyledHeroProps>(({ theme, backgroundImage, overlay }) => ({
  position: 'relative',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  background: backgroundImage
    ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`
    : colors.gradients.hero,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  ...(overlay && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: colors.gradients.hero,
      opacity: 0.8,
      zIndex: 1,
    },
  }),
  
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
  
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh',
    textAlign: 'center',
  },
}));
