/**
 * Created by antonifs on 5/23/17.
 */
import React from 'react';
import ChartList from './chart-list';
// import Chart from '../common/chart';
import {Line, Bar, Doughnut, Pie} from 'react-chartjs-2';
import {Link} from 'react-router';


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Order Summary',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data2 = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class DashboardPage extends React.Component {

  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="thumbnail">
            <Line
              data={data}
              options={{
                maintainAspectRatio: false,
                offsetWidth: 100
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <Bar
              data={data}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <Doughnut
              data={data2}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <Pie
              data={data2}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
