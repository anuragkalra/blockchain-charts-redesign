componentDidMount() {
  const url = 'https://api.blockchain.info/charts/market-price?format=json&cors=true';
  fetch(url)
    .then(response => response.json())
    .then(result => {
      let xValues = result.values.map(e => e.x.toString())
      let yValues = result.values.map(e => e.y)
      this.setState({
        chartData : {
          labels : xValues,
          datasets : [{
            label : 'market-price-usd',
            backgroundColor: 'rgb(0, 74, 124)',
            data : yValues
          }]
        }
      });

    });
}
