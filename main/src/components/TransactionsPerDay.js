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
          transactionsPerDay : tpd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") //adds comma
        });
      })
  }

  render() {
    return (
      <div className='TransactionsPerDay'>
        <h3>Transactions per Day</h3>
        <h2>{this.state.transactionsPerDay}</h2>
        <p>Transactions</p>
      </div>
    );
  }
}

export default TransactionsPerDay;
