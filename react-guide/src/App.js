import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

    state = {
        persons: [
            {name: 'Alex', age: 35},
            {name: 'Maxim', age: 35},
            {name: 'Julia', age: 35},
        ],
        showList: false,
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

    inputChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Alex', age: 35},
                {name: event.target.value, age: 35},
                {name: 'Julia', age: 35},
            ]
        });
    }

    toggleList = () => {
        // const dataOfList = this.state.showList;
        this.setState({showList: !this.state.showList})
        console.log(this.state.showList)
    }

    render() {
        const style = {
            backgroundColor: '#efbd93',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            marginRight: '10px'
        };

        let personsList = null;

        if (this.state.showList) {
            personsList = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person name={person.name} age={person.age} />
                    })}
                    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changeInput={this.inputChangeHandler}> My hobie is programing</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} clickH2={this.switchNameHandler.bind(this, 'Drue')} /> */}
                </div>
            );
        }

        return (
            <div className="App" >
                <h1>Hi, I'm a React App</h1>
                <div>
                    <button
                        onClick={this.switchNameHandler.bind(this, 'Jex')}
                        style={style}
                    >Switch a Name</button>
                    <button style={style} onClick={this.toggleList} >Toggle the list</button>
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
