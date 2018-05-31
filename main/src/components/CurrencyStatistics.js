import React from 'react';
import BitcoinsInCirculation from './BitcoinsInCirculation';
import MarketPriceUSDChart from './MarketPriceUSDChart';
import MarketCapitalizationChart from './MarketCapitalizationChart';
import USDExchangeTradeVolumeChart from './USDExchangeTradeVolumeChart';

import './CurrencyStatistics.css';

class CurrencyStatistics extends React.Component {
  render() {
    return (
      <div className="CurrencyStatistics">
        <h1>Currency Statistics</h1>
        <BitcoinsInCirculation />
        <MarketPriceUSDChart />
        <MarketCapitalizationChart />
        <USDExchangeTradeVolumeChart />
      </div>
    );
  }
}

export default CurrencyStatistics;
