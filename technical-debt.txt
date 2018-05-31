# Technical Debt

1. Refactoring: BitcoinsInCirculation => BitcoinsInCirculationChart
2. Refactoring: move all of {BitcoinsInCirculationChart, MarketPriceUSDChart, MarketCapitalizationChart, USDExchangeTradeVolumeChart} into components/charts/
3. Add Blockchain favicon to index.html

   3.1. Get blockchain favicon in .ico format => blockchain.ico
   3.2 Save in assets
   3.3. Link to file in index.html
    ```<link rel="shortcut icon" href="%PUBLIC_URL%/blockchain.ico">```
