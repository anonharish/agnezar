import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from './Button';
import { ButtonProps as BaseButtonProps } from './Button';

export interface CustomFilledButtonProps extends Partial<BaseButtonProps> {
  children: React.ReactNode;
}

export const CustomFilledButton: React.FC<CustomFilledButtonProps> = ({ children, ...props }) => {
  const theme = useTheme();
  const topBarColor = (theme.palette as any).topBar?.main ?? '#C74634';

  return (
    <Button
      variant={props.variant ?? 'primary'}
      size={(props.size as any) ?? 'medium'}
      onClick={props.onClick}
      fullWidth={props.fullWidth}
      type={(props as any).type}
      loading={(props as any).loading}
      sx={{
        backgroundColor: topBarColor,
        borderRadius: 0,
        color: (theme.palette as any).topBar?.contrastText ?? '#fff',
        '&:hover': {
          backgroundColor: (theme.palette as any).topBar?.dark ?? topBarColor,
        },
        ...(props.sx as object || {}),
      }}
      {...(props as any)}
    >
      {children}
    </Button>
  );
};

export default CustomFilledButton;
