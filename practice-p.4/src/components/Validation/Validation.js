import React from 'react';
import './style.css';

const validation = (props) => {
    return (
        <div >
            <p className='outputText'>{props.inputValue} </p>
            <p>{props.textOfParagr}</p>
        </div>
    )
};

export default validation;