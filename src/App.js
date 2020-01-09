import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Header from './containers/Header';
import ErrorPage from './containers/ErrorPage';
import ThemeProvider from './context/ThemeProvider';

import './App.css';

function App() {
  return (
          <Container fixed>
            <ThemeProvider>
              <Header></Header>
              <Router>
                <Switch>
                        {/* <Route component={Header} exact path='/' /> */}
                        <Route path="*" component={ErrorPage}/>
                </Switch>
              </Router>
            </ThemeProvider>
          </Container>
  );
}

export default App;
