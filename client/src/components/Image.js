import React from 'react';
import StyledImage from './styled/StyledImage';

const Image = ({ src, alt, highlight, circle }) => {
    return (
        <StyledImage src={src} alt={alt} data-highlight={highlight} data-circle={circle} />
    );
};

export default Image;
