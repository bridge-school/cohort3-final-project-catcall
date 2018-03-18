import React from 'react';
import Header from './Header';

const PageTitle = ({ children }) => {
    return (
        <div>
            <img src='/imgs/logo.png' alt='logo' />
            <Header>{children}</Header>
        </div>
    );
};

export default PageTitle;