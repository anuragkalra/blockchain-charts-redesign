import React from 'react';
import './App.css';
import Nav from './components/Nav'
import PageHeader from './components/PageHeader';
import PageNav from './components/PageNav';
import PopularStats from './components/PopularStats';
import LoaderAnimation from './components/LoaderAnimation';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PageHeader />
        <PageNav />
        <PopularStats />
      </div>
    );
  }
}

export default App;
