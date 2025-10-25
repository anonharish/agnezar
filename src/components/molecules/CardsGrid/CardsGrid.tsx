import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { CardsGridWrapper, CardBox, CardIcon } from './CardsGrid.style';
import { Card } from '@components/atoms';

export interface CardItem {
  icon?: React.ReactNode | string;
  title: string;
  description?: string | string[];
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
                {c.icon && <CardIcon>
                  {c.icon ? (
                    typeof c.icon === 'string' ? (
                      <img src={c.icon} alt={c.title} style={{ width: 40, height: 40, objectFit: 'contain' }} />
                    ) : (
                      c.icon
                    )
                  ) : (
                    // Generic placeholder icon (simple SVG) when no icon provided
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="3" fill="#E6EEF0" />
                      <path d="M7 12h10M7 8h10M7 16h6" stroke="#879296" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </CardIcon>}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{c.title}</Typography>
                  {Array.isArray(c.description) ? (
                    <Box component="ul" sx={{ mt: 1, pl: 2, m: 0, color: 'text.secondary' }}>
                      {c.description.map((d, idx) => (
                        <Box component="li" key={idx} sx={{ lineHeight: 1.6 }}>{d}</Box>
                      ))}
                    </Box>
                  ) : (
                    <Typography variant="body2" sx={{ mt: 1 }}>{c.description}</Typography>
                  )}
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
