import {BarChart, XAxis, YAxis,Label,Bar, CartesianGrid, Tooltip, Legend} from 'recharts';
import React from 'react';
 const DailyCases = function(props){
    const data = props.timeseries;
    const recentData = data.slice(data.length-30,data.length);
  	return (
      <div style={{"display": "inline-block"}}>
        <h4 className="text-danger">Daily Cases</h4>
        <BarChart width={500} height={350} data={recentData}>
        <CartesianGrid vertical={false} horizontal={false}/>
        <XAxis dataKey="date">
        <Label value="Date" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis type="number" domain={[0, 6000]}>
        <Label value="Total" position="insideLeft" angle={90} />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="dailyconfirmed" fill="#ff073a" />
        <Bar dataKey="dailyrecovered" fill="#82ca9d" />
        </BarChart>
      </div>
    );
};
export default DailyCases;