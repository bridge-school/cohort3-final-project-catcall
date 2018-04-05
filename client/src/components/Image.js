import React from 'react';

const Image = ({ src, alt }) => {
    return (
        <img src='/imgs/logo.png' alt='logo' className="d-inline-block align-top" responsive="true" />
    );
};

export default Image;
