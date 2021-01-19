import React, {Component} from 'react';
import styled from 'styled-components';

import './App.css';
import Persons from '../components/Persons/Persons.js'

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

class App extends Component {

    state = {
        persons: [
            {id: '332132', name: 'Alex', age: 35},
            {id: 'fdsaf', name: 'Maxim', age: 35},
            {id: 'ferd4343', name: 'Julia', age: 35},
        ],
        showList: false,
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {id: '332132', name: 'Alexander', age: 35},
                {id: 'fdsaf', name: 'Maxim', age: 35},
                {id: 'ferd4343', name: newName, age: 32},
            ]
        });
    }

    inputChangeHandler = (event, id) => {
        const pesronIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        // const person = Object.assign({}, this.state.persons[pesronIndex]);
        const person = {...this.state.persons[pesronIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[pesronIndex] = person;

        this.setState({persons: persons});

        // this.setState({
        //     persons: [
        //         {id: '332132', name: 'Alex', age: 35},
        //         {id: 'fdsaf', name: event.target.value, age: 35},
        //         {id: 'ferd4343', name: 'Julia', age: 35},
        //     ]
        // });
    };

    toggleList = () => {
        // const dataOfList = this.state.showList;
        this.setState({showList: !this.state.showList})
        console.log(this.state.showList)
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];  // копія списку, те саму, this.state.persons.slice(). Просто this.state.persons - погана практика 
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }



    render() {
        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer',
        //     marginRight: '10px',
        //     ':hover': {
        //         backgroundColor: '#8cd85c',
        //         color: 'black',
        //         fontWeight: 'bold',
        //     }
        // };

        let personsList = null;

        if (this.state.showList) {
            personsList = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.inputChangeHandler}
                    />
                    {/* {this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            clickH2={() => this.deletePersonHandler(index)}
                            changeInput={(event) => this.inputChangeHandler(event, person.id)}
                        />
                    })} */}
                </div>
            );

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'yellow',
            //     color: 'black',
            //     fontWeight: 'bold',
            // }
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('bold');
        } if (this.state.persons.length <= 1) {
            classes.push('red');
        }


        return (
            <div className="App" >
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>It's really working!</p>
                <div>
                    <StyledButton
                        showList={this.state.showList}
                        onClick={this.switchNameHandler.bind(this, 'Jex')}
                    // style={style} // radium requires a unique element
                    >Switch a Name</StyledButton>
                    <StyledButton
                        showList={this.state.showList}
                        onClick={this.toggleList}
                    >Toggle the list</StyledButton>
                </div>
                {personsList}
            </div>
        )
    }
    // return (
    //     React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
    // );


}

export default App;
