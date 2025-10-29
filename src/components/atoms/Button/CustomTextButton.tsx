import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from './Button';

export interface CustomTextButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  sx?: { [key: string]: any };
}

export const CustomTextButton: React.FC<CustomTextButtonProps> = ({ children, onClick, sx }) => {
  const theme = useTheme();
  const topBarColor = (theme.palette as any).topBar?.main ?? '#C74634';

  return (
    <Button
      variant="text"
      size="medium"
      onClick={onClick}
      sx={{
        color: topBarColor,
        '&:hover': {
          backgroundColor: 'transparent',
          textDecoration: 'underline',
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomTextButton;
