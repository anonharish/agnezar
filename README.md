# Agnezar - Digital Transformation Solutions

A modern, responsive React application built with TypeScript, Vite, and Material-UI, following atomic design principles.

## 🚀 Features

- **Atomic Design Pattern**: Organized components into atoms, molecules, and organisms
- **TypeScript**: Full type safety and better developer experience
- **Material-UI**: Modern, accessible UI components
- **Responsive Design**: Mobile-first approach with responsive layouts
- **React Router**: Client-side routing for seamless navigation
- **Form Validation**: Robust form handling with Yup validation
- **Theme System**: Centralized color and typography management
- **Component Architecture**: Each component has UI, hook, and style files

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks (Button, Typography, Input, Card)
│   ├── molecules/       # Simple combinations of atoms (Navbar, Hero, Footer)
│   ├── organisms/       # Complex components (Layout)
│   └── index.ts
├── pages/               # Page components
│   ├── Home/
│   ├── AboutUs/
│   ├── OurServices/
│   ├── Industries/
│   ├── WhyAgnezar/
│   ├── ContactUs/
│   └── index.ts
├── theme/               # Theme configuration
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── index.ts
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
├── App.tsx
└── main.tsx
```

## 🛠️ Component Architecture

Each component follows a three-file pattern:

1. **Component.tsx** - UI layer (presentation)
2. **Component.hook.tsx** - Data layer (state, effects, API calls)
3. **Component.style.tsx** - Style layer (MUI styled components)

## 🎨 Design System

- **Colors**: Centralized color palette with primary, secondary, and neutral colors
- **Typography**: Consistent font scales and weights
- **Spacing**: 8px grid system for consistent spacing
- **Breakpoints**: Responsive design breakpoints

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📱 Pages

- **Home**: Hero section, features, stats, and CTA
- **About Us**: Company mission, vision, values, and team
- **Our Services**: Service offerings, process, and technologies
- **Industries**: Industry-specific solutions and case studies
- **Why Agnezar**: Advantages, testimonials, and awards
- **Contact Us**: Contact form with validation and company info

## 🔧 Technologies Used

- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- React Router
- React Hook Form
- Yup (validation)
- Framer Motion (animations)
- Emotion (styling)

## 📝 Development Guidelines

1. Follow atomic design principles
2. Use TypeScript for all components
3. Implement proper error handling
4. Write responsive, accessible components
5. Use the centralized theme system
6. Follow the three-file component pattern

## 🎯 Future Enhancements

- Add animations with Framer Motion
- Implement internationalization
- Add unit and integration tests
- Set up CI/CD pipeline
- Add performance monitoring
- Implement PWA features
