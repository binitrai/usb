import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export function InputGroup({ children, direction }) {
  return (
    <div className={`input-group ${direction}`}>
      {children}
    </div>
  );
}

export function Input({ type, placeholder }) {
  return (
    <div className="input-item">
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export function ButtonGroup({ children, align }) {
  return (
    <div className={`btn-container ${align}`}>
      {children}
    </div>
  );
}

export function Button({
  theme = '', width = '', type, children, onClick, push = '',
}) {
  return (
    <div className={`btn-item ${push} ${width}`}>
      <button className={theme} type={type} onClick={onClick}>{children}</button>
    </div>
  );
}

export function InputLink({
  href, children, onClick, push = '',
}) {
  return (
    <div className={`btn-item ${push}`}>
      <a href={href} onClick={onClick}>{children}</a>
    </div>
  );
}
