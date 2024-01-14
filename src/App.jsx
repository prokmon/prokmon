//import './App.css'
import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';
import Features from './Features.jsx';
import Demo from './Demo.jsx';
import Team from './Team.jsx';
import Footer from './Footer.jsx';

import { BreakpointProvider } from './BreakpointContext.jsx';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // mobile devices
        sm: 600, // tablets
        md: 960, // small laptop screens
        lg: 1280, // desktops
        xl: 1920, // large screens
      },
    },
    palette: {
      type: 'dark',
      background: {
        default: '#101418',
      },
      text: {
        primary: '#ffffff',
      },
      // Define primary and secondary colors
      primary: {
        main: '#ffffff', // White color for primary text/buttons
      },
      secondary: {
        main: '#ffffff', // White color for secondary text/buttons (if needed)
      },
      // Other color definitions...
    },
    components: {
      // Override styles for specific components
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#ffffff', // Ensures all Typography uses white color
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#ffffff', // Ensures all Buttons have white text
            textTransform: 'none', //removes the default text capitalization
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: '#ffffff', // Ensures all IconButtons are white
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: '#101418', // Set background color for Menu
          },
        },
      },
      // Other component overrides...
    },
    // ...other theme properties
  });

  return (
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <Header />
        <About />
        <Features />
        {/* <Demo /> */}
        <Team />
        <Footer />
      </BreakpointProvider>
    </ThemeProvider>
  );
}

export default App;
