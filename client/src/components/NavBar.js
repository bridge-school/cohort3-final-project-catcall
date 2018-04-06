import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import StyledNavBar from './styled/StyledNavBar';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <StyledNavBar>
            <Navbar.Header>
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

NavBar.propTypes = {
    children: PropTypes.string,
}

export default NavBar;