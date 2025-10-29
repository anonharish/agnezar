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
        borderRadius: 0,
        color: topBarColor,
        border: `1px solid ${topBarColor}`,
        padding: {
          xs: '6px 16px',
          sm: '8px 20px',
          md: '8px 24px'
        },
        fontSize: {
          xs: '0.875rem',
          sm: '0.9375rem',
          md: '1rem'
        },
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
