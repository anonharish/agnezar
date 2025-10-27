import React from 'react';
import { useTheme } from '@mui/system';
import CardsGrid from '@components/molecules/CardsGrid';
import UnParalleled from '../UnParalleled/UnParalleled';
import { useAgnezerAdvantage } from '../AgnezerAdvantage/AgnezerAdvantage.hook';
import { AdvantageInner, StyledAdvantage } from '../AgnezerAdvantage/AgnezerAdvantage.style';

export interface AgnezerAdvantageProps {
  smallText?: string;
  title: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  cards: Array<{ icon: React.ReactNode | string; title: string; description: string }>; 
  client?:boolean;
}


export const ClientExperience: React.FC<AgnezerAdvantageProps> = ({
  smallText,
  title,
  description,
  buttonLabel,
  onButtonClick,
  cards,
  client
}) => {
  const theme = useTheme();

  return (
    <StyledAdvantage>
      <AdvantageInner isClient={client} >
        <UnParalleled
          smallText={smallText}
          mainHeading={title}
          description={description}
          buttonLabel={buttonLabel}
          onButtonClick={onButtonClick}
          alignment="left"
          smallTextColor={theme.palette.warning.main} // orange color
          mainHeadingColor={theme.palette.white.main}
          descriptionColor={theme.palette.white.main}
          client={client}
        />

        <CardsGrid cards={cards} cardHeight={260} columns={2} client={client} />
      </AdvantageInner>
    </StyledAdvantage>
  );
};

export default ClientExperience;
