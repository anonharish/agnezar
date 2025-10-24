import React from 'react';
import { TypographyProps as MuiTypographyProps } from '@mui/material';
import { useTypography } from './Typography.hook';
import { StyledTypography } from './Typography.style';

export interface TypographyProps extends Omit<MuiTypographyProps, 'variant' | 'color'> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'warning' | 'info' | 'success' | 'white';
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'textPrimary',
  children,
  ...props
}) => {
  const { getColorValue } = useTypography({ color });

  return (
    <StyledTypography
      variant={variant}
      color={getColorValue()}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
