import React from 'react';
import StyledImage from './styled/StyledImage';

const Image = ({ src, alt }) => {
    return (
        <StyledImage src='/imgs/logo.png' alt='logo' responsive />
    );
};

export default Image;
