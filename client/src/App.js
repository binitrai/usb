import React from 'react';
import Page from  './components/Page';
import Login from '../src/components/Login';

import {BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {
  return(
    <Router>
      <Route exact path="/">
        <Page header={true} footer={true}>
          MainPage
        </Page>
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/product" component={Login} />
      <Route path="/support" component={Login} />
      <Route path="/trial" component={Login} />
    </Router>
  )
}

