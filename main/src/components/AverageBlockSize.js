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
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(result => {
        let abs = result.values.pop().y;
        this.setState({
          averageBlockSize : abs.toFixed(2)
        });
      }).catch(error => {
        console.log(error);
        this.setState({
          averageBlockSize : 'unavailable!'
        });
      })
  }

  render() {
    return (
      <div className='AverageBlockSize'>
        <h3>Average Block Size</h3>
        <span>
          <h2>{this.state.averageBlockSize}</h2>
          <p>Megabytes</p>
        </span>
        <h6>The 24 hour average block size in MB.</h6>
      </div>
    );
  }
}

export default AverageBlockSize;
