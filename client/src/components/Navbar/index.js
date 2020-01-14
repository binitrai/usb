import React from 'react';
import './index.scss';

export function Navbar(props) {
    return (
        <header className='navbar-wrapper'>
            <div className='navbar-container'>
                {props.children}
            </div>
        </header>
    )
}

export function NavBrand() {
    return (
        <div className="navbar-brand-container">
            <div className="navbar-brand-name">
                &lt; /&gt; DeaD interview 
            </div>
        </div>
    )
}

export function Nav(props) {
    return(
        <div className="navbar-nav">
            {props.children}
        </div>
    )
}

export function NavItem(props) {
    return (
        <div className='navbar-item-container'>
            <div className='navbar-item'><a href={props.href} >{props.children}</a></div>
            {props.separator && <span className='navitem-separator'>|</span>}
        </div>
    )
}