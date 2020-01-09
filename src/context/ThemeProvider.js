import React, { createContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import mainTheme from '../style/main-theme';

export const ThemeContext = createContext();

const ThemeProvider =(props)=> {
    return (
      <ThemeContext.Provider value={{classes:props.classes}}>
        {props.children}
      </ThemeContext.Provider>
    )
  }
  
export default withStyles(mainTheme)(ThemeProvider);