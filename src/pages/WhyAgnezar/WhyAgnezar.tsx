import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Star } from '@mui/icons-material';
import { useWhyAgnezar } from './WhyAgnezar.hook';
import { StyledWhyAgnezar } from './WhyAgnezar.style';
import ClientExperience from '@/components/molecules/WhyAgenzer/ClientExperience';
import { OurMission } from '@components/molecules/OurMission';
import UnParalleled from '@components/molecules/UnParalleled/UnParalleled';

export const WhyAgnezar: React.FC = () => {
  const {
        whatSetsUsApartData,
    merged
  } = useWhyAgnezar({});

  return (
    <StyledWhyAgnezar>
      {/* Hero Section */}
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
         <ClientExperience
      smallText={merged.smallText}
      title={merged.title}
      description={merged.description}
      buttonLabel={merged.buttonLabel}
      onButtonClick={merged.onButtonClick}
      cards={merged.cards}
      client
    />
      </Box>
    </StyledWhyAgnezar>
  );
};
