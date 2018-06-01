import React from 'react';
import './MarketPriceUSD.css';

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
          marketPrice : mp.toFixed(2)
        });
      })
  }

  render() {
    return (
      <div className='MarketPriceUSD'>
        <h3>Market Price (USD)</h3>
        <span>
          <h2>${this.state.marketPrice}</h2>
          <p>USD</p>
        </span>
        <h6>Average USD market price across major bitcoin exchanges.</h6>
      </div>
    );
  }
}

export default MarketPriceUSD;
