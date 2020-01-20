import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './components/Page';
import LoginContainer from './components/Login/LoginContainer';
import SignupContainer from './components/Signup/SignupContainer';


export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Page header footer>
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
