import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const StyledHeroMediaSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(8, 0),
}));

export const HeroMediaContainer = styled(Container)(({ theme }) => ({
  width: '85%',
  margin: '0 auto',
//   display: 'flex',
//   alignItems: 'flex-start',
//   justifyContent: 'space-between',
color: "white",
  gap: theme.spacing(6),
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export const MediaText = styled(Box)(({ theme }) => ({
  flex: '0 0 100%',
  maxWidth: '100%',
  color:"white",
  [theme.breakpoints.down('lg')]: {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
  '& h3': {
    margin: 0,
  },
}));

export const MediaImage = styled(Box)(({ theme }) => ({
  flex: '0 0 100%',
  maxWidth: '100%',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
//   borderRadius: theme.spacing(1),
  overflow: 'hidden',
  '& img': {
    display: 'block',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  paddingBottom: '30px',
}));

