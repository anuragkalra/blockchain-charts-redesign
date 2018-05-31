import React from 'react';

class USDExchangeTradeVolumeChart extends React.Component {
  constructor() {
    super();
    this.state = {
      x1 : null,
      y1 : null,
      x2 : null,
      y2 : null
    }
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/trade-volume?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let pt1 = result.values[0];
        let pt2 = result.values.pop();
        this.setState({
          x1 : pt1.x,
          y1 : pt1.y,
          x2 : pt2.x,
          y2 : pt2.y
        });
      })
  }

  render() {
    return (
      <div className="USDExchangeTradeVolumeChart">
        <h2>USD Exchange Trade Volume</h2>
        <h3>x1 = {this.state.x1}</h3>
        <h3>y1 = {this.state.y1}</h3>
        <h3>x2 = {this.state.x2}</h3>
        <h3>y2 = {this.state.y2}</h3>
        <p>The total USD value of trading volume on major bitcoin exchanges.</p>
      </div>
    );
  }
}

export default USDExchangeTradeVolumeChart;
