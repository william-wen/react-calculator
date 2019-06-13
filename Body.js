import React, {Component} from 'react';
import Button from './Button.js';

class Body extends Component {

  numberClick(buttonValue){

  }

  render () {
    return (
      <div className="body">
        <div className="row">
          <Button buttonType="grey" buttonValue="7" clickEvent={numberClick} />
          <Button buttonType="grey" buttonValue="8" clickEvent={numberClick} />
          <Button buttonType="grey" buttonValue="9" clickEvent={numberClick} />
          <Button buttonType="orange" buttonValue="/" clickEvent={numberClick} />
        </div>
        <div className="row">
        <Button buttonType="grey" buttonValue="4" clickEvent={numberClick} />
        <Button buttonType="grey" buttonValue="5" clickEvent={numberClick} />
        <Button buttonType="grey" buttonValue="6" clickEvent={numberClick} />
        <Button buttonType="orange" buttonValue="X" clickEvent={numberClick} />
        </div>
        <div className="row">
          <Button buttonType="grey" buttonValue="1" clickEvent={numberClick} />
          <Button buttonType="grey" buttonValue="2" clickEvent={numberClick} />
          <Button buttonType="grey" buttonValue="3" clickEvent={numberClick} />
          <Button buttonType="orange" buttonValue="+" clickEvent={numberClick} />
        </div>
        <div className="row">
          <Button buttonType="grey" buttonValue="." clickEvent={numberClick} />
          <Button buttonType="grey" buttonValue="0" clickEvent={numberClick} />
          <Button buttonType="grey" buttonValue="=" clickEvent={numberClick} />
          <Button buttonType="orange" buttonValue="-" clickEvent={numberClick} />
        </div>
        <div className="clearRow">
          Clear
        </div>
      </div>
    );
  }
}

export default Body;
