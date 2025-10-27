import React from 'react';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/system';
import UnParalleled from '../UnParalleled/UnParalleled'
import { AdvantageInner, StyledAdvantage } from '../AgnezerAdvantage/AgnezerAdvantage.style';
import { Chip } from '@mui/material';
import DynamicChips from '@/components/atoms/Chip/Chip';

export interface OurLeadersProps {
  smallText?: string;
  title: string;
  description?: string;
  chips?: string[]; // Add this!
}


export const OurLeaders: React.FC<OurLeadersProps> = ({
  smallText,
  title,
  description,
  chips = [],
}) => {
  const theme = useTheme();
  // Responsive: stack chips vertically on xs/sm, horizontally otherwise
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAdvantage>
      <AdvantageInner>
        <UnParalleled
          smallText={smallText}
          mainHeading={title}
          description={description}
          alignment="left"
          smallTextColor={theme.palette.warning.main}
          mainHeadingColor={theme.palette.white.main}
          descriptionColor={theme.palette.white.main}
        />
<Box >
  <DynamicChips
    labels={chips}
    chipColor="#0b033dff"
    textColor="#ffffff"
    fontSize={12}
    fontWeight={300}
    borderRadius={8}
    marginTop={'-20px'}
  />
</Box>
      </AdvantageInner>
    </StyledAdvantage>
  );
};

export default OurLeaders;
