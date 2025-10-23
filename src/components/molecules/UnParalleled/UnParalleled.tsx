import React from 'react';
import { StyledUnParalleled, SmallText, MainHeading, DescText } from './UnParalleled.style';
import { useUnParalleled } from './UnParalleled.hook';
import { CustomFilledButton } from '@components/atoms';

export interface UnParalleledProps {
  smallText?: string;
  mainHeading?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  smallTextColor?: string;
  mainHeadingColor?: string;
  descriptionColor?: string;
}

export const UnParalleled: React.FC<UnParalleledProps> = ({ smallText, mainHeading, description, buttonLabel, onButtonClick, smallTextColor, mainHeadingColor, descriptionColor }) => {
  const cfg = useUnParalleled({ smallText, mainHeading, description, button: buttonLabel ? { label: buttonLabel, onClick: onButtonClick } : undefined });

  return (
    <StyledUnParalleled>
  <SmallText variant="overline" sx={smallTextColor ? { color: smallTextColor } : undefined}>{cfg.smallText}</SmallText>
  <MainHeading variant="h1" sx={mainHeadingColor ? { color: mainHeadingColor } : undefined}>{cfg.mainHeading}</MainHeading>
  <DescText variant="body1" sx={descriptionColor ? { color: descriptionColor } : undefined}>{cfg.description}</DescText>
      {cfg.button && (
        <div style={{ marginTop: 32 }}>
          <CustomFilledButton onClick={cfg.button.onClick}>{cfg.button.label}</CustomFilledButton>
        </div>
      )}
    </StyledUnParalleled>
  );
};

export default UnParalleled;
