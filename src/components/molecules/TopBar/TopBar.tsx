import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { StyledTopBar } from './TopBar.style';
import { useNavigate } from 'react-router-dom';

export interface TopBarProps {
}

export const TopBar: React.FC<TopBarProps> = ({
}) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      // If already on home page, just scroll
      scrollToSpotlight();
    } else {
      // If on different route, navigate first then scroll
      navigate('/');
      // Wait for navigation to complete
      setTimeout(scrollToSpotlight, 100);
    }
  };

  const scrollToSpotlight = () => {
    const spotlightElement = document.getElementById('spotlight');
    if (spotlightElement) {
      const headerHeight = 130; // Fixed header height
      const elementPosition = spotlightElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <StyledTopBar>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 ,}}>
          {/* Contact Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{textAlign: 'center'}}>
                Urgent Need? Nitrosamine Impurity Solutions. <span style={{
                  textDecoration:"underline", 
                  cursor: 'pointer',
                }}
                onClick={handleLearnMoreClick}>Learn More</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </StyledTopBar>
  );
};
