import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <h2 onClick={props.clickH2}>I'm {props.name}! And I'm {props.age} years old!</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeInput} value={props.name} />
        </div>
    );
};

export default person;