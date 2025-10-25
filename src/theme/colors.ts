// Color palette based on Figma design
export const colors = {
  // Primary colors
  primary: {
     main: '#C74634',
    light: '#fc8181',
    dark: '#c53030',
    contrastText: '#ffffff',
  },
  
  // Secondary colors (Red from Figma)
  secondary: {
    main: '#221C50',
    light: '#3a3479',
    dark: '#1a183c',
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
    // Spotlight color grouped here to avoid adding new top-level keys
    spotlight: {
      main: '#AD1113',
      bg10: 'rgba(173, 17, 19, 0.1)',
    },
  },
  
  // Text colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#bdbdbd',
    hint: '#9e9e9e',
    // Alternative text colors for headings/descriptions
    alt: {
      heading: '#1A1F29',
      body: '#1A1F29',
    },
    footer: '#F5F5F1B2',
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
  topBar: {
    main: '#C74634',
    contrastText: '#ffffff',
  },
  // White color group — main white and a white secondary (light gray) token
  white: {
    main: '#ffffff',
    secondary: '#E0E0E0',
  },
} as const;

export type ColorPalette = typeof colors;
