import React from 'react';
import MarketPriceUSD from './MarketPriceUSD';
import AverageBlockSize from './AverageBlockSize';
import TransactionsPerDay from './TransactionsPerDay';
import MempoolSize from './MempoolSize';
import './PopularStats.css';

class PopularStats extends React.Component {
  render() {
    return (
      <div className="PopularStats">
        <h1>Popular Stats</h1>
        <div className="row">
          <div className="col-md-3">
            <MarketPriceUSD />
          </div>
          <div className="col-md-3">
            <AverageBlockSize />
          </div>
          <div className="col-md-3">
            <TransactionsPerDay />
          </div>
          <div className="col-md-3">
            <MempoolSize />
          </div>
        </div>
      </div>
    );
  }
}

export default PopularStats;
