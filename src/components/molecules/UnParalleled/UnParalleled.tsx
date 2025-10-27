import React from 'react';
import { Box } from '@mui/material';
import { StyledUnParalleled, SmallText, MainHeading, DescText } from './UnParalleled.style';
import { useUnParalleled } from './UnParalleled.hook';
import { CustomFilledButton } from '@components/atoms';

export interface UnParalleledProps {
    smallText?: string;
    mainHeading?: string;
    subHeading?: string;  // Added new prop for second line
    description?: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
    smallTextColor?: string;
    mainHeadingColor?: string;
    descriptionColor?: string;
    alignment?: 'left' | 'center';
    client?: boolean;
}

export const UnParalleled: React.FC<UnParalleledProps> = ({ 
    smallText, 
    mainHeading, 
    subHeading,
    description, 
    buttonLabel, 
    onButtonClick, 
    smallTextColor, 
    mainHeadingColor, 
    descriptionColor, 
    alignment = 'center',
    client 
}) => {
    const cfg = useUnParalleled({ 
        smallText, 
        mainHeading, 
        description, 
        button: buttonLabel ? { label: buttonLabel, onClick: onButtonClick } : undefined 
    });

    return (
        <StyledUnParalleled sx ={alignment === 'left' ? { textAlign: 'left', width: '90%' , mx: 0 } : { textAlign: 'center' }} isClient={client}>
            {smallText && (
                <SmallText variant="overline" sx={smallTextColor ? { color: smallTextColor } : undefined}>
                    {cfg.smallText}
                </SmallText>
            )}
            {mainHeading && (
                <MainHeading variant="h1" sx={mainHeadingColor ? { color: mainHeadingColor } : undefined}>
                    {cfg.mainHeading}
                    {subHeading && (
                        <>
                            <br />
                            <Box component="span" sx={{ display: 'block', mt: 1 }}>
                                {subHeading}
                            </Box>
                        </>
                    )}
                </MainHeading>
            )}
            {description && (
                <DescText alignment={alignment} variant="body1" sx={descriptionColor ? { color: descriptionColor } : undefined}>{cfg.description}</DescText>
            )}
            {cfg.button && (
                <div style={{ marginTop: 32 }}>
                    <CustomFilledButton onClick={cfg.button.onClick}>{cfg.button.label}</CustomFilledButton>
                </div>
            )}
        </StyledUnParalleled>
    );
};

export default UnParalleled;
