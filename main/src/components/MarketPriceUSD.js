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
    //fetch(url).then(r => console.log(r));

    return (
      <div className='MarketPriceUSD'>
        Market Price is {this.state.marketPrice}
      </div>
    );
  }
}

export default MarketPriceUSD;
