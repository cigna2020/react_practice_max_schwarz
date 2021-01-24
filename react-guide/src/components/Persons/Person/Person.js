import React, {Component, createRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import Auxiliary from '../../../hoc/Auxiliary';
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

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // document.querySelector('input').focus(); // перший input буде в фокусі (курсор)
        // this.inputElement.focus();
        this.inputElementRef.current.focus();

    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            <StyledDiv >
                <h2 onClick={this.props.clickH2}>I'm {this.props.name}! And I'm {this.props.age} years old!</h2>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changeInput}
                    value={this.props.name}
                    // ref={(inputEl) => {this.inputElement = inputEl}}    // останній input буде в фокусі (курсор)
                    ref={this.inputElementRef}
                />
            </StyledDiv>
        );
    };
}

Person.propTypes = {
    clickH2: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeInput: PropTypes.func,
}



export default Person;