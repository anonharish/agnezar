import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { useButton } from './Button.hook';
import { StyledButton } from './Button.style';

export interface ButtonProps extends Omit<MuiButtonProps, 'onClick' | 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  onClick,
  children,
  ...props
}) => {
  const { handleClick, isLoading } = useButton({ onClick, loading });

  // Map custom variants to MUI variants
  const muiVariant = variant === 'outline' ? 'outlined' : 
                    variant === 'text' ? 'text' : 'contained';

  return (
    <StyledButton
      variant={muiVariant}
      customVariant={variant}
      size={size}
      onClick={handleClick}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </StyledButton>
  );
};
