import React, {Component} from 'react';
import Button from './Button.js';

class Keypad extends Component {

  renderButton(buttonColor, buttonValue) {
    return (
      <Button
        buttonColor={buttonColor}
        buttonValue={buttonValue}
        onClick={() => this.props.onClick(buttonValue)}
      />
    );
  }

  render () {
    return (
      <div className="body">
        <div className="row">
          {this.renderButton('grey', 7)}
          {this.renderButton('grey', 8)}
          {this.renderButton('grey', 9)}
          {this.renderButton('orange', '/')}
        </div>
        <div className="row">
          {this.renderButton('grey', 4)}
          {this.renderButton('grey', 5)}
          {this.renderButton('grey', 6)}
          {this.renderButton('orange', 'x')}
        </div>
        <div className="row">
          {this.renderButton('grey', 1)}
          {this.renderButton('grey', 2)}
          {this.renderButton('grey', 3)}
          {this.renderButton('orange', '+')}
        </div>
        <div className="row">
        {this.renderButton('grey', '.')}
        {this.renderButton('grey', 0)}
        {this.renderButton('grey', '=')}
        {this.renderButton('orange', '-')}
        </div>
        <div className="clearRow" onClick={ () => this.props.onClick('clear')}>
          Clear
        </div>
      </div>
    );
  }
}

export default Keypad;
