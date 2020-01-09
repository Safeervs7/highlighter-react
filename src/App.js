import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Header from './containers/Header';
import ErrorPage from './containers/ErrorPage';
import ThemeProvider from './context/ThemeProvider';
import DataProvider from './context/DataProvider';
import DataTable from './containers/DataTable';

import './App.css';

function App() {
  return (
          <Container fixed>
            <ThemeProvider>
              <DataProvider>
                <Header></Header>
                <Router>
                  <Switch>
                          <Route component={DataTable} exact path='/' />
                          <Route path="*" component={ErrorPage}/>
                  </Switch>
                </Router>
              </DataProvider>
            </ThemeProvider>
          </Container>
  );
}

export default App;
