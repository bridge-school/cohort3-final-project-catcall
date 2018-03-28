import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const PageTitle = ({ children }) => {
    return (
        <div>
            <img src='/imgs/logo.png' alt='logo' />
            <Header>{children}</Header>
        </div>
    );
};

PageTitle.propTypes = {
    children: PropTypes.string.isRequired,
}

export default PageTitle;