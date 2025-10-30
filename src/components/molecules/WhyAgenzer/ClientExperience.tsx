import React from "react";
import { Box, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import CardsGrid from "@components/molecules/CardsGrid";
import UnParalleled from "../UnParalleled/UnParalleled";
import {
  AdvantageInner,
  StyledAdvantage,
} from "../AgnezerAdvantage/AgnezerAdvantage.style";

export interface AgnezerAdvantageProps {
  smallText?: string;
  title: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  cards: Array<{
    icon: React.ReactNode | string;
    title: string;
    description: string;
  }>;
  client?: boolean;
}

export const ClientExperience: React.FC<AgnezerAdvantageProps> = ({
  smallText,
  title,
  description,
  buttonLabel,
  onButtonClick,
  cards,
  // client,
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledAdvantage>
      <AdvantageInner
        isClient={false}
        sx={{ display: "flex", flexWrap: "wrap", gap: theme.spacing(4) }}
      >
        <Box sx={{ width: { sm: "100%", md: "50%" } }}>
          <UnParalleled
            smallText={smallText}
            mainHeading={title}
            description={description}
            buttonLabel={buttonLabel}
            onButtonClick={onButtonClick}
            alignment="left"
            smallTextColor={theme.palette.warning.main} // orange color
            mainHeadingColor={theme.palette.white.main}
            descriptionColor={theme.palette.white.main}
            client={false}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <CardsGrid cards={cards} columns={2} client={isLargeScreen} />
        </Box>
      </AdvantageInner>
    </StyledAdvantage>
  );
};

export default ClientExperience;
