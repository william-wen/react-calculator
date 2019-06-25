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
    };
  }

  handleClick(buttonValue, display) {
    if (buttonValue === 'clear'){
      this.setState({
        display: ""
      });
    }
    else if (buttonValue === '='){
      let newDisplay = display.replace(/x/g, "*");
      console.log(newDisplay);
      console.log(math.evaluate(newDisplay));
      this.setState({
        display: math.evaluate(newDisplay)
      });
    }
    else {
      this.setState({
        display: display + buttonValue
      });
    }
  }

  render () {
    const { display } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <Header display={display}/>
          <Keypad onClick={ (buttonValue) => this.handleClick(buttonValue, display) }/>
        </div>
      </div>
    );
  }
}

export default App;
