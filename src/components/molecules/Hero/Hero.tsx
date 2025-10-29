import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useHero } from './Hero.hook';
import { StyledHero, HeroTitle, HeroSubtitle, HeroDescription } from './Hero.style';
import { CustomFilledButton, CustomOutlineButton } from '@components/atoms';

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
  backgroundImage?: string;
  overlay?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
  overlay = true,
}) => {
  const { handlePrimaryClick, handleSecondaryClick } = useHero({
    primaryButton,
    secondaryButton,
  });

  return (
    <StyledHero backgroundImage={backgroundImage} overlay={overlay}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ minHeight: 'inherit' }}>
          <Grid item xs={12} md={10} lg={8}>

            <Box sx={{ 
                mx: 'auto', 
                textAlign: 'center', 
                maxWidth: 900,
                px: { xs: 2, sm: 3, md: 4 }
              }}>
              {subtitle && (
                <HeroSubtitle 
                  variant="overline" 
                  sx={{ 
                    mb: { xs: 1.5, sm: 2 }, 
                    display: 'block' 
                  }}
                >
                  {subtitle}
                </HeroSubtitle>
              )}

              <HeroTitle 
                variant="h2" 
                sx={{ 
                  mb: { xs: 2, sm: 2.5, md: 3 }, 
                  fontWeight: 700,
                }}
              >
                {title}
              </HeroTitle>

              {description && (
                <HeroDescription 
                  variant="body1" 
                  sx={{ 
                    mb: { xs: 3, sm: 3.5, md: 4 },
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 }
                  }}
                >
                  {description}
                </HeroDescription>
              )}
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                {primaryButton && (
                  <CustomFilledButton onClick={handlePrimaryClick}>
                    Discuss Your Project
                  </CustomFilledButton>
                )}

                {secondaryButton && (
                  <CustomOutlineButton onClick={handleSecondaryClick}>
                    Explore Our Services
                  </CustomOutlineButton>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};
