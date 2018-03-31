import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Image from './Image';
import StyledGrid from './styled/StyledGrid';
import StyledRow from './styled/StyledRow';
import StyledCol from './styled/StyledCol';
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