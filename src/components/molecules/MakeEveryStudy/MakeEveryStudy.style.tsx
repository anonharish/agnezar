import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledMakeEvery = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

export const Inner = styled(Box)(({ theme }) => ({
  maxWidth: "85%",
  margin: '0 auto',
  display: 'flex',
  justifyContent: "space-between",
  alignItems: "start",
  gap: theme.spacing(4),
  paddingBottom: theme.spacing(5),
//   padding: theme.spacing(0, 3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const VerticalMenu = styled(Box)(({ theme }) => ({
  minWidth: 200,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginTop:theme.spacing(1),
}));

export const MenuItem = styled('button')(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  padding: theme.spacing(1, 2),
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  width:"fit-content",
  display: 'flex',
  alignItems: 'center',
//   justifyContent: 'space-between',
  // typography match design
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '2rem',
  letterSpacing: '0',
  '&.active': {
    // active: use primary main color and show underline + arrow
    color: theme.palette.primary?.main,
    borderLeft: 'none',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.primary?.main}`,
    // add arrow on the right via pseudo-element
    '&::after': {
      content: '"→"',
      marginLeft: theme.spacing(1),
      color: theme.palette.primary?.main,
      fontSize: '18px',
      lineHeight: '1',
    },
  },
  // keep a subtle hover to indicate interactivity
  '&:hover': {
    color: theme.palette.primary?.main,
  },
}));

export const AccordionsWrap = styled(Box)(() => ({
  flex: 1,
}));
