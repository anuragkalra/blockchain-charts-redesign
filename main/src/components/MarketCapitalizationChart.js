import React from 'react';

class MarketCapitalizationChart extends React.Component {
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
    const url = 'https://api.blockchain.info/charts/market-cap?format=json&cors=true';
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
      <div className="MarketCapitalizationChart">
        <h2>Market Capitalization</h2>
        <h3>x1 = {this.state.x1}</h3>
        <h3>y1 = {this.state.y1}</h3>
        <h3>x2 = {this.state.x2}</h3>
        <h3>y2 = {this.state.y2}</h3>
        <p>The total USD value of bitcoin supply in circulation.</p>
      </div>
    );
  }
}

export default MarketCapitalizationChart;
