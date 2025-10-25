import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { CardsGridWrapper, CardBox, CardIcon } from './CardsGrid.style';
import { Card } from '@components/atoms';

export interface CardItem {
  icon?: React.ReactNode | string;
  title: string;
  description?: string;
}

export interface CardsGridProps {
  cards: CardItem[];
  cardHeight?: number;
  columns?: number;
}

export const CardsGrid: React.FC<CardsGridProps> = ({ cards, cardHeight: _cardHeight, columns = 2 }) => {
  const md = columns && columns > 0 ? Math.floor(12 / columns) : 6;

  return (
    <CardsGridWrapper container spacing={4}>
      {cards.map((c, i) => (
        <Grid item xs={12} md={md} key={i}>
          <CardBox>
            <Card variant="filled" sx={{ background: 'inherit', border: 'none', borderRadius: 'none', padding: '4px' }}>
              <Box sx={{ gap: 2 }}>
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
          </CardBox>
        </Grid>
      ))}
    </CardsGridWrapper>
  );
};

export default CardsGrid;
