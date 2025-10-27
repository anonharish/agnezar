import React from "react";
import { Stack, Chip, useMediaQuery, useTheme } from "@mui/material";

export interface DynamicChipsProps {
  labels: string[];
  direction?: "row" | "column";
  spacing?: number;
  wrap?: boolean;
  chipColor?: string; // background color
  textColor?: string; // text color
  fontSize?: number;
  fontWeight?: number;
  borderRadius?: number;
  marginTop?: string;
}

const DynamicChips: React.FC<DynamicChipsProps> = ({
  labels,
  direction,
  spacing = 1,
  wrap = true,
  chipColor,
  textColor,
  fontSize = 14,
  fontWeight = 400,
  borderRadius = 4,
  marginTop = "2px",
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={direction || (isSmallScreen ? "column" : "row")}
      spacing={spacing}
      flexWrap={wrap ? "wrap" : "nowrap"}
      mt={marginTop ? marginTop : 0}
      gap={1}
    >
      {labels.map((label, idx) => (
        <Chip
          key={label + idx}
          label={label}
          sx={{
            backgroundColor: chipColor || theme.palette.grey[900],
            color: textColor || theme.palette.common.white,
            fontWeight: fontWeight,
            fontSize: fontSize,
            mb: isSmallScreen ? 1 : 0,
            borderRadius: borderRadius,
          }}
        />
      ))}
    </Stack>
  );
};

export default DynamicChips;
