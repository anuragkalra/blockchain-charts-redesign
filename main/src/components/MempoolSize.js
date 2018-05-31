import React from 'react';

class MempoolSize extends React.Component {
  constructor() {
    super();
    this.state = {
      mempoolSize : null
    }
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/mempool-size?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let mps = result.values.pop().y;
        this.setState({
          mempoolSize : mps
        });
      })
  }

  render() {
    return (
      <div className='MempoolSize'>
        <h2>Mempool Size</h2>
        <h1>{this.state.mempoolSize}</h1>
        <p>Bytes</p>
      </div>
    );
  }
}

export default MempoolSize;
