import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Image from './Image';
import { StyledGrid, StyledRow, StyledCol} from './styled/StyledGridElements';

const PageTitle = ({ children }) => {
    return (
        <StyledGrid>
            <StyledRow>
                <StyledCol xs={12} sm={6} md={6} lg={6}>
                    <Image src='/imgs/logo.png' alt='logo' />
                </StyledCol>
                <StyledCol xs={12} sm={6} md={6} lg={6}>
                    <Header>{children}</Header>
                </StyledCol>
            </StyledRow>
        </StyledGrid>
    );
};

PageTitle.propTypes = {
    children: PropTypes.string.isRequired,
}

export default PageTitle;