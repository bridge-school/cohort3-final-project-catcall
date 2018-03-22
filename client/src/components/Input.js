import React from 'react';

const Input = ({ handleChange, inputValue }) => {
    // const location = inputValue()
    return (
        <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={inputValue}
            placeholder={"Enter incident location"}
        />
    );
};

export default Input;

// TODO add a label to input for accessibility
// TODO, this location enter + submit should ultimately be a form
// TODO handle errors