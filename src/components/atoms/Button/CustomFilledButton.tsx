import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from './Button';

export interface CustomFilledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const CustomFilledButton: React.FC<CustomFilledButtonProps> = ({ children, onClick, fullWidth = false }) => {
  const theme = useTheme();
  const topBarColor = (theme.palette as any).topBar?.main ?? '#C74634';

  return (
    <Button
      variant="primary"
      size="medium"
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: topBarColor,
        color: (theme.palette as any).topBar?.contrastText ?? '#fff',
        '&:hover': {
          backgroundColor: (theme.palette as any).topBar?.dark ?? topBarColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomFilledButton;
