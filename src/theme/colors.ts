// Color palette based on Figma design
export const colors = {
  // Primary colors
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  
  // Secondary colors (Red from Figma)
  secondary: {
    main: '#e53e3e',
    light: '#fc8181',
    dark: '#c53030',
    contrastText: '#ffffff',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  
  // Background colors
  background: {
    default: '#ffffff',
    paper: '#fafafa',
    dark: '#121212',
  },
  
  // Text colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#bdbdbd',
    hint: '#9e9e9e',
  },
  
  // Status colors
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c',
  },
  
  error: {
    main: '#e53e3e',
    light: '#fc8181',
    dark: '#c53030',
  },
  
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00',
  },
  
  info: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
  },
  
  // Gradient colors
  gradients: {
    primary: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
    secondary: 'linear-gradient(135deg, #e53e3e 0%, #fc8181 100%)',
    hero: 'linear-gradient(135deg, rgba(25, 118, 210, 0.9) 0%, rgba(66, 165, 245, 0.8) 100%)',
    red: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
  },
} as const;

export type ColorPalette = typeof colors;
