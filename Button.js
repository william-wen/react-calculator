import React, {Component} from 'react';

class Button extends Component {

  render () {
    const {buttonType, buttonValue, clickEvent} = this.props;
    return (
      <span className={buttonType + "-button button"} (onClick)={() => clickEvent(buttonValue)} > {buttonValue} </span>
    );
  }
}

export default Button;
