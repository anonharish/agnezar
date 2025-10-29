import React from 'react';
import mainLogo from "../../../../public/assets/logos/main-logo.svg"
import { AppBar, Toolbar, ListItem, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useNavbar } from './Navbar.hook';
import { useNavigate } from 'react-router-dom';
import { 
  StyledNavbar,
  LogoContainer,
  LogoImage,
  DesktopMenu,
  MenuLink,
  ActionButtons,
  MobileMenuButton,
  MobileDrawer,
  DrawerHeader,
  DrawerList
} from './Navbar.style';
import { Button, CustomFilledButton, CustomTextButton } from '@components/atoms';
import { Typography } from '@components/atoms';

export interface NavbarProps {
  logo?: string;
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
  menuItems = [],
  ctaButton,
}) => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    handleMenuClick,
  } = useNavbar();

  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <AppBar position="static" elevation={0}>
        <Toolbar >
          {/* Logo */}
          <LogoContainer>          
              <LogoImage
                src={mainLogo}
                alt="Logo"
                onClick={() => navigate('/')}
              />
          </LogoContainer>

          {/* Desktop Menu */}
          <DesktopMenu>
            {menuItems.map((item, index) => (
              <MenuLink key={index}>
                <Typography
                  variant="body1"
                  onClick={() => handleMenuClick(item.href)}
                >
                  {item.label}
                </Typography>
              </MenuLink>
            ))}
          </DesktopMenu>

          <ActionButtons>
            <CustomTextButton 
              onClick={() => navigate('/contact')}
              sx={{
                display: { xs: 'none', sm: 'none', md: 'inline-flex' },
              }}
            >
              Contact Us
            </CustomTextButton>
            {ctaButton && (
              <CustomFilledButton onClick={ctaButton.onClick}>
                {ctaButton.label}
              </CustomFilledButton>
            )}
          </ActionButtons>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            aria-label="menu"
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </MobileMenuButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <MobileDrawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
      >
        <DrawerHeader>
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={closeMobileMenu}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        
        <DrawerList>
          {menuItems.map((item, index) => (
            <ListItem key={index} button onClick={() => handleMenuClick(item.href)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem button onClick={() => { navigate('/contact'); closeMobileMenu(); }}>
            <ListItemText primary="Contact Us" />
          </ListItem>
          {ctaButton && (
            <ListItem>
              <Button variant="primary" fullWidth onClick={ctaButton.onClick}>
                {ctaButton.label}
              </Button>
            </ListItem>
          )}
        </DrawerList>
      </MobileDrawer>
    </StyledNavbar>
  );
};
