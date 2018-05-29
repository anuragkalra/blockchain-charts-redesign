//npm install blockchain.info
let statistics = require('blockchain.info/statistics');

function printMarketPrice() {
  statistics.get().then(response => console.log('Market price is: ' + response.market_price_usd));
}

printMarketPrice();
