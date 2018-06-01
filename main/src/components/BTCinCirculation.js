import React from 'react';
import {Line} from 'react-chartjs-2';

class BTCinCirculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData : {
        labels : [],
        datasets : [{
          label : 'btc-in-circulation',
          borderColor: 'rgb(0, 74, 124, 0.8)',
          backgroundColor: 'rgb(0, 74, 124, 0.2)',
          data : null
        }]
      }
    };
  }

  componentDidMount(){
    const url = 'https://api.blockchain.info/charts/total-bitcoins?format=json&cors=true';
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(result => {
        let xValues = result.values.map(e => e.x.toString());
        let yValues = result.values.map(e => e.y);
        this.setState({
          chartData : {
            labels : xValues,
            datasets : [{
              label : 'btc-in-circulation',
              data : yValues
            }]
          }
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="BTCinCirculation">
        <Line
          data={this.state.chartData}
          options={{
            title : {
              display : true,
              text : 'BTC in Circulation',
              fontSize : 30
            }
          }}
        />
      </div>
    );
  }
}

export default BTCinCirculation;
