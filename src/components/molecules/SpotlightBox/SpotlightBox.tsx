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
        <SpotlightDescription variant="body1" sx={{ mt: 2 }}>{config.description}</SpotlightDescription>
      </Box>

      {config.button && (
        <CustomFilledButton onClick={config.button.onClick}>{config.button.label}</CustomFilledButton>
      )}
    </StyledSpotlightBox>
  );
};

export default SpotlightBox;
