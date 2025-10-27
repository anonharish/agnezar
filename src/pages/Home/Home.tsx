import React from 'react';
import { useHome } from './Home.hook';
import { StyledHome } from './Home.style';
import { Hero, SpotlightBox, UnParalleled, AgnezerAdvantage, EmailInsights, MakeEveryStudy } from '@components/molecules';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const {
    heroConfig,
  } = useHome();
  const navigate = useNavigate();

  return (
    <StyledHome>
      {/* Hero Section */}
      <Hero {...heroConfig} />

      {/* Spotlight Section (below hero) */}
      <Box id="spotlight">
        <SpotlightBox
          heading="Spotlight Box"
          title="Urgent Need? Nitrosamine Impurity Solutions"
          description={
            'The global regulatory focus on nitrosamine impurities demands specialized expertise. We offer a comprehensive, fast-track solution—from risk assessment to validated testing and regulatory support—to ensure your products meet stringent FDA, EMA, and ICH M7 requirements.'
          }
          buttonLabel="Contact Us"
          onButtonClick={() => { navigate('/contact') }}
        />
      </Box>

      {/* Unparalleled Section (below spotlight) */}
      <Box sx={{ mb: 8 }}>
      <UnParalleled
        smallText='Engineered for Transparency'
        mainHeading='An Unparalleled Client Experience, Engineered for Your Success'
        description="In today's competitive landscape, access to data is not enough. You need a partner who has engineered a smarter, faster, and more transparent way for you to get the critical information you need to make decisions. We have moved beyond the traditional CRO model to provide a service experience built on visibility and control."
      />
      </Box>

      {/* Agnezer Advantage Section */}
      <AgnezerAdvantage
        smallText={'Excellence. Innovation. Partnership.'}
        title='The Agnezar Advantage'
        description='Four pillars driving quality and trust in every project.'
        cardHeight={170}
      />

      {/* Make Every Study Section */}
      <MakeEveryStudy />
      {/* <EmailInsights /> */}
    </StyledHome>
  );
};
