import React from 'react';
import Page from  './components/Page';
import LoginContainer from './components/Login/LoginContainer';

import {BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {
  return(
    <Router>
      <Route exact path="/">
        <Page header={true} footer={true}>
          MainPage
        </Page>
      </Route>
      <Route path="/login" component={LoginContainer} />
      <Route path="/product" component={LoginContainer} />
      <Route path="/support" component={LoginContainer} />
      <Route path="/trial" component={LoginContainer} />
    </Router>
  )
}

