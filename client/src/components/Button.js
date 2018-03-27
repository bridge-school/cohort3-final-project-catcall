import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/StyledButton';

const Button = ({ onClick, children, style }) => {
    return (
        <StyledButton bsStyle={style} onClick={onClick}>{children}</StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.object.isRequired,
}

export default Button;
