import React from 'react';
import { useHome } from './Home.hook';
import { StyledHome } from './Home.style';
import { Hero } from '@components/molecules';

export const Home: React.FC = () => {
  const {
    heroConfig,
  } = useHome();

  return (
    <StyledHome>
      {/* Hero Section */}
      <Hero {...heroConfig} />
    </StyledHome>
  );
};
