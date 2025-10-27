import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { CardsGridWrapper, CardBox, CardIcon } from './CardsGrid.style';
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
              <Typography variant="body2" sx={{fontSize:"1.2rem",fontWeight:400}}>{d}</Typography>
            </Box>
          ))}
        </Box>
      );
    }
    return <Typography variant="body2" sx={{ mt: 1, fontSize:"1.2rem",fontWeight:400 }}>{desc}</Typography>;
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
          <Grid item xs={12} md={client ? 12 : md} key={i}>
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
                              width: 56,
                              height: 56,
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
                        height: cardHeight ? `${cardHeight}px` : "auto",
                        display: cardHeight ? "flex" : "block",
                        flexDirection: "column",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        ref={(el) => (contentRefs.current[i] = el)}
                        style={{
                          flex: cardHeight ? 1 : undefined,
                          overflow: cardHeight ? "hidden" : "visible",
                        }}
                      >
                        <Typography sx={{ fontWeight: 700, fontSize:"1.5rem", mb: 1 }}>
                          {c.title}
                        </Typography>
                        {renderDescription(c.description)}
                        {renderMoreInfo(c.moreInfo)}
                      </div>

                      {cardHeight && needsReadMore[i] && (
                        <Box sx={{ fontWeight: 700, mt: 1 }}>
                          <Typography
                            component="span"
                            sx={{ cursor: 'pointer', color: 'primary.main', fontSize:"1.2rem", fontWeight:600 }}
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
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
          {openDialogIndex !== null ? cards[openDialogIndex].title : ""}
        </DialogTitle>
        <DialogContent dividers>
          {openDialogIndex !== null && (
            <Box>
              {Array.isArray(cards[openDialogIndex].description) ? (
                <Box component="ul" sx={{ pl: 2 }}>
                  {cards[openDialogIndex].description!.map((d, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" sx={{ fontSize: "1rem", fontWeight: 400 }}>{d}</Typography>
                    </li>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" sx={{ fontSize: "1rem", fontWeight: 400 }}>
                  {cards[openDialogIndex].description}
                </Typography>
              )}

              {cards[openDialogIndex].moreInfo &&
                cards[openDialogIndex].moreInfo.length > 0 && (
                  <Box sx={{ mt: 2 }}>
                    {cards[openDialogIndex].moreInfo!.map((mi, mIdx) => (
                      <Box key={mIdx} sx={{ mb: 2 }}>
                        {mi.moreInfoItemHeading && (
                          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25rem" }}>
                            {mi.moreInfoItemHeading}
                          </Typography>
                        )}
                        {mi.moreInfoItemDescription && (
                          <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem", fontWeight: 400 }}>
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
                                      sx={{ fontWeight: 700, fontSize: "1.25rem" }}
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
                                          <Typography variant="body2" sx={{ fontSize: "1rem", fontWeight: 400 }}>
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
