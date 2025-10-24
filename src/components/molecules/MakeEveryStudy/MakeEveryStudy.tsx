import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMakeEveryStudy } from './MakeEveryStudy.hook';
import { StyledMakeEvery, Inner, VerticalMenu, MenuItem, AccordionsWrap } from './MakeEveryStudy.style';
import { CustomFilledButton } from '@components/atoms';
import UnParalleled from '../UnParalleled/UnParalleled';

export const MakeEveryStudy: React.FC = () => {
    const { menu } = useMakeEveryStudy();
    const [activeMenu, setActiveMenu] = useState(menu[0].id);

    return (
        <StyledMakeEvery>
            <UnParalleled 
                mainHeading='Insights & Expertise from Our Scientific Leaders'
                description='Stay informed on the latest scientific advancements, regulatory trends, and analytical best practices. Our Resources Hub is your source for expert-written content designed to help you navigate the complexities of pharmaceutical development.'
            />
            <Inner>
                <VerticalMenu>
                    {menu.map(m => (
                        <MenuItem key={m.id} className={m.id === activeMenu ? 'active' : ''} onClick={() => setActiveMenu(m.id)}>{m.label}</MenuItem>
                    ))}
                </VerticalMenu>

                <AccordionsWrap>
                    {menu.find(m => m.id === activeMenu)?.items.map(item => (
                        <Accordion
                            key={item.id}
                            sx={{
                                boxShadow: 'none',
                                backgroundColor: theme => (theme.palette.background?.default ?? '#fff'),
                                '&:before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    py: 2,

                                    '& .MuiAccordionSummary-content': { margin: 0 },
                                    borderBottom: theme => `1px solid ${theme.palette.divider}`,

                                }}
                            >
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    fontSize: "1.5rem",
                                }}>{item.title}</Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ pt: 2, pb: 4, backgroundColor: theme => (theme.palette.background?.default ?? '#fff'), borderBottom: theme => `1px solid ${theme.palette.divider}`, }}>
                                <Typography variant="body1" sx={{ mb: 3, fontSize: "1rem", color: theme => theme.palette.text.secondary }}>{item.summary}</Typography>
                                <CustomFilledButton onClick={() => { }}>{item.buttonLabel}</CustomFilledButton>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionsWrap>
            </Inner>
        </StyledMakeEvery>
    );
};

export default MakeEveryStudy;
