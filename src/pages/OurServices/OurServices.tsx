import React from 'react';
import { Container, Box } from '@mui/material';
import { useOurServices } from './OurServices.hook';
import { StyledOurServices } from './OurServices.style';
import CardsGrid from '@components/molecules/CardsGrid';
import UnParalleled from '@components/molecules/UnParalleled/UnParalleled';

export const OurServices: React.FC = () => {
  const { cards } = useOurServices();

  return (
    <StyledOurServices>
      <Box sx={{ py: 4 }}>
        <UnParalleled
          smallText="End-to-End Expertise"
          mainHeading="Integrated Analytical Services"
          description={`From early-phase R&D to commercial batch release, we provide the critical data and expert support you need at every stage of the pharmaceutical lifecycle. Our core services are designed to de-risk your programs and accelerate your path to market.`}
        />
      </Box>
      {/* Cards Grid (services overview) */}
      <Box sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <CardsGrid cards={cards} columns={2} cardHeight={280}/>
        </Container>
      </Box>
      
    </StyledOurServices>
  );
};
