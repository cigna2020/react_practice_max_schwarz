import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

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
        const style = {
            backgroundColor: 'green',
            color: 'white',
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
                    {this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            clickH2={() => this.deletePersonHandler(index)}
                            changeInput={(event) => this.inputChangeHandler(event, person.id)}
                        />
                    })}
                    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changeInput={this.inputChangeHandler}> My hobie is programing</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} clickH2={this.switchNameHandler.bind(this, 'Drue')} /> */}
                </div>
            );

            style.backgroundColor = 'red';
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
