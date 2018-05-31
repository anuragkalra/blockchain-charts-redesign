import React from 'react';
import MarketPriceUSD from './MarketPriceUSD';
import AverageBlockSize from './AverageBlockSize';
import TransactionsPerDay from './TransactionsPerDay';
import MempoolSize from './MempoolSize';

class PopularStats extends React.Component {
  render() {
    return (
      <div className="PopularStats">
        <h3>Popular Stats</h3>
        <MarketPriceUSD />
        <AverageBlockSize />
        <TransactionsPerDay />
        <MempoolSize />
      </div>
    );
  }
}

export default PopularStats;
