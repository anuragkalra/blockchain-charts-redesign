import React from 'react';

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
          transactionsPerDay : tpd
        });
      })
  }

  render() {
    return (
      <div className='TransactionsPerDay'>
        <h2>Transactions per Day</h2>
        <h1>{this.state.transactionsPerDay}</h1>
        <p>Transactions</p>
      </div>
    );
  }
}

export default TransactionsPerDay;
