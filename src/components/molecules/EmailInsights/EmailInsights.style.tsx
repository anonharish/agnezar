import { styled } from '@mui/material/styles';
import { Box, Typography, TextField } from '@mui/material';

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
  fontSize: '1.5rem',
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    color: theme.palette.common.white,
    
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.common.white,
      borderWidth: 2,
    },
    
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
  },
  
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    
    '&.Mui-focused': {
      color: theme.palette.common.white,
    },
    
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
  
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
    
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
      opacity: 1,
    },
  },
  
  '& .MuiFormHelperText-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
}));

export default StyledEmailInsights;
