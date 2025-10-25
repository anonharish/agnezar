import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@components/atoms';
import {
  StyledHeroMediaSection,
  HeroMediaContainer,
  MediaText,
  MediaImage,
  ImageWrapper,
} from './HeroMediaSection.style.tsx';

export interface HeroMediaSectionProps {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const HeroMediaSection: React.FC<HeroMediaSectionProps> = ({
  title,
  imageSrc = '/assets/images/about-media.png',
  imageAlt = 'About media',
}) => {
  return (
    <StyledHeroMediaSection>
      <HeroMediaContainer>
        <MediaText>
          <Typography variant="h3" sx={{ fontWeight: 600, color: '#fff' }}>
            {title}
          </Typography>
        </MediaText>

        <MediaImage>
          <ImageWrapper>
            {/* placeholder image */}
            <img src={imageSrc} alt={imageAlt} />
          </ImageWrapper>
        </MediaImage>
      </HeroMediaContainer>
    </StyledHeroMediaSection>
  );
};

export default HeroMediaSection;
