import React from 'react';
import { Container, Box} from '@mui/material';
import { useIndustries } from './Industries.hook';
import { StyledIndustries } from './Industries.style';
import { Typography, CustomFilledButton } from '@components/atoms';
import UnParalleled from '@components/molecules/UnParalleled/UnParalleled';

export const Industries: React.FC = () => {
  const {
    // heroConfig,
    // industries,
    // caseStudies,
    // handleLearnMore,
    // handleViewCaseStudy,
  } = useIndustries();

  return (
    <StyledIndustries>
      {/* UnParalleled intro section for Industries */}
      <Box sx={{ py: 6 }}>
        <UnParalleled
          smallText="Industries"
          mainHeading="Empowering Global Pharmaceutical Leaders-"
          description={`We provide the scalability, robust quality systems, and multi-site capabilities required to support complex, high-volume projects and de-risk your supply chain.\nWe tailor our partnership model to meet your unique needs, whether you are an agile startup navigating your first IND or an established leader managing a global portfolio.`}
          alignment="center"
        />
      </Box>

      <Box sx={{ py: 8, backgroundColor: 'background.default', color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Let's Build a Tailored Partnership
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Your challenges are unique. Your analytical partner should be too. Contact us to discover how our next-generation services can accelerate your success.
            </Typography>
            <CustomFilledButton 
            // onClick={handleContactUs}
            >
              Contact Us Today
            </CustomFilledButton>
          </Box>
        </Container>
      </Box>
    </StyledIndustries>
  );
};
