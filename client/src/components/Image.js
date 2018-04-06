import React from 'react';
import StyledImage from './styled/StyledImage';

const Image = ({ src, alt }) => {
    return (
        <StyledImage src={src} alt={alt}  />
    );
};

export default Image;
