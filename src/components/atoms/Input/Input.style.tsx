import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    
    '& fieldset': {
      borderColor: colors.neutral[300],
    },
    
    '&:hover fieldset': {
      borderColor: colors.primary.main,
    },
    
    '&.Mui-focused fieldset': {
      borderColor: colors.primary.main,
      borderWidth: 2,
    },
    
    '&.Mui-error fieldset': {
      borderColor: colors.error.main,
    },
  },
  
  '& .MuiInputLabel-root': {
    color: colors.text.secondary,
    
    '&.Mui-focused': {
      color: colors.primary.main,
    },
    
    '&.Mui-error': {
      color: colors.error.main,
    },
  },
  
  '& .MuiFormHelperText-root': {
    color: colors.text.secondary,
    
    '&.Mui-error': {
      color: colors.error.main,
    },
  },
}));
