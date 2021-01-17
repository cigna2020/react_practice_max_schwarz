import React from 'react';

const userInput = props => {
    return (
        <div className="userInput">
            <label for="name">Change your name:</label>
            <input type="text" onChange={props.changeInput} id="name" />
        </div>
    )
};

export default userInput;