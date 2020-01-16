import React from 'react';
import Page from '../Page';
import {InputGroup, Input, Button, InputLink, ButtonGroup} from '../Input';

import './index.scss';

function LoginComponent({ loginName }) {
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
                    <Button type="submit" onClick={()=>alert("Logged In")}>Log In</Button>
                    <InputLink href="#">Forget Your Password?</InputLink>
                  </ButtonGroup>
                </InputGroup>
              </form>
          </div>
        </div>
        <div className="or-line"><span>or</span></div>
        <Button theme="white" type="submit" onClick={()=>alert("Logged In")}>Don't have an account? Sign up</Button>
      </div>
    </Page>
  );
}

export default LoginComponent;
