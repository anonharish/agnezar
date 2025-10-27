import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CardsGridWrapper, CardBox, CardIcon } from './CardsGrid.style';
import { Card } from '@components/atoms';

export interface CardItem {
  icon?: React.ReactNode | string;
  title: string;
  // description can be a plain string or an array of bullet strings
  description?: string | string[];
  // optional extended info sections
  moreInfo?: Array<{
    moreInfoItemHeading?: string;
    moreInfoItemDescription?: string;
    moreInfoItemContent?: Array<{
      contentHeading?: string;
      content?: string[];
    }>;
  }>;
}

export interface CardsGridProps {
  cards: CardItem[];
  /** Optional fixed card content height in pixels. If provided and the content overflows, a Read more will appear. */
  cardHeight?: number;
  /** Number of columns at md breakpoint (default 2) */
  columns?: number;
}

export const CardsGrid: React.FC<CardsGridProps> = ({ cards, cardHeight, columns = 2 }) => {
  const md = columns && columns > 0 ? Math.floor(12 / columns) : 6;

  // refs to content elements to detect overflow
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [needsReadMore, setNeedsReadMore] = useState<boolean[]>([]);
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!cardHeight) {
      setNeedsReadMore(cards.map(() => false));
      return;
    }

    const compute = () => {
      const arr = cards.map((_, i) => {
        const el = contentRefs.current[i];
        if (!el) return false;
        return el.scrollHeight > el.clientHeight;
      });
      setNeedsReadMore(arr);
    };

    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [cards, cardHeight]);

  const renderDescription = (desc?: string | string[]) => {
    if (!desc) return null;
    if (Array.isArray(desc)) {
      return (
        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
          {desc.map((d, idx) => (
            <Box component="li" key={idx} sx={{ lineHeight: 1.6, mb: 0.5 }}>
              <Typography variant="body2">{d}</Typography>
            </Box>
          ))}
        </Box>
      );
    }
    return <Typography variant="body2" sx={{ mt: 1 }}>{desc}</Typography>;
  };

  const renderMoreInfo = (more?: CardItem['moreInfo']) => {
    if (!more || !more.length) return null;
    return (
      <Box sx={{ mt: 2 }}>
        {more.map((mi, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            {mi.moreInfoItemHeading && (
              <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>{mi.moreInfoItemHeading}</Typography>
            )}
            {mi.moreInfoItemDescription && (
              <Typography variant="body2" sx={{ mt: 1 }}>{mi.moreInfoItemDescription}</Typography>
            )}

            {mi.moreInfoItemContent && mi.moreInfoItemContent.length > 0 && (
              <Box sx={{ mt: 1 }}>
                {mi.moreInfoItemContent.map((cic, cidx) => (
                  <Box key={cidx} sx={{ mb: 1 }}>
                    {cic.contentHeading && (
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{cic.contentHeading}</Typography>
                    )}
                    {cic.content && cic.content.length > 0 && (
                      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                        {cic.content.map((line, lidx) => (
                          <Box component="li" key={lidx} sx={{ lineHeight: 1.6 }}>
                            <Typography variant="body2">{line}</Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <>
      <CardsGridWrapper container spacing={4}>
        {cards.map((c, i) => (
          <Grid item xs={12} md={md} key={i}>
            <CardBox>
              <Card variant="filled" sx={{ background: 'inherit', border: 'none', borderRadius: 'none', padding: '4px' }}>
                <Box sx={{ gap: 2 }}>
                  {c.icon &&<CardIcon>
                    {c.icon ? (
                      typeof c.icon === 'string' ? (
                        <img src={c.icon} alt={c.title} style={{ width: 40, height: 40, objectFit: 'contain' }} />
                      ) : (
                        c.icon
                      )
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="3" y="3" width="18" height="18" rx="3" fill="#E6EEF0" />
                        <path d="M7 12h10M7 8h10M7 16h6" stroke="#879296" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </CardIcon>}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{c.title}</Typography>

                    <div
                      ref={(el) => (contentRefs.current[i] = el)}
                      style={{
                        maxHeight: cardHeight ? `${cardHeight}px` : 'auto',
                        overflow: cardHeight ? 'hidden' : 'visible',
                      }}
                    >
                      {renderDescription(c.description)}
                      {renderMoreInfo(c.moreInfo)}
                    </div>

                    {cardHeight && needsReadMore[i] && (
                      <Box sx={{ mt: 1 }}>
                        <Button size="small" onClick={() => setOpenDialogIndex(i)}>Read more</Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Card>
            </CardBox>
          </Grid>
        ))}
      </CardsGridWrapper>

      <Dialog open={openDialogIndex !== null} onClose={() => setOpenDialogIndex(null)} maxWidth="sm" fullWidth>
        <DialogTitle>{openDialogIndex !== null ? cards[openDialogIndex].title : ''}</DialogTitle>
        <DialogContent dividers>
          {openDialogIndex !== null && (
            <Box>
              {Array.isArray(cards[openDialogIndex].description) ? (
                <Box component="ul" sx={{ pl: 2 }}>
                  {cards[openDialogIndex].description!.map((d, idx) => (
                    <li key={idx}><Typography variant="body2">{d}</Typography></li>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2">{cards[openDialogIndex].description}</Typography>
              )}

              {/* Render moreInfo inside dialog as well */}
              {cards[openDialogIndex].moreInfo && cards[openDialogIndex].moreInfo.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  {cards[openDialogIndex].moreInfo!.map((mi, mIdx) => (
                    <Box key={mIdx} sx={{ mb: 2 }}>
                      {mi.moreInfoItemHeading && (
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{mi.moreInfoItemHeading}</Typography>
                      )}
                      {mi.moreInfoItemDescription && (
                        <Typography variant="body2" sx={{ mt: 1 }}>{mi.moreInfoItemDescription}</Typography>
                      )}

                      {mi.moreInfoItemContent && mi.moreInfoItemContent.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                          {mi.moreInfoItemContent.map((cic, cidx) => (
                            <Box key={cidx} sx={{ mb: 1 }}>
                              {cic.contentHeading && (
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{cic.contentHeading}</Typography>
                              )}
                              {cic.content && cic.content.length > 0 && (
                                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                  {cic.content.map((line, lidx) => (
                                    <Box component="li" key={lidx} sx={{ lineHeight: 1.6 }}>
                                      <Typography variant="body2">{line}</Typography>
                                    </Box>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardsGrid;
// import React from 'react';
// import { Grid, Box, Typography } from '@mui/material';
// import { CardsGridWrapper, CardBox, CardIcon } from './CardsGrid.style';
// import { Card } from '@components/atoms';

// export interface CardItem {
//   icon?: React.ReactNode | string;
//   title: string;
//   description?: string | string[];
// }

// export interface CardsGridProps {
//   cards: CardItem[];
//   cardHeight?: number;
//   columns?: number;
// }

// export const CardsGrid: React.FC<CardsGridProps> = ({ cards, cardHeight: _cardHeight, columns = 2 }) => {
//   const md = columns && columns > 0 ? Math.floor(12 / columns) : 6;

//   return (
//     <CardsGridWrapper container spacing={4}>
//       {cards.map((c, i) => (
//         <Grid item xs={12} md={md} key={i}>
//           <CardBox>
//             <Card variant="filled" sx={{ background: 'inherit', border: 'none', borderRadius: 'none', padding: '4px' }}>
//               <Box sx={{ gap: 2 }}>
//                 {c.icon && <CardIcon>
//                   {c.icon ? (
//                     typeof c.icon === 'string' ? (
//                       <img src={c.icon} alt={c.title} style={{ width: 40, height: 40, objectFit: 'contain' }} />
//                     ) : (
//                       c.icon
//                     )
//                   ) : (
//                     // Generic placeholder icon (simple SVG) when no icon provided
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                       <rect x="3" y="3" width="18" height="18" rx="3" fill="#E6EEF0" />
//                       <path d="M7 12h10M7 8h10M7 16h6" stroke="#879296" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   )}
//                 </CardIcon>}
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: 700 }}>{c.title}</Typography>
//                   {Array.isArray(c.description) ? (
//                     <Box component="ul" sx={{ mt: 1, pl: 2, m: 0, color: 'text.secondary' }}>
//                       {c.description.map((d, idx) => (
//                         <Box component="li" key={idx} sx={{ lineHeight: 1.6 }}>{d}</Box>
//                       ))}
//                     </Box>
//                   ) : (
//                     <Typography variant="body2" sx={{ mt: 1 }}>{c.description}</Typography>
//                   )}
//                 </Box>
//               </Box>
//             </Card>
//           </CardBox>
//         </Grid>
//       ))}
//     </CardsGridWrapper>
//   );
// };

// export default CardsGrid;
