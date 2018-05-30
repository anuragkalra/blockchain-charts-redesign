import React from 'react';
import './PageNav.css';

class PageNav extends React.Component {
  render() {
    return (
      <div className="PageNav">
        <ul>
          <li>Currency Statistics</li>
          <li>Block Details</li>
          <li>Mining Information</li>
          <li>Network Activity</li>
          <li>Wallet Activity</li>
        </ul>
      </div>
    );
  }
}

export default PageNav;
