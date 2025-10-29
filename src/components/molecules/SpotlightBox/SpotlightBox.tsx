import React from 'react';
import { Box } from '@mui/material';
import { useSpotlightBox } from './SpotlightBox.hook';
import { StyledSpotlightBox, SpotlightTitle, SpotlightDescription } from './SpotlightBox.style';
import { CustomFilledButton } from '@components/atoms';

export interface SpotlightBoxProps {
  heading?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export const SpotlightBox: React.FC<SpotlightBoxProps> = ({ heading, title, description, buttonLabel, onButtonClick }) => {
  const config = useSpotlightBox({ heading, title, description, button: buttonLabel ? { label: buttonLabel, onClick: onButtonClick } : undefined });

  return (
    <StyledSpotlightBox>
      <Box sx={{ flex: 1 }}>
        {/* <SpotlightHeading variant="overline">{config.heading}</SpotlightHeading> */}
        <SpotlightTitle variant="h6" sx={{ mt: 1 }}>{config.title}</SpotlightTitle>
        <SpotlightDescription variant="body1" sx={{ mt: { xs: 1.5, sm: 2 } }}>{config.description}</SpotlightDescription>
      </Box>

      {config.button && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: { xs: 'flex-start', md: 'flex-end' },
          mt: { xs: 2, md: 0 }
        }}>
          <CustomFilledButton 
            onClick={config.button.onClick}
          >
            {config.button.label}
          </CustomFilledButton>
        </Box>
      )}
    </StyledSpotlightBox>
  );
};

export default SpotlightBox;
