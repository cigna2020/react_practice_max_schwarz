import React, {Component} from 'react';

import './App.css';
import Persons from '../components/Persons/Persons.js'
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';



class App extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    state = {
        persons: [
            {id: '332132', name: 'Alex', age: 35},
            {id: 'fdsaf', name: 'Maxim', age: 35},
            {id: 'ferd4343', name: 'Julia', age: 35},
        ],
        showList: false,
        showCocpit: true,
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {id: '332132', name: 'Alexander', age: 35},
                {id: 'fdsaf', name: 'Maxim', age: 35},
                {id: 'ferd4343', name: newName, age: 32},
            ],
        });
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;   // false - список не тоглиться
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate')
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
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];  // копія списку, те саму, this.state.persons.slice(). Просто this.state.persons - погана практика 
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {

        console.log('[App.js] render...')

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
            <WithClass classes={'App'} >
                <button onClick={() => {
                    this.setState({showCocpit: false})
                }}>Toggle Cockpit</button>
                { this.state.showCocpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showList={this.state.showList}
                        personsLength={this.state.persons.length}
                        switcher={this.switchNameHandler}
                        toggler={this.toggleList}
                    />
                ) : null
                }

                {personsList}
            </WithClass>
        )
    }
}

export default App;
