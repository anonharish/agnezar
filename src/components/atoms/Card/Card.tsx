import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import { useCard } from './Card.hook';
import { StyledCard } from './Card.style';

export interface CardProps extends MuiCardProps {
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

  return (
    <StyledCard
      variant={variant}
      hoverable={hoverable}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </StyledCard>
  );
};
