import React from 'react';
import { useTheme } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import { useAgnezerAdvantage } from './AgnezerAdvantage.hook';
import { StyledAdvantage, AdvantageInner, CardsGrid, AdvantageCardInner, CardIcon } from './AgnezerAdvantage.style';
import { Card } from '@components/atoms';
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

        <CardsGrid container spacing={4}>
          {cfg.cards.map((c, i) => (
            <Grid item xs={12} md={6} key={i}>
              <AdvantageCardInner>
                <Card variant="filled" sx={{background: "inherit", border:"none",borderRadius:"none",padding:"4px"}}>
                    <Box sx={{  gap: 2, }}>
                      <CardIcon>
                        {c.icon && typeof c.icon === 'string' ? (
                          <img src={c.icon} alt={c.title} style={{ width: 40, height: 40, objectFit: 'contain' }} />
                        ) : (
                          c.icon
                        )}
                      </CardIcon>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{c.title}</Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>{c.description}</Typography>
                      </Box>
                    </Box>
                </Card>
              </AdvantageCardInner>
            </Grid>
          ))}
        </CardsGrid>
      </AdvantageInner>
    </StyledAdvantage>
  );
};

export default AgnezerAdvantage;
