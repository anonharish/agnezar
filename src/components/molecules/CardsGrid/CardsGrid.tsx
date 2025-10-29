import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CardsGridWrapper, CardBox, CardIcon, CardTitle } from './CardsGrid.style';
import { Card } from '@components/atoms';

export interface CardItem {
  icon?: React.ReactNode | string;
  title: string;
  description?: string | string[];
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
  cardHeight?: number;
  columns?: number;
  client?: boolean;
}

export const CardsGrid: React.FC<CardsGridProps> = ({
  cards,
  cardHeight,
  columns = 2,
  client = false,
}) => {
  const md = columns && columns > 0 ? Math.floor(12 / columns) : 6;

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [needsReadMore, setNeedsReadMore] = useState<boolean[]>([]);
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);
  const [maxContentHeight, setMaxContentHeight] = useState<number | null>(null);

  useEffect(() => {
    // Reset states when dependencies change
    const compute = () => {
      if (cardHeight) {
        // If cardHeight is provided, use it and check for overflow
        setMaxContentHeight(cardHeight);
        const arr = cards.map((_, i) => {
          const el = contentRefs.current[i];
          if (!el) return false;
          return el.scrollHeight > cardHeight;
        });
        setNeedsReadMore(arr);
      } else {
        // Auto height - calculate max height from content
        const heights = contentRefs.current.map(el => el?.scrollHeight || 0);
        const maxHeight = Math.max(...heights);
        setMaxContentHeight(maxHeight > 0 ? maxHeight : null);
        setNeedsReadMore(cards.map(() => false)); // No read more for auto height
      }
    };

    // Initial computation
    compute();
    
    // Add resize listener
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [cards, cardHeight]);

    // const compute = () => {
    //   const arr = cards.map((_, i) => {
    //     const el = contentRefs.current[i];
    //     if (!el) return false;
    //     return el.scrollHeight > el.clientHeight;
    //   });
    //   setNeedsReadMore(arr);
    // };

  //   compute();
  //   window.addEventListener('resize', compute);
  //   return () => window.removeEventListener('resize', compute);
  // }, [cards, cardHeight]);

  const renderFormattedText = (text: string) => {
    // Split the text by $B markers
    const parts = text.split(/(\$B.*?\$B)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('$B') && part.endsWith('$B')) {
        // Extract text between $B markers and render bold
        const boldText = part.slice(2, -2);
        return (
          <Box component="span" key={index} sx={{ fontWeight: 700 }}>
            {boldText}
          </Box>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const renderDescription = (desc?: string | string[]) => {
    if (!desc) return null;
    if (Array.isArray(desc)) {
      return (
        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
          {desc.map((d, idx) => (
            <Box component="li" key={idx} sx={{ lineHeight: 1.6, mb: 0.5 }}>
              <Typography variant="body2" sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.2rem"
                },
                fontWeight: 400
              }}>
                {renderFormattedText(d)}
              </Typography>
            </Box>
          ))}
        </Box>
      );
    }
    return (
      <Typography variant="body2" sx={{ 
        mt: 1, 
        fontSize: {
          xs: "0.9rem",
          sm: "1rem",
          md: "1.2rem"
        },
        fontWeight:400 
      }}>
        {renderFormattedText(desc)}
      </Typography>
    );
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
      <CardsGridWrapper container spacing={4} isClient={client}>
        {cards.map((c, i) => (
          <Grid item xs={12} sm={6} md={client ? 12 : 6} key={i}>
            <CardBox>
              <Card
                variant="filled"
                sx={{
                  background: "inherit",
                  border: "none",
                  borderRadius: "none",
                  padding: "4px",
                }}
              >
                <Box sx={{ gap: 2 }}>
                  {c.icon && (
                    <CardIcon>
                      {c.icon ? (
                        typeof c.icon === "string" ? (
                          <img
                            src={c.icon}
                            alt={c.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          c.icon
                        )
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="3"
                            fill="#E6EEF0"
                          />
                          <path
                            d="M7 12h10M7 8h10M7 16h6"
                            stroke="#879296"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </CardIcon>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <div
                      style={{
                        height: maxContentHeight
                          ? `${maxContentHeight}px`
                          : "auto",
                        display: maxContentHeight ? "flex" : "block",
                        flexDirection: "column",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        ref={(el) => (contentRefs.current[i] = el)}
                        style={{
                          flex: maxContentHeight ? 1 : undefined,
                          overflow: maxContentHeight ? "hidden" : "visible",
                        }}
                      >
                        <CardTitle
                        >
                          {c.title}
                        </CardTitle>
                        {renderDescription(c.description)}
                        {renderMoreInfo(c.moreInfo)}
                      </div>

                      {maxContentHeight && needsReadMore[i] && (
                        <Box sx={{ fontWeight: 700, mt: 1 }}>
                          <Typography
                            component="span"
                            sx={{
                              cursor: "pointer",
                              color: "primary.main",
                              fontWeight: 600,
                              // responsive sizing for Read more
                              fontSize: {
                                xs: '1rem',
                                sm: '1.05rem',
                                md: '1.2rem',
                              },
                              lineHeight: 1,
                              display: 'inline-block',
                              mt: { xs: 0.5, sm: 0.75 },
                            }}
                            onClick={() => setOpenDialogIndex(i)}
                          >
                            Read more
                          </Typography>
                        </Box>
                      )}
                    </div>
                  </Box>
                </Box>
              </Card>
            </CardBox>
          </Grid>
        ))}
      </CardsGridWrapper>

      <Dialog
        open={openDialogIndex !== null}
        onClose={() => setOpenDialogIndex(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            width: { xs: '95%', sm: '85%', md: '600px' },
            maxWidth: { xs: '95%', sm: '85%', md: '600px' },
            margin: '16px',
          }
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: '1.1rem',
              sm: '1.25rem',
              md: '1.5rem'
            },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            px: { xs: 1.5, sm: 2 },
          }}
        >
          {openDialogIndex !== null ? cards[openDialogIndex].title : ""}
          <Typography
            component="span"
            sx={{
              cursor: 'pointer',
              fontSize: {
                xs: '1.4rem',
                sm: '1.6rem',
                md: '1.8rem'
              },
              lineHeight: 1,
              ml: { xs: 1, sm: 2 },
            }}
            onClick={() => setOpenDialogIndex(null)}
          >
            ×
          </Typography>
        </DialogTitle>

        <DialogContent dividers sx={{ px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 } }}>
          {openDialogIndex !== null && (
            <Box>
              {Array.isArray(cards[openDialogIndex].description) ? (
                <Box component="ul" sx={{ pl: 2 }}>
                  {cards[openDialogIndex].description!.map((d, idx) => (
                    <li key={idx}>
                      <Typography
                        variant="body2"
                        sx={{ 
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                          fontWeight: 400,
                          lineHeight: 1.6,
                        }}
                      >
                        {renderFormattedText(d)}
                      </Typography>
                    </li>
                  ))}
                </Box>
              ) : (
                <Typography
                  variant="body2"
                  sx={{ 
                    fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {renderFormattedText(
                    cards[openDialogIndex].description as string
                  )}
                </Typography>
              )}

              {cards[openDialogIndex].moreInfo &&
                cards[openDialogIndex].moreInfo.length > 0 && (
                  <Box sx={{ mt: 2 }}>
                    {cards[openDialogIndex].moreInfo!.map((mi, mIdx) => (
                      <Box key={mIdx} sx={{ mb: 2 }}>
                        {mi.moreInfoItemHeading && (
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.05rem', md: '1.25rem' } }}
                          >
                            {mi.moreInfoItemHeading}
                          </Typography>
                        )}
                        {mi.moreInfoItemDescription && (
                          <Typography
                            variant="body2"
                            sx={{ mt: 1, fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' }, fontWeight: 400 }}
                          >
                            {mi.moreInfoItemDescription}
                          </Typography>
                        )}

                        {mi.moreInfoItemContent &&
                          mi.moreInfoItemContent.length > 0 && (
                            <Box sx={{ mt: 1 }}>
                              {mi.moreInfoItemContent.map((cic, cidx) => (
                                <Box key={cidx} sx={{ mb: 1 }}>
                                  {cic.contentHeading && (
                                    <Typography
                                      variant="subtitle2"
                                      sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' },
                                      }}
                                    >
                                      {cic.contentHeading}
                                    </Typography>
                                  )}
                                  {cic.content && cic.content.length > 0 && (
                                    <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                      {cic.content.map((line, lidx) => (
                                        <Box
                                          component="li"
                                          key={lidx}
                                          sx={{ lineHeight: 1.6 }}
                                        >
                                          <Typography
                                            variant="body2"
                                            sx={{
                                              fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                                              fontWeight: 400,
                                            }}
                                          >
                                            {line}
                                          </Typography>
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
