import React, {Component} from 'react';
import './App.css';
import Keypad from './Keypad.js';
import Header from './Header.js';
import * as math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      memory: "",
    };
  }

  handleClick(buttonValue, display, memory) {
    if (buttonValue === 'clear'){
      this.setState({
        display: "",
        memory: "",
      });
    }
    else if (buttonValue === '='){
      try {
        let newDisplay = display.replace(/x/g, "*");
        let newMemory = memory.replace(/x/g, "*");
        if (newMemory[newMemory.length - 1] === "="){
          newDisplay += newMemory[newMemory.length - 3] + newMemory[newMemory.length - 2];
          this.setState({
            display: (math.evaluate(newDisplay)).toString(),
            memory: newMemory,
          })
        }
        else {
          this.setState({
            display: (math.evaluate(newDisplay)).toString(),
            memory: newMemory + '=',
          });
        }
      }
      catch(err) {
        this.setState({
          display: "Invalid Expression"
        });
        setTimeout(() => {
          this.setState({
            display: "",
            memory: "",
          })
        }, 350);
      }
    }
    else {
      this.setState({
        display: display + buttonValue,
        memory: memory + buttonValue
      });
    }
  }

  render () {
    const { display, memory } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <Header display={display}/>
          <Keypad onClick={ (buttonValue) => this.handleClick(buttonValue, display, memory) }/>
        </div>
      </div>
    );
  }
}

export default App;
