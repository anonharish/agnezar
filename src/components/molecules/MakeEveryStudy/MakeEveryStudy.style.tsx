import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledMakeEvery = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

export const Inner = styled(Box)(({ theme }) => ({
  maxWidth: 1100,
  margin: '0 auto',
  display: 'flex',
  gap: theme.spacing(4),
  padding: theme.spacing(0, 3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const VerticalMenu = styled(Box)(({ theme }) => ({
  minWidth: 200,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const MenuItem = styled('button')(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  padding: theme.spacing(1, 2),
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  '&.active': {
    color: (theme.palette as any).secondary?.main,
    borderLeft: `3px solid ${(theme.palette as any).secondary?.main}`,
    paddingLeft: theme.spacing(1.5),
  },
}));

export const AccordionsWrap = styled(Box)(() => ({
  flex: 1,
}));
