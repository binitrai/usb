import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './components/Page';
import { LoginContainer } from './components/Login';
import { SignupContainer } from './components/Signup';


export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Page>
          MainPage
        </Page>
      </Route>
      <Route path="/login" component={LoginContainer} />
      <Route path="/product" component={LoginContainer} />
      <Route path="/support" component={LoginContainer} />
      <Route path="/trial" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
    </Router>
  );
}
