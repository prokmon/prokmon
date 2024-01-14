import React from 'react';
import { createContext, useContext } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const BreakpointContext = createContext();

export function BreakpointProvider({ children }) {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  

    return (
      <BreakpointContext.Provider value={{ isMobile, isTablet, isDesktop }}>
        {children}
      </BreakpointContext.Provider>
    );
  }

  BreakpointProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export function useBreakpoint() {
    return useContext(BreakpointContext);
  }