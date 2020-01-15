import React from 'react';
import './index.scss';

export function Navbar({ children }) {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {children}
      </div>
    </header>
  );
}

export function NavBrand() {
  return (
    <div className="navbar-brand-container">
      <div className="navbar-brand-name">
                &lt; /&gt; DeaD interview
      </div>
    </div>
  );
}

export function Nav({ children }) {
  return (
    <div className="navbar-nav">
      {children}
    </div>
  );
}

export function NavItem({ href, children, separator }) {
  return (
    <div className="navbar-item-container">
      <div className="navbar-item"><a href={href}>{children}</a></div>
      {separator && <span className="navitem-separator">|</span>}
    </div>
  );
}
