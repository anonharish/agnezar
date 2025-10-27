import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { StyledTopBar } from './TopBar.style';

export interface TopBarProps {
}

export const TopBar: React.FC<TopBarProps> = ({
}) => {

  return (
    <StyledTopBar>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 ,}}>
          {/* Contact Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2">
                Urgent Need? Nitrosamine Impurity Solutions.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{textDecoration:"underline"}}>
                Learn More
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </StyledTopBar>
  );
};
