import React from 'react';
import { CardProps as MuiCardProps } from '@mui/material';
import { useCard } from './Card.hook';
import { StyledCard } from './Card.style';

export interface CardProps extends Omit<MuiCardProps, 'variant'> {
  variant?: 'elevated' | 'outlined' | 'filled';
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  hoverable = false,
  children,
  ...props
}) => {
  const { handleMouseEnter, handleMouseLeave } = useCard({ hoverable });

  // Map custom variants to MUI variants
  const muiVariant = variant === 'elevated' ? 'elevation' : 'outlined';

  return (
    <StyledCard
      variant={muiVariant}
      customVariant={variant}
      hoverable={hoverable}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </StyledCard>
  );
};
