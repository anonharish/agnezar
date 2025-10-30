import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledOurMission = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: (theme.palette as any)?.background?.default ?? '#fff',
}));

export const OurMissionInner = styled(Box)(({ theme }) => ({
  maxWidth: "90%",
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
    },
}));

export default null;
