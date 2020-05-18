import {LineChart, Line, XAxis, YAxis,Label, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
const TotalConfirmedChart = function(props){
      const data = props.timeseries;
      const recentData = data.slice(data.length-30,data.length); 
  	return (
      <div style={{"display": "inline-block"}}>
        <h4 className="text-danger">Total Cases</h4>
        <LineChart width={500} height={350} data={recentData}>
        <XAxis dataKey="date">
          <Label value="Date" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis type="number" domain={[0, 100000]}>
        <Label value="Total" position="insideLeft" angle={90} />
        </YAxis>
        <CartesianGrid vertical={false} horizontal={false}/>
        <Tooltip/>
        <Legend value="Chart"/>
        <Line type="monotone" dataKey="totalconfirmed" stroke="#ff073a" dot={false}/>
        <Line type="monotone" dataKey="totalrecovered" stroke="#73C686" dot={false}/>
        <Line type="monotone" dataKey="totaldeceased" stroke="#6c757d" dot={false}/>
        </LineChart>
      </div>
    );
};
export default TotalConfirmedChart;