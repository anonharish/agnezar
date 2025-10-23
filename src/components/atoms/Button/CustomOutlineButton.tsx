import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from './Button';

export interface CustomOutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const CustomOutlineButton: React.FC<CustomOutlineButtonProps> = ({ children, onClick, fullWidth = false }) => {
  const theme = useTheme();
  const topBarColor = (theme.palette as any).topBar?.main ?? '#C74634';

  return (
    <Button
      variant="outline"
      size="medium"
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: (theme.palette as any).white?.main ?? '#ffffff',
        color: topBarColor,
        border: `1px solid ${topBarColor}`,
        '&:hover': {
          backgroundColor: topBarColor,
          color: (theme.palette as any).topBar?.contrastText ?? '#fff',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomOutlineButton;
