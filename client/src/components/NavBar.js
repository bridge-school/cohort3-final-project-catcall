import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import StyledNavBar from './styled/StyledNavBar';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavBar = ({ children }) => {
    return (
        <StyledNavBar>
            <Navbar.Header>
                <Navbar.Brand>
                     <a href="/">
                        <Image/>
                    </a>
                    <a href="/">Catcall.io</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="/">Home</NavItem>
            </Nav>
        </StyledNavBar>
    );
};

NavBar.propTypes = {
    children: PropTypes.string.isRequired,
}

export default NavBar;