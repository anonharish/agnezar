import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useHero } from './Hero.hook';
import { StyledHero } from './Hero.style';
import { Button } from '@components/atoms';
import { Typography } from '@components/atoms';

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

            <Box sx={{ mx: 'auto', textAlign: 'center', maxWidth: 900 }}>
              {subtitle && (
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ mb: 2, display: 'block', color: "#E0E0E0" }}
                >
                  {subtitle}
                </Typography>
              )}
              
              <Typography
                variant="h1"
                sx={{ mb: 3, fontWeight: 700, color: "white" }}
              >
                {title}
              </Typography>
              
              {description && (
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: '1.125rem', lineHeight: 1.7, color:"white" }}
                >
                  {description}
                </Typography>
              )}
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                {primaryButton && (
                  <Button
                    variant="primary"
                    size="large"
                    onClick={handlePrimaryClick}
                  >
                    {primaryButton.label}
                  </Button>
                )}
                
                {secondaryButton && (
                  <Button
                    variant="outline"
                    size="large"
                    onClick={handleSecondaryClick}
                  >
                    {secondaryButton.label}
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};
