import React from 'react';
import './AverageBlockSize.css';

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
          averageBlockSize : mp.toFixed(2)
        });
      })
  }

  render() {
    return (
      <div className='AverageBlockSize'>
        <h3>Average Block Size</h3>
        <h2>{this.state.averageBlockSize}</h2>
        <p>Megabytes</p>
        <h6>The 24 hour average block size in MB.</h6>
      </div>
    );
  }
}

export default AverageBlockSize;
