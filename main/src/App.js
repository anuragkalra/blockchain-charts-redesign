import React from 'react';
import './App.css';
import Nav from './components/Nav'
import PageHeader from './components/PageHeader';
import PageNav from './components/PageNav';
import MarketPriceUSD from './components/MarketPriceUSD';
import AverageBlockSize from './components/AverageBlockSize';
import TransactionsPerDay from './components/TransactionsPerDay';
import LoaderAnimation from './components/LoaderAnimation';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PageHeader />
        <PageNav />
        <MarketPriceUSD />
        <LoaderAnimation />
        <AverageBlockSize />
        <TransactionsPerDay />
      </div>
    );
  }
}

export default App;
