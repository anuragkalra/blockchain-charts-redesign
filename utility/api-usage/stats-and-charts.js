//npm install blockchain.info
let statistics = require('blockchain.info/statistics');

//Responds with a json object containing an overview of many Bitcoin statistics unless the stat option is specified. View an example response here.
function getStats() {
  statistics.get().then(response => console.log(response));
}

//Responds with a json object that has a values property set to an array of chart coordinate objects in the form: {x:<number>,y:<number>}
function getChart(chartType) {
  statistics.getChartData(chartType, {timespan : '90d'}).then(response => console.log(response));
}

getChart('market-price');
getStats();
