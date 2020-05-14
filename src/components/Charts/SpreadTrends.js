import {LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip} from 'recharts';
import React from 'react'
const SpreadTrends = function(props){
    const data = props.timeseries;
    const recentData = data.slice(data.length-30,data.length); 
  	return (
    	<div style={{"display": "inline-block"}} id="SpreadTrends">
      	<h4 className="text-danger">Spread Trends</h4>
        <p className="text-info">Total Confirmed</p>
        <LineChart width={500} height={220} data={recentData} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis>
          <Label value="Total" position="insideLeft" angle={90} />
          </YAxis>
          <Tooltip/>
          <Line type='monotone' dataKey='totalconfirmed' stroke='#ff073a' fill='#8884d8' />
        </LineChart>
        <p className="text-info">Total Recovered</p>
        <LineChart width={500} height={220} data={recentData} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis type="number" domain={[0, 50000]}>
          <Label value="Total" position="insideLeft" angle={90} />
          </YAxis>
          <Tooltip/>
          <Line type='monotone' dataKey='totalrecovered' stroke='#73C686' fill='#82ca9d' />
        </LineChart>
        <p className="text-info">Total Deceased</p>
        <LineChart width={500} height={220} data={recentData} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis type="number" domain={[0, 15000]}>
          <Label value="Total" position="insideLeft" angle={90} />
          </YAxis>
          <Tooltip/>
          <Line type='monotone' dataKey='totaldeceased' stroke='black' fill='#6c757d' />
        </LineChart>
      </div>
    );
  }

  export default SpreadTrends;
