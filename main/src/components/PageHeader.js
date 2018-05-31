import React from 'react';
import './PageHeader.css';

class PageHeader extends React.Component {
  render() {
    return (
      <div className='PageHeader'>
        <h1>Blockchain Charts</h1>
        <p>The most trusted source for data on the bitcoin blockchain.</p>
      </div>
    );
  }
}

export default PageHeader;
