import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledContactUs = styled(Box)(({ theme }) => ({
  // Make form labels and inputs small/sleek across the page
  '.MuiInputLabel-root': {
    fontSize: '0.875rem',
  },
  '.MuiInputBase-input': {
    fontSize: '0.95rem',
  },
  '.contact-left': {
    // ensure left column text sits nicely on the dark background
    '& h3, & h4': {
      color: theme.palette.common.white,
    },
  },
}));
