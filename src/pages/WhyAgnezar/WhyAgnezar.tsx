import React from 'react';
import { Container, Grid, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Star } from '@mui/icons-material';
import { useWhyAgnezar } from './WhyAgnezar.hook';
import { StyledWhyAgnezar } from './WhyAgnezar.style';
import { Typography, Card, Button } from '@components/atoms';
import UnParalleled from '@components/molecules/UnParalleled/UnParalleled';
import { OurMission } from '@components/molecules/OurMission';

export const WhyAgnezar: React.FC = () => {
  const {
    heroConfig,
    advantages,
    testimonials,
    awards,
    handleGetStarted,
    handleContactUs,
    whatSetsUsApartData,
  } = useWhyAgnezar();

  return (
    <StyledWhyAgnezar>
      <Box sx={{ py: 6 }}>
        <UnParalleled
          smallText="A Radically Transparent Partnership"
          mainHeading="Why Choose Agnezar? — More Than a Lab: Your Strategic Scientific Ally"
          description={
            'At Agnezar, we deliver more than analytical services. We deliver outcomes. Our clients choose us because we combine deep scientific expertise, regulatory foresight, and a client-first mindset in ways others simply can’t match.'
          }
        />
        {/* OurMission section (cards) */}
        <OurMission
          smallText={whatSetsUsApartData.smallText}
          mainHeading={whatSetsUsApartData.mainHeading}
          description={whatSetsUsApartData.description}
          cards={whatSetsUsApartData.cards}
        />
      </Box>
    </StyledWhyAgnezar>
  );
};
