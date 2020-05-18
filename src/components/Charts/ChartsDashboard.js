import React from 'react';
import DailyCases from './DailyCases';
import TotalConfirmedChart from './TotalConfirmedChart';
const ChartsDashboard = function (props) {
    return (
        <div className="row text-center p-4 mx-auto">
            <div className="col-md-6">
            <TotalConfirmedChart timeseries={props.timeseries} />
            </div>
            <div className="col-md-6">
                <DailyCases timeseries={props.timeseries} />
            </div>
        </div>
    )
}
export default ChartsDashboard;