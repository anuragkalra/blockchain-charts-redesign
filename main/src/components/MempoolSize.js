import React from 'react';
import './MempoolSize.css';

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
          mempoolSize : mps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  //adds comma
        });
      })
  }

  render() {
    return (
      <div className='MempoolSize'>
        <h3>Mempool Size</h3>
        <h2>{this.state.mempoolSize}</h2>
        <p>Bytes</p>
        <h6>The aggregate size of transactions waiting to be confirmed.</h6>
      </div>
    );
  }
}

export default MempoolSize;
