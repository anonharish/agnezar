import React from 'react';
import { Container, Box } from '@mui/material';
import { Typography } from '@components/atoms';
import { StyledHeroSection, HeroContent, HeroImage, HeroContainer } from './HeroSectionWithContent.style.tsx';

export interface HeroSectionWithContentProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  sectionLabel?: string;
  backgroundColor?: string;
}

export const HeroSectionWithContent: React.FC<HeroSectionWithContentProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Hero image",
  sectionLabel,
  backgroundColor = "background.default"
}) => {
  return (
    <StyledHeroSection backgroundColor={backgroundColor}>
      <HeroContainer>
        <HeroContent>
          {sectionLabel && (
            <Typography 
              variant="subtitle1" 
              className="section-label"
            >
              {sectionLabel}
            </Typography>
          )}
          <Typography 
            variant="h1" 
            color="textDark"
            className="hero-title"
          >
            {title}
          </Typography>
          <Typography 
            color="textBody"
            className="hero-description"
          >
            {description}
          </Typography>
        </HeroContent>
        {imageSrc && (
          <HeroImage>
            <img src={imageSrc} alt={imageAlt} />
          </HeroImage>
        )}
      </HeroContainer>
    </StyledHeroSection>
  );
};