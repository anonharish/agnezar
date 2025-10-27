import React from 'react';
import { useHome } from './Home.hook';
import { StyledHome } from './Home.style';
import { Hero, SpotlightBox, UnParalleled, AgnezerAdvantage, EmailInsights, MakeEveryStudy } from '@components/molecules';

export const Home: React.FC = () => {
  const {
    heroConfig,
  } = useHome();

  return (
    <StyledHome>
      {/* Hero Section */}
      <Hero {...heroConfig} />

      {/* Spotlight Section (below hero) */}
      <SpotlightBox
        heading="Spotlight Box"
        title="Urgent Need? Nitrosamine Impurity Solutions"
        description={
          'The global regulatory focus on nitrosamine impurities demands specialized expertise. We offer a comprehensive, fast-track solution—from risk assessment to validated testing and regulatory support—to ensure your products meet stringent FDA, EMA, and ICH M7 requirements.'
        }
        buttonLabel="Contact Us"
        onButtonClick={() => { /* handle contact click */ }}
      />

      {/* Unparalleled Section (below spotlight) */}
      <UnParalleled />

      {/* Agnezer Advantage Section */}
      <AgnezerAdvantage
        smallText={'Excellence. Innovation. Partnership.'}
        title='The Agnezar Advantage'
        description='Four pillars driving quality and trust in every project.'
        cardHeight={110}
      />

      {/* Make Every Study Section */}
      <MakeEveryStudy />
      <EmailInsights />
    </StyledHome>
  );
};
