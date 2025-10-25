import React from 'react';
import { Typography } from '@components/atoms';
import { StyledHeroSection, HeroContent, HeroImage, HeroContainer } from './HeroSectionWithContent.style';

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
            className="hero-title"
            sx={(theme) => ({ color: theme.palette.text.dark })}
          >
            {title}
          </Typography>
          <Typography 
            className="hero-description"
            sx={(theme) => ({ color: theme.palette.text.body })}
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