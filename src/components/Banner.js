import React, { useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { ThemeContext } from '../context/ThemeProvider';

const Banner =(props)=> {
  const contextType = useContext(ThemeContext);
  return  (
    <Toolbar>
      <AppBar className={contextType.classes.bgRed}>
        <Toolbar>
          <Typography variant="h6">Highlighter</Typography>
        </Toolbar>
      </AppBar>
    </Toolbar>
  )
}

export default (Banner);