import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledContactUs = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  marginBottom: theme.spacing(4),
  // Make form labels and inputs small/sleek across the page
  '.MuiInputLabel-root': {
    fontSize: '0.875rem',
  },
  '.MuiInputBase-input': {
    fontSize: '0.95rem',
  },

  // stacked background wrapper that matches content height
  '.stacked-wrapper': {
    position: 'relative',
    // ensure this wrapper grows with content so backgrounds fill it
    width: '100%',
    overflow: 'visible',
    // add breathing room so content (form) doesn't touch the colored backgrounds
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
  },

  '.stacked-bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
  },

  // dark top -> 40% of the wrapper height
  '.stacked-bg__dark': {
    height: '40%',
    backgroundColor: (theme.palette as any)?.secondary?.main ?? '#221C50',
  },

  // red bottom -> 60% of the wrapper height, positioned after the dark block
  '.stacked-bg__red': {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: (theme.palette as any)?.primary?.main ?? '#C74634',
  },

  // container content sits above the backgrounds
  '.content-container': {
    position: 'relative',
    zIndex: 1,
  },

  '.left-column': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height:"100%",
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '& h3': { fontWeight: 700, marginBottom: theme.spacing(2) },
    '& p': { maxWidth: 520 },
    '& .contact-info': {
      marginTop: theme.spacing(6),
    },
  },

  '.right-column': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  '.form-card': {
    width: '100%',
    maxWidth: 520,
    marginTop: theme.spacing(2),
    boxShadow: theme.shadows[6],
    padding: theme.spacing(4),
    position: 'relative',
    zIndex: 2,
  },
}));
