import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

    state = {
        persons: [
            {name: 'Alex', age: 35},
            {name: 'Maxim', age: 35},
            {name: 'Julia', age: 35},
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: 'Alexander', age: 35},
                {name: 'Maxim', age: 35},
                {name: newName, age: 32},
            ]
        });
    }
    render() {
        return (
            <div className="App" >
                <h1>Hi, I'm a React App</h1>
                <button onClick={this.switchNameHandler.bind(this, 'Jex')}>Switch a Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clickH2={this.switchNameHandler.bind(this, 'Koko')}> My hobie is programing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} clickH2={this.switchNameHandler.bind(this, 'Drue')} />

            </div>
        )
    }
    // return (
    //     React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
    // );


}

export default App;
