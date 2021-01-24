import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context';

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

    static contextType = AuthContext;

    componentDidMount() {
        // document.querySelector('input').focus(); // перший input буде в фокусі (курсор)
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        // console.log(this.context.login)

    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            <StyledDiv >
                {/* <AuthContext.Consumer>
                    {context =>
                        context.auth ? <p>Authendicated</p> : <p>Please, Login</p>
                    }
                </AuthContext.Consumer> */}
                {/* Використовуючи  static contextType = AuthContext отримуємо доступ до контексту без створення AuthContext.Consumer
                Може бути використано лише в class-based component, у func.-based використовуй useContext */}
                {this.context.auth ? <p>Authendicated</p> : <p>Please, Login</p>}
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