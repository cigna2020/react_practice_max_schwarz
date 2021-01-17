import React from 'react';

const person = (props) => {
    return (
        <div>
            <h2 onClick={props.clickH2}>I'm {props.name}! And I'm {props.age} years old!</h2>
            <p>{props.children}</p>
        </div>
    );
};

export default person;