import React from 'react';
import SpreadTrends from './SpreadTrends';
import DailyCases from './DailyCases';
import TotalConfirmedChart from './TotalConfirmedChart';
const ChartsDashboard = function (props) {
    return (
        <div className="text-center">
        <h3 className="text-info">Data Visualizations</h3>
        <div className="row">
            <div className="col-md-6">
            <TotalConfirmedChart timeseries={props.timeseries} />
                {/* <SpreadTrends timeseries={props.timeseries} /> */}
            </div>
            <div className="col-md-6">
                {/* <TotalConfirmedChart timeseries={props.timeseries} /> */}
                <DailyCases timeseries={props.timeseries} />
            </div>
        </div>
        </div>
    )
}
export default ChartsDashboard;