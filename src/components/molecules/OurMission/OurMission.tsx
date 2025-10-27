import React from 'react';
import UnParalleled from '@components/molecules/UnParalleled/UnParalleled';
import CardsGrid from '@components/molecules/CardsGrid';
import { StyledOurMission, OurMissionInner } from './OurMission.style';

export interface OurMissionCard {
  icon?: React.ReactNode | string;
  title: string;
  description?: string | string[];
}

export interface OurMissionProps {
  smallText?: string;
  mainHeading?: string;
  description?: string;
  // heroTitle/heroImageSrc removed (not used here)
  cards?: OurMissionCard[];
  cardHeight?: number;
}

export const OurMission: React.FC<OurMissionProps> = ({
  smallText,
  mainHeading,
  description,
  // removed unused hero props
  cards = [],
  cardHeight,
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
            <CardsGrid cards={cards} columns={2} cardHeight={cardHeight ? cardHeight : 250} />
          </div>
        )}
      </OurMissionInner>
    </StyledOurMission>
  );
};

export default OurMission;
