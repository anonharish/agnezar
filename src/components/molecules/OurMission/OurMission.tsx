import React from 'react';
import UnParalleled from '@components/molecules/UnParalleled/UnParalleled';
import CardsGrid from '@components/molecules/CardsGrid';
import { HeroMediaSection } from '@components/molecules/HeroMediaSection';
import { StyledOurMission, OurMissionInner } from './OurMission.style';

export interface OurMissionCard {
  icon?: React.ReactNode | string;
  title: string;
  description?: string;
}

export interface OurMissionProps {
  smallText?: string;
  mainHeading?: string;
  description?: string;
  heroTitle?: string;
  heroImageSrc?: string;
  cards?: OurMissionCard[];
}

export const OurMission: React.FC<OurMissionProps> = ({
  smallText,
  mainHeading,
  description,
  heroTitle,
  heroImageSrc,
  cards = [],
}) => {
  return (
    <StyledOurMission>
      <OurMissionInner>
        <UnParalleled
          smallText={smallText}
          mainHeading={mainHeading}
          description={description}
          alignment='left'
        />

        {/* Cards grid */}
        {cards && cards.length > 0 && (
          <div>
            <CardsGrid cards={cards} columns={2} cardHeight={150} />
          </div>
        )}
      </OurMissionInner>
    </StyledOurMission>
  );
};

export default OurMission;
