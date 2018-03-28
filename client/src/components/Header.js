import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Header;
