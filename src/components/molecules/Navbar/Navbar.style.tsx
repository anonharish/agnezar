import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem } from '@mui/material';
import { colors } from '@theme/colors';

export const StyledNavbar = styled(Box)(({ theme }) => ({
  '& .MuiAppBar-root': {
    position: 'fixed',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: colors.background.default,
    color: colors.text.primary,
    padding: theme.spacing(1, 4),
    borderBottom: `1px solid ${colors.neutral[200]}`,
    zIndex: (theme.zIndex as any)?.appBar ?? 1200,

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 1),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 1), 
    },
  },
  
  '& .MuiToolbar-root': {
    minHeight: 64,
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    
    [theme.breakpoints.down('md')]: {
      padding: '0 12px',
      minHeight: 56,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 0px',
      minHeight: 48,
    },
  },
}));

export const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const LogoImage = styled('img')(({ theme }) => ({
  width: 135,
  height: 56,
  marginRight: theme.spacing(2),
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    width: 110,
    height: 46,
    marginRight: theme.spacing(1.5),
  },
  [theme.breakpoints.down('sm')]: {
    width: 90,
    height: 38,
    marginRight: theme.spacing(1),
  },
}));

export const DesktopMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const MenuLink = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const ActionButtons = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: 'inherit',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  '& .MuiDrawer-paper': {
    width: 250,
    padding: theme.spacing(2),
    '& .MuiListItem-root': {
      padding: theme.spacing(1, 1.5),
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
  },
}));

export const DrawerHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24,
});

export const DrawerList = styled(List)({
  width: '100%',
});
