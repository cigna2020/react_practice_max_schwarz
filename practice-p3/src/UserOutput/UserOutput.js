import React from 'react';

const userOutput = props => {
    return (
        <div className="userOutput">
            <h1>User Name: {props.name}</h1>
            <p>Description: {props.descr}</p>
        </div>
    )
};

export default userOutput;