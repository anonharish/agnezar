import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledEmailInsights = styled(Box)(({ theme }) => ({
  backgroundColor: (theme.palette as any).secondary?.main ?? '#221C50',
  color: theme.palette.getContrastText((theme.palette as any).secondary?.main ?? '#221C50'),
  padding: theme.spacing(8, 3),
  borderRadius: 4,
  width:"85%",
  margin:"0 auto",
  marginBottom:theme.spacing(12)
}));

export const Inner = styled(Box)(({ theme }) => ({
  maxWidth: "80%",
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.primary.contrastText ?? "#fff",
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
  },
}));

export const FormRow = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

export const InputWrap = styled(Box)(() => ({
  flex: 1,
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.9,
}));

export default StyledEmailInsights;
