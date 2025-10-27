import React from "react";
import { Box, useTheme } from "@mui/system";
import UnParalleled from "../UnParalleled/UnParalleled";
import {
  AdvantageInner,
  StyledAdvantage,
} from "../AgnezerAdvantage/AgnezerAdvantage.style";
import DynamicChips from "@/components/atoms/Chip/Chip";

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

  return (
    <StyledAdvantage>
      <AdvantageInner>
        <UnParalleled
          smallText={smallText}
          mainHeading={title}
          description={description}
          alignment="left"
          smallTextColor={theme.palette.primary.main}
          mainHeadingColor={theme.palette.white.main}
          descriptionColor={theme.palette.white.main}
        />
        <Box>
          <DynamicChips
            labels={chips}
            chipColor= "rgba(255, 255, 255, 0.1)"
            textColor= {theme.palette?.white?.main}
            fontSize={12}
            fontWeight={300}
            borderRadius={8}
            marginTop={"-20px"}
          />
        </Box>
      </AdvantageInner>
    </StyledAdvantage>
  );
};

export default OurLeaders;
