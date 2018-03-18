import React from 'react';

const Input = ({ onChange, value }) => {
    return (
        <input type="text" onChange={onChange} value={value}></input>
    );
};

export default Input;


/// TODO how is the filter activated? (Enter, Button, etc)
// TODO add onSubmit function
// TODO handle errors