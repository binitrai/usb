import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';
import {
  InputGroup, Input, Button, InputLink, ButtonGroup,
} from '../../lib/Input';
import Instagram from '../../asset/images/instagram.png';
import Google from '../../asset/images/google.png';
import Facebook from '../../asset/images/facebook.png';
import Twitter from '../../asset/images/twitter.png';

import './index.scss';

export function LoginComponent({ history, updateLoader }) {
  function triggerLogin() {
    updateLoader(true, 'Loading');
    setTimeout(() => {
      updateLoader(false, 'Loading');
    }, 2000);
  }

  function signUp() {
    updateLoader(true, 'Loading');
    setTimeout(() => {
      history.push('/signup');
      updateLoader(false, 'Loading');
    }, 2000);
  }

  return (
    <Page header={false}>
      <div className="login-container">
        <div className="login-box">
          <div className="login-text">Welcome Back</div>
          <div className="login-email-container">
            <form>
              <InputGroup direction="vertical">
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <ButtonGroup align="auto">
                  <Button type="button" onClick={triggerLogin}>Log In</Button>
                  <InputLink href="#">Forget Your Password?</InputLink>
                </ButtonGroup>
              </InputGroup>
            </form>
          </div>
        </div>
        <div className="or-line"><span>or</span></div>
        <Button theme="white" width="full" type="submit" onClick={signUp}>Don't have an account? Sign up</Button>
        <div className="or-line"><span>or</span></div>
        <div className="social-login-container">
          <Link to="#"><img height={40} width={40} src={Google} /></Link>
          <Link to="#"><img height={40} width={40} src={Instagram} /></Link>
          <Link to="#"><img height={40} width={40} src={Facebook} /></Link>
          <Link to="#"><img height={40} width={40} src={Twitter} /></Link>
        </div>
      </div>
    </Page>
  );
}
