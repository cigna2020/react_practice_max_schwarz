import React from 'react';
import styled from 'styled-components'

const cockpit = (props) => {

    const StyledButton = styled.button`
    background-color: ${props => props.showList ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    margin-right: 10px;

        &:hover {
            background-color: ${props => props.showList ? 'yellow' : '#8cd85c'} ;
            color: black;
            font-weight: bold;
        }
`;

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('bold');
    } if (props.persons.length <= 1) {
        classes.push('red');
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>It's really working!</p>
            <div>
                <StyledButton
                    showList={props.showList}
                    onClick={props.switcher.bind(this, 'Jex')}
                >Switch a Name</StyledButton>
                <StyledButton
                    showList={props.showList}
                    onClick={props.toggler}
                >Toggle the list</StyledButton>
            </div>
        </div>
    )
};

export default cockpit;