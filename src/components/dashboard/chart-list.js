/**
 * Created by antonifs on 5/22/17.
 */
import React, {Component} from 'react';
import Chart from '../common/chart';

class ChartList extends Component {

  render() {

    const temps1 = [20,21,19,27,25,22];
    const temps2 = [18,21,24,28,25,32];
    const temps3 = [20,21,19,27,25,33];
    const temps4 = [10,21,15,23,22,34];

    return (
      <div className="row demo-tiles">
        <h5>Summary in Chart</h5>
        <div key="1" className="col-xs-2">
          <Chart data={temps1} color="orange" units="K" />
        </div>

        <div key="2" className="col-xs-2">
          <Chart data={temps2} color="blue" units="K" />
        </div>

        <div key="3" className="col-xs-2">
          <Chart data={temps3} color="green" units="K" />
        </div>

        <div key="4" className="col-xs-2">
          <Chart data={temps4} color="black" units="K" />
        </div>
      </div>
    );
  }
}

export default ChartList;
