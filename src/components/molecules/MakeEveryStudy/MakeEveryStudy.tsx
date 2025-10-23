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
      <UnParalleled/>  
      <Inner>
        <VerticalMenu>
          {menu.map(m => (
            <MenuItem key={m.id} className={m.id === activeMenu ? 'active' : ''} onClick={() => setActiveMenu(m.id)}>{m.label}</MenuItem>
          ))}
        </VerticalMenu>

        <AccordionsWrap>
          {menu.find(m => m.id === activeMenu)?.items.map(item => (
            <Accordion key={item.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ mb: 2 }}>{item.summary}</Typography>
                <CustomFilledButton onClick={() => {}}>{item.buttonLabel}</CustomFilledButton>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionsWrap>
      </Inner>
    </StyledMakeEvery>
  );
};

export default MakeEveryStudy;
