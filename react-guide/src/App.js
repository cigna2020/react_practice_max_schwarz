import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js'

const app = props => {

    const [personsState, serPersonState] = useState({ // приймає два аргументи: - сам state та функцію для його зміни, що переписує ПОВНІСТЮ state
        persons: [
            {name: 'Alex', age: 35},
            {name: 'Maxim', age: 35},
            {name: 'Julia', age: 35},
        ]
    });

    const someDate = useState('Some text');  // useState - може будти використано n-кількість раз

    const switchNameHandler = () => {
        serPersonState({
            persons: [
                {name: 'Alexander', age: 35},
                {name: 'Maxim', age: 35},
                {name: 'Julia', age: 32},
            ]
        });
        console.log(someDate);
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <button onClick={switchNameHandler}>Switch a Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

        </div>
    );
    // return (
    //     React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
    // );


}

export default app;
