import React from 'react';
import './App.css';
import Nav from './components/Nav'
import PageHeader from './components/PageHeader';
import PageNav from './components/PageNav';
import MarketPriceUSD from './components/MarketPriceUSD';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PageHeader />
        <PageNav />
        <MarketPriceUSD />
      </div>
    );
  }
}

export default App;
