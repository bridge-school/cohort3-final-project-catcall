import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/StyledButton';

const Button = ({ onClick, children, bsStyle, disabled }) => {
    return (
        <StyledButton bsStyle={bsStyle} onClick={onClick} disabled={disabled}>{children}</StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
}

export default Button;
