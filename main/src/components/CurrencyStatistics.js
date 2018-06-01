import React from 'react';
import BTCinCirculation from './BTCinCirculation';
import MarketPriceUSDChart from './MarketPriceUSDChart';
import MarketCapitalization from './MarketCapitalization';
import USDExchangeTradeVolume from './USDExchangeTradeVolume';
import './CurrencyStatistics.css';

class CurrencyStatistics extends React.Component {
  render() {
    return (
      <div className="CurrencyStatistics">
        <h1>Currency Statistics</h1>
        <BTCinCirculation />
        <MarketPriceUSDChart />
        <MarketCapitalization />
        <USDExchangeTradeVolume />
      </div>
    );
  }
}

export default CurrencyStatistics;
