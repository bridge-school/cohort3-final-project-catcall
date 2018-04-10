import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styled/StyledInput';

const Input = ({ handleChange, inputValue, type, display, placeholder }) => {
    return (
        <StyledInput
            type={type}
            onChange={(e) => handleChange(e)}
            value={inputValue}
            placeholder={placeholder}
            display={display}
        />
    );
};

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
}

export default Input;
