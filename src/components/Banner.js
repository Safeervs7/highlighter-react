import React, { useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { ThemeContext } from '../context/ThemeProvider';

const Banner =(props)=> {
  const themeContext = useContext(ThemeContext);
  return  (
    <Toolbar>
      <AppBar className={themeContext.classes.customBg}>
        <Toolbar>
          <Typography variant="h6">Highlighter</Typography>
        </Toolbar>
      </AppBar>
    </Toolbar>
  )
}

export default (Banner);