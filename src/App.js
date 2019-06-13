import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="calculator">
          <div className="header">
          </div>
          <div className="body">
            <div className="row">
              <span className="grey-button button"> 7 </span>
              <span className="grey-button button"> 8 </span>
              <span className="grey-button button"> 9 </span>
              <span className="orange-button button"> / </span>
            </div>
            <div className="row">
              <span className="grey-button button"> 4 </span>
              <span className="grey-button button"> 5 </span>
              <span className="grey-button button"> 6 </span>
              <span className="orange-button button"> X </span>
            </div>
            <div className="row">
              <span className="grey-button button"> 1 </span>
              <span className="grey-button button"> 2 </span>
              <span className="grey-button button"> 3 </span>
              <span className="orange-button button"> + </span>
            </div>
            <div className="row">
              <span className="grey-button button"> . </span>
              <span className="grey-button button"> 0 </span>
              <span className="grey-button button"> = </span>
              <span className="orange-button button"> - </span>
            </div>
            <div className="clearRow">
              Clear
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
