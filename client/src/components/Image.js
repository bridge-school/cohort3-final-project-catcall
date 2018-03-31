import React from 'react';
import StyledImage from './styled/StyledImage';

const Image = ({ src, alt }) => {
    return (
        <img src='/imgs/logo.png' alt='logo' className="d-inline-block align-top" responsive />
    );
};

export default Image;
