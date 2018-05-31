import React from 'react';
//let statistics = require('blockchain.info/statistics');

class AverageBlockSize extends React.Component {
  constructor() {
    super();
    this.state = {
      averageBlockSize : null
    }
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/avg-block-size?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let mp = result.values.pop().y;
        this.setState({
          averageBlockSize : mp
        });
      })
  }

  render() {
    return (
      <div className='AverageBlockSize'>
        <h3>Average Block Size</h3>
        <h2>{this.state.averageBlockSize}</h2>
        <p>Megabytes</p>
      </div>
    );
  }
}

export default AverageBlockSize;
