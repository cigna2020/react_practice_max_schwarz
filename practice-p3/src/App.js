import React, {Component} from 'react'
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        userData: [
            {name: 'Alexander', description: 'Web developer'},
            {name: 'Max', description: 'React teacher'}
        ]
    };

    changeName = (event) => {
        this.setState({
            userData: [
                {name: 'Alexander', description: 'Web developer'},
                {name: event.target.value, description: 'React teacher'}
            ]
        })
    }

    render() {
        return (
            <div className="App" >
                <UserInput changeInput={this.changeName}></UserInput>
                <UserOutput name={this.state.userData[0].name} descr={this.state.userData[0].description}></UserOutput>
                <UserOutput name={this.state.userData[1].name} descr={this.state.userData[1].description} ></UserOutput>
            </div>
        );
    }
}



export default App;
