import React from 'react';
import BitcoinsInCirculation from './BitcoinsInCirculation';
import MarketPriceUSDChart from './MarketPriceUSDChart';

import './CurrencyStatistics.css';

class CurrencyStatistics extends React.Component {
  render() {
    return (
      <div className="CurrencyStatistics">
        <h1>Currency Statistics</h1>
        <BitcoinsInCirculation />
        <MarketPriceUSDChart />
        <h2>Market Capitalization</h2>
        <h2>USD Exchange Trade Volume</h2>
      </div>
    );
  }
}

export default CurrencyStatistics;
