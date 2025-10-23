import { colors } from './colors';

export const typography = {
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    color: colors.text.primary,
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  
  h2: {
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: 1.3,
    color: colors.text.primary,
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  
  h3: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: colors.text.primary,
    '@media (max-width: 768px)': {
      fontSize: '1.75rem',
    },
  },
  
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: colors.text.primary,
    '@media (max-width: 768px)': {
      fontSize: '1.25rem',
    },
  },
  
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.5,
    color: colors.text.primary,
  },
  
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.5,
    color: colors.text.primary,
  },
  
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
    color: colors.text.primary,
  },
  
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.6,
    color: colors.text.secondary,
  },
  
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
    color: colors.text.primary,
  },
  
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.6,
    color: colors.text.secondary,
  },
  
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    textTransform: 'uppercase' as const,
  },
  
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    color: colors.text.secondary,
  },
  
  overline: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 2.66,
    textTransform: 'uppercase' as const,
    color: colors.text.secondary,
  },
} as const;
