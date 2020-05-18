import React, { useState, useEffect, useMemo } from "react";
import Row from "./Row/Row";
import classes from  "./CasesTable.module.css";
import { Scrollbars } from 'react-custom-scrollbars';

function CasesTable(props) {
  const [tabledata, setData] = useState(props.tabledata);
  const [sortConfig, setSortConfig] = useState({});
  const [Default, setDefault] = useState(true);

  useEffect(() => {
    setData(props.tabledata);
  }, [props.tabledata]);


  const sortedItem = useMemo(() => {
    let sortedtabledata = [...tabledata];
    sortedtabledata.splice(0, 1);
    if (sortedtabledata !== null) {
      sortedtabledata.sort((a, b) => {

        
        if (parseInt(a[sortConfig.key]) < parseInt(b[sortConfig.key])) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }

        if (parseInt(a[sortConfig.key]) > parseInt(b[sortConfig.key])) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }

        return b.confirmed - a.confirmed;
      });
    }

    return sortedtabledata;
  }, [tabledata, sortConfig]);


  const requestSort = (key) => {
    setDefault(false);
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  const getClassName = (next) => {
    return sortConfig.key === next ? sortConfig.direction : undefined;
  };

  return (
    <Scrollbars className={classes.scrollbar_height} >
    <div className={classes.casesTableDiv}>
      <table className={` table ${classes.fixed_header}`}>
        <thead className={classes.theaddata}>
          <tr className={classes.sticky}>
            <th className={classes.sticky}>
              <span>STATES/UT</span>
            </th>

            <th className={classes.sticky}>
              <span
                 className={Default ? "default" : getClassName("confirmed")}
                onClick={() => requestSort("confirmed")}
              >
                {" "}
                {window.innerWidth <= 769
                  ? window.innerWidth <= 330
                    ? "C"
                    : "Confirmed"
                  : "Confirmed"}
              </span>
            </th>

            <th className={classes.sticky}>
              <span
                className={getClassName("active")}
                onClick={() => requestSort("active")}
              >
                {" "}
                {window.innerWidth <= 769
                  ? window.innerWidth <= 330
                    ? "A"
                    : "Active"
                  : "Active"}
              </span>
            </th>

            <th className={classes.sticky}>
              <span
                className={getClassName("recovered")}
                onClick={() => requestSort("recovered")}
              >
                {window.innerWidth <= 769
                  ? window.innerWidth <= 330
                    ? "R"
                    : "Recovered"
                  : "Recovered"}
              </span>
            </th>

            <th className={classes.sticky}>
              <span
                className={getClassName("deaths")}
                onClick={() => requestSort("deaths")}
              >
                {window.innerWidth <= 769
                  ? window.innerWidth <= 330
                    ? "D"
                    : "Deceased"
                  : "Deceased"}
              </span>
            </th>
          </tr>
        </thead>
                
        <tbody>
          {sortedItem.map((state, index) => {
            return <Row states={state} key={index} />;
          })}
        </tbody>
      </table>
    </div>
    </Scrollbars >
  );
}

export default CasesTable;
