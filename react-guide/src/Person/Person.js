import React from 'react';
import styled from 'styled-components';
// import './Person.css'

const StyledDiv = styled.div`
        width: 50%;
        margin: 16px auto;
        padding: 16px;
        text-align: center;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        
        @media (min-width: 500px) {
            width: 450px;
        }
    `;

const person = (props) => {


    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <h2 onClick={props.clickH2}>I'm {props.name}! And I'm {props.age} years old!</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeInput} value={props.name} />
        </StyledDiv>
        /* </div> */
    );
};

export default person;