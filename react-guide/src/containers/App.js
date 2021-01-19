import React, {Component} from 'react';

import './App.css';
import Persons from '../components/Persons/Persons.js'
import Cockpit from '../components/Cockpit/Cockpit';



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

    };

    toggleList = () => {
        this.setState({showList: !this.state.showList})
        console.log(this.state.showList)
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];  // копія списку, те саму, this.state.persons.slice(). Просто this.state.persons - погана практика 
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {

        let personsList = null;

        if (this.state.showList) {
            personsList = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.inputChangeHandler}
                    />
                </div>
            );
        }

        return (
            <div className="App" >
                <Cockpit
                    showList={this.state.showList}
                    persons={this.state.persons}
                    switcher={this.switchNameHandler}
                    toggler={this.toggleList}
                />
                {personsList}
            </div>
        )
    }
}

export default App;
