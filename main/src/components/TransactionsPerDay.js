import React from 'react';
import './TransactionsPerDay.css';

class TransactionsPerDay extends React.Component {
  constructor() {
    super();
    this.state = {
      transactionsPerDay : null
    }
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/n-transactions?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let tpd = result.values.pop().y;
        this.setState({
          transactionsPerDay : tpd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") //adds comma
        });
      })
  }

  render() {
    return (
      <div className='TransactionsPerDay'>
        <h3>Transactions per Day</h3>
        <span>
          <h2>{this.state.transactionsPerDay}</h2>
          <p>Transactions</p>
        </span>        
        <h6>The aggregate number of confirmed Bitcoin transactions in the past 24 hours.</h6>
      </div>
    );
  }
}

export default TransactionsPerDay;
