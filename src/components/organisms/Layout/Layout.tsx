import React from 'react';
import { Box } from '@mui/material';
import { useLayout } from './Layout.hook';
import { StyledLayout } from './Layout.style';
import { TopBar, Navbar, Footer } from '@components/molecules';

export interface LayoutProps {
  children: React.ReactNode;
  showTopBar?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
  topBarProps?: any;
  navbarProps?: any;
  footerProps?: any;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showTopBar = true,
  showNavbar = true,
  showFooter = true,
  topBarProps = {},
  navbarProps = {},
  footerProps = {},
}) => {
  const { topBarConfig, navbarConfig, footerConfig } = useLayout();

  return (
    <StyledLayout>
      {showTopBar && <TopBar {...topBarConfig} {...topBarProps} />}
      {showNavbar && <Navbar {...navbarConfig} {...navbarProps} />}
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      
      {showFooter && <Footer {...footerConfig} {...footerProps} />}
    </StyledLayout>
  );
};
