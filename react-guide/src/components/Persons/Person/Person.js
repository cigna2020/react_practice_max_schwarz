import React, {Component} from 'react';
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

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');

        return (
            <StyledDiv>
                <h2 onClick={this.props.clickH2}>I'm {this.props.name}! And I'm {this.props.age} years old!</h2>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeInput} value={this.props.name} />
            </StyledDiv>
        );
    };
}



export default Person;