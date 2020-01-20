import React from 'react';
import Page from '../Page';
import {InputGroup, Input, Button, InputLink, ButtonGroup} from '../../lib/Input';

import '../Login/index.scss';

function SignupComponent({ history }) {
  return (
    <Page header={false}>
      <div className="login-container">
        <div className="login-box">
          <div className="login-text">Welcome! Let's get started</div>
          <div className="login-email-container">
              <form>
                <InputGroup direction="vertical">
                  <Input type="text" placeholder="Full Name" />
                  <Input type="text" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  <ButtonGroup align="left">
                    <Button type="submit" width="full" onClick={()=>alert("Logged In")}>Sign Up</Button>
                  </ButtonGroup>
                </InputGroup>
              </form>
          </div>
        </div>
        <div className="or-line"><span>or</span></div>
        <Button theme="white"type="submit" onClick={()=>history.push('/login')}>Already have an account? Sign in</Button>
      </div>
    </Page>
  );
}

export default SignupComponent;
