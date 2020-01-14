import React from 'react';
import { Navbar, NavBrand, Nav, NavItem } from '../Navbar'; 

export default function Header() {
    return (
        <Navbar>
            <NavBrand />
            <Nav>
                <NavItem href="/product">Product</NavItem>
                <NavItem href="/support" separator={true} >Support</NavItem>
                <NavItem href="/trial">Start Trial</NavItem>
                <NavItem href="/login">Log In</NavItem>
            </Nav>
        </Navbar>
    )
}