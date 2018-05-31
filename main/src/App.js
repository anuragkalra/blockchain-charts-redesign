import React from 'react';
import './App.css';
import Nav from './components/Nav'
import PageHeader from './components/PageHeader';
import PageNav from './components/PageNav';
import PopularStats from './components/PopularStats';
import CurrencyStatistics from './components/CurrencyStatistics';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PageHeader />
        <PageNav />
        <PopularStats />
        <CurrencyStatistics />
      </div>
    );
  }
}

export default App;
