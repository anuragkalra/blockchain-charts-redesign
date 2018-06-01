# Blockchain.info Charts Redesign - Report

Redesign/Reimplementation of https://blockchain.info/charts

## Goals
  + Accomodate network inconsistencies during fetches
  + Provide a new UI for viewing Popular Stats and Currency Statistics on Blockchain.info/charts

## Obstacles
  +  Integrating React with charting library Chart.js
    + Solved using external library react-chartjs-2
  +  Handling network request failures
    + Solved using react design patterns for fetching data

## Tools and Features
  + Functional programming methodology used throughout components, notably .map()
    + Reduces bugs and improves readability
  + Bootstrap styling
  + Interactive tooltips on all charts

## Future Improvements
  + Move all relevant labels to ```labels.json``` and reference labels within react components
    + Would reduce repeated code
  + Refactor components to accomodate multiple languages (internationalization)
    + Provide ```en/translations.js```, ```fr/translations.js```, etc and reference correct file depending on user location
  + Refactor network failure handling to improve code reuse (move functions to utility directory)
  + Incorporate Sass tool to speed up CSS workflows
  + Separate CSS files from components for improved organization
