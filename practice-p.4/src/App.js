import React, {Component} from 'react'
import './App.css';
import Validation from './components/Validation/Validation';
import CharComponent from './components/Char/CharComponent';

class App extends Component {

    state = {
        inputValue: '',
    }

    inputHandler = (event) => {
        let inputValue = [...this.state.inputValue];

        const newInputValue = event.target.value;

        inputValue = newInputValue;

        this.setState({inputValue: inputValue});

        console.log('input: ' + inputValue);
    }

    deleteChar = (index) => {
        const text = this.state.inputValue.split('');

        text.splice(index, 1);

        const newText = text.join('');

        this.setState({inputValue: newText});
    }

    changeChar = () => {
        const chars = this.state.inputValue.split('');
        console.log(chars);

    }

    render() {
        const style = {
            backgroundColor: '#efbd93',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            marginRight: '10px',
            width: '30%',
            height: '30px',
            margin: '20px auto'
        }

        const charStyle = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black',
            cursor: 'pointer',
        }

        const charList = this.state.inputValue.split('').map((char, index) => {
            return <CharComponent
                charStyle={charStyle}
                deleteChar={() => this.deleteChar(index)}
                key={index}
                children={char}
            ></CharComponent>
        });

        let textOfParagr = null;

        if (this.state.inputValue.length >= 5) {
            textOfParagr = 'Now text long enough!'
        } else {
            textOfParagr = 'I need more text!!!'
        }

        return (
            <div className="App" >
                <h1>Hello World!</h1>
                <input type="text" onChange={(event) => this.inputHandler(event)} value={this.state.inputValue} style={style}></input>
                <Validation
                    inputValue={this.state.inputValue}
                    textOfParagr={textOfParagr}
                />
                {charList}
            </div >
        );
    }
}

export default App;
