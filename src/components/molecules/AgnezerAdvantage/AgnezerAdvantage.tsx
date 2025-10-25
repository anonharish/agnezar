import React from 'react';
import { useTheme } from '@mui/system';
import { useAgnezerAdvantage } from './AgnezerAdvantage.hook';
import { StyledAdvantage, AdvantageInner } from './AgnezerAdvantage.style';
import CardsGrid from '@components/molecules/CardsGrid';
import UnParalleled from '../UnParalleled/UnParalleled';

export interface AgnezerAdvantageProps {
  smallText?: string;
  title?: string;
  description?: string;
  cards?: Array<{ icon?: React.ReactNode | string; title: string; description?: string }>
}

export const AgnezerAdvantage: React.FC<AgnezerAdvantageProps> = ({ smallText, title, description, cards }) => {
  const cfg = useAgnezerAdvantage({ smallText, title, description, cards });
  const theme = useTheme();

  return (
    <StyledAdvantage>
      <AdvantageInner>
        <UnParalleled
        smallText='Excellence. Innovation. Partnership.'
        // smallTextColor='#fff'
        mainHeading='The Agnezar Advantage'
        mainHeadingColor= {theme.palette.white.main}
        description='Four pillars driving quality and trust in every project.'
        descriptionColor={theme.palette.white.main}
        />

        <CardsGrid cards={cfg.cards} cardHeight={260} columns={2} />
      </AdvantageInner>
    </StyledAdvantage>
  );
};

export default AgnezerAdvantage;
