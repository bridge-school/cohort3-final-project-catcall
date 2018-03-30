import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledHeader from './styled/StyledHeader';

const Header = ({ children }) => {
  return (
    <div>
      <StyledHeader>{children}</StyledHeader>
      <Link to="/">Home</Link>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Header;
