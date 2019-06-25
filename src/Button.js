import React, {Component} from 'react';

class Button extends Component {

  render () {
    const { buttonColor, buttonValue } = this.props;
    return (
      <span className={buttonColor + '-button button'} onClick={this.props.onClick}> {buttonValue} </span>
    );
  }
}

export default Button;
