import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Image from './Image';

const PageTitle = ({ children }) => {
    return (
        <div>
            <Image src='/imgs/logo.png' alt='logo' />
            <Header>{children}</Header>
        </div>
    );
};

PageTitle.propTypes = {
    children: PropTypes.string.isRequired,
}

export default PageTitle;