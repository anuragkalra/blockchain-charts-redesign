import React from 'react';
//let statistics = require('blockchain.info/statistics');

class MarketPriceUSD extends React.Component {
  constructor() {
    super();
    this.state = {
      marketPrice : null
    }
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/market-price?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let mp = result.values.pop().y;
        this.setState({
          marketPrice : mp
        });
      })
  }

  render() {
    return (
      <div className='MarketPriceUSD'>
        <h3>Market Price (USD)</h3>
        <h2>{this.state.marketPrice}</h2>
        <p>USD</p>
      </div>
    );
  }
}

export default MarketPriceUSD;
