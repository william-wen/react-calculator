import React, {Component} from 'react';

class Header extends Component {
  render () {
    const { display } = this.props;
    return (
      <div className="header">
        <span> {display} </span>
      </div>
    );
  }
}

export default Header;
