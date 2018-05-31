import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li>Blockchain</li>
          <li>Wallet</li>
          <li>Data</li>
          <li>Api</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
