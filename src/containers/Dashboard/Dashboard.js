import React, { useEffect, useState } from "react";
import CardView from "../../components/CardView/CardView";
import Tableview from "../../components/CasesTable/CasesTable";
import classes from "./Dashboard.module.css";
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import ChartsDashboard from '../../components/Charts/ChartsDashboard';
var moment = require('moment');
moment().format();

const HomePage = (props) => {
  const [dataItem, setdataItem] = useState([]);
  const [lastupdated, setlastupdated] = useState();
  useEffect(() => {
      getData();
  },[]);

  const getData = function () {
    axios.get("https://api.covid19india.org/data.json")
      .then(resp => {
        setdataItem(resp.data);
        setlastupdated(
          moment(resp.data.statewise[0].lastupdatedtime, "DD/MM/YYYY h:mm").format("MMMM Do YYYY h:mm a")
        );
      })
      .catch(err => {
        alert(err);
      })
  }
  let lDashboard = <Spinner />
  if (dataItem.statewise) {
    lDashboard = (  <>
                    <h3 className={classes.last_updated}>Last updated : {lastupdated} IST</h3>
                    <CardView data={dataItem.statewise} />
                    <Tableview tabledata={dataItem.statewise} />
                    <ChartsDashboard timeseries={dataItem.cases_time_series}/>
                    </>
                 )
  }
  return (
      <div style={{"marginTop":"50px"}}>
        {lDashboard}
      </div>
  );
};

export default HomePage;
