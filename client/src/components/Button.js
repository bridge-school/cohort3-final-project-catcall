import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/StyledButton';

<<<<<<< HEAD
const Button = ({ onClick, children, bsStyle }) => {
    return (
        <StyledButton bsStyle={bsStyle} onClick={onClick}>{children}</StyledButton>
=======
const Button = ({ onClick, children, style }) => {
    return (
        <StyledButton bsStyle={style} onClick={onClick}>{children}</StyledButton>
>>>>>>> 189d710144e46c9ba045095466f2d00a62d22f18
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.object.isRequired,
}

export default Button;
