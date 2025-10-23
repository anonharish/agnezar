import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useNavbar } from './Navbar.hook';
import { StyledNavbar } from './Navbar.style';
import { Button } from '@components/atoms';
import { Typography } from '@components/atoms';

export interface NavbarProps {
  logo?: string;
  logoText?: string;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  logo = '/assets/logos/agnezar-logo.svg',
  logoText = 'Agnezar',
  menuItems = [],
  ctaButton,
}) => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    handleMenuClick,
  } = useNavbar();

  return (
    <StyledNavbar>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            {logo && (
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ height: 40, marginRight: 2 }}
              />
            )}
            <Typography variant="h6" color="primary">
              {logoText}
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                onClick={() => handleMenuClick(item.href)}
              >
                {item.label}
              </Typography>
            ))}
            {ctaButton && (
              <Button variant="primary" onClick={ctaButton.onClick}>
                {ctaButton.label}
              </Button>
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={closeMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} button onClick={() => handleMenuClick(item.href)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            {ctaButton && (
              <ListItem>
                <Button variant="primary" fullWidth onClick={ctaButton.onClick}>
                  {ctaButton.label}
                </Button>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </StyledNavbar>
  );
};
