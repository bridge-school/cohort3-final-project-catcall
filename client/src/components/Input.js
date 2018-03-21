import React from 'react';

const Input = ({ handleChange, value }) => {
    return (
        <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={value}
            placeholder={"Enter incident location"}
        />
    );
};

export default Input;

// TODO add a label to input for accessibility
/// TODO how is the filter activated? (Enter, Button, etc)
// TODO add onSubmit function
// TODO handle errors