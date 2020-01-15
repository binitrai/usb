import React from 'react';
import Page from '../Page';
import './index.scss';

function LoginComponent({ loginName }) {
  return (
    <Page header={false}>
      <div className="login-container">
Login Page
        {loginName}
      </div>
    </Page>
  );
}

export default LoginComponent;
