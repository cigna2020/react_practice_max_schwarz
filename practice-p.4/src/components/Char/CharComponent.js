import React from 'react';

const charComponent = (props) => {
    return (
        <div style={props.charStyle} onClick={props.deleteChar}>
            {props.children}
        </div>
    )
};

export default charComponent;