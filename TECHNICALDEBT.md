# Technical Debt

1. Refactoring: BitcoinsInCirculation => BitcoinsInCirculationChart
2. Refactoring: move all of {BitcoinsInCirculationChart, MarketPriceUSDChart, MarketCapitalizationChart, USDExchangeTradeVolumeChart} into components/charts/
3. Add Blockchain favicon to index.html
  * Get blockchain favicon in .ico format => blockchain.ico   
  * Save in assets
  * Link to file in index.html
    + ```<link rel="shortcut icon" href="%PUBLIC_URL%/blockchain.ico">```
4. Refactoring label implementation
  * Copy labels to label.json
  * Reference label.json for any text labels throughout application
5. Dependency issue with ```yarn start```. Works on local machine but fails on MacBook pro {insert OS X version}. Works with ```npm start```.
