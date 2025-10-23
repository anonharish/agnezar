import { PaletteColorOptions, PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    topBar: PaletteColor;
    white: PaletteColor;
  }
  interface PaletteOptions {
    topBar?: PaletteColorOptions;
    white?: PaletteColorOptions;
  }
}

// allow usage in sx prop
declare module '@mui/material' {
  interface Palette {
    topBar: PaletteColor;
    white: PaletteColor;
  }
  interface PaletteOptions {
    topBar?: PaletteColorOptions;
    white?: PaletteColorOptions;
  }
}
