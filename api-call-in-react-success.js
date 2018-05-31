const url = 'https://api.blockchain.info/charts/market-price?format=json&cors=true';
fetch(url).then(response => console.log(response), error => console.log(error));

const url = 'https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true'
fetch(url).then(response => response.json()).then(r => console.log(r));
