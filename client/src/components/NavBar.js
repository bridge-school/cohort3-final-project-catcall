import React from 'react';
import Image from './Image';
import StyledNavBar from './styled/StyledNavBar';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavBar = () => {
    return (
        <StyledNavBar>
            <Navbar.Header fluid="true">
                <Navbar.Brand>
                     <a href="/">
                        <Image/>
                    </a>
                    <a href="/">Catcall.io</a>
                </Navbar.Brand>
                <Navbar.Link href="/" pullRight>Home</Navbar.Link>
            </Navbar.Header>
        </StyledNavBar>
    );
};

export default NavBar;