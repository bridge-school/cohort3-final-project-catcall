import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    return (
      <div>
        <h1>{children}</h1>
        <Link to="/">Home</Link>
      </div>
    );
};

export default Header;
