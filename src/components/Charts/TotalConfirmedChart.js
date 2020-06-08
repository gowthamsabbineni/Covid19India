import {LineChart, Line, XAxis, YAxis,Label,ResponsiveContainer, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
const TotalConfirmedChart = function(props){
      const data = props.timeseries;
      const recentData = data.slice(data.length-30,data.length); 
  	return (
      <>
        <h4 className="text-secondary">Total Cases</h4>
        <ResponsiveContainer width={"95%"} height={350}>
        <LineChart data={recentData}>
        <XAxis dataKey="date">
          <Label value="Date" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis type="number" domain={[0, 300000]}>
        <Label value="Total" position="insideLeft" angle={90} />
        </YAxis>
        <CartesianGrid vertical={false} horizontal={false}/>
        <Tooltip/>
        <Legend value="Chart"/>
        <Line type="monotone" dataKey="totalconfirmed" stroke="#ff073a" dot={false}/>
        <Line type="monotone" dataKey="totalrecovered" stroke="#73C686" dot={false}/>
        <Line type="monotone" dataKey="totaldeceased" stroke="#6c757d" dot={false}/>
        </LineChart>
        </ResponsiveContainer>
      </>
    );
};
export default TotalConfirmedChart;
