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
6. Remove all artifacts.
7. Remove old content/code.
8. Remove unnecessary code snippets.
9. Refactor any components so that they dont crash on network error
  + Popular Statistics
    + Market Price USD
    + Average Block Size
    + Txn per day
    + Mempool size
  + Charts
    + Bitcoins in circulation
    + Market Capitalization
    + USD Exchange Trade Volume
