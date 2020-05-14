import React, { useState, useEffect } from "react";
import classes from "./CardView.module.css";

function CardView(props) {
  const [data, setData] = useState(props.data);
  const [confirmed, setConfirmed] = useState(0);
  const [active, setActive] = useState(0);
  const [deceased, setDeath] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deltaconfirmed, setdeltaconfirmed] = useState(0);
  const [deltadeaths, setdeltadeaths] = useState(0);
  const [deltarecovered, setdeltarecovered] = useState(0);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    let confirmed = 0;
    let active = 0;
    let deceased = 0;
    let recovered = 0;
    let deltaconfirmed = 0;
    let deltadeaths = 0;
    let deltarecovered = 0;

    data.forEach((item, index) => {
      if (index === 0) {
        confirmed = item.confirmed
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .replace(/^0+/, "");

        active = item.active
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .replace(/^0+/, "");

        deceased = item.deaths
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .replace(/^0+/, "");

        recovered = item.recovered
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .replace(/^0+/, "");

        deltaconfirmed = item.deltaconfirmed
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace(/^0+/, "");

        deltadeaths = item.deltadeaths
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .replace(/^0+/, "");
        deltarecovered = item.deltarecovered
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          .replace(/^0+/, "");
      }
    });

    setConfirmed(confirmed);
    setActive(active);
    setDeath(deceased);
    setRecovered(recovered);
    setdeltaconfirmed(deltaconfirmed);
    setdeltadeaths(deltadeaths);
    setdeltarecovered(deltarecovered);
  }, [data]);

  return (
    <div className={classes.Home}>
      <div className="row cards justify-content-center">
        <div className="col-md-3 col-sm-3 col-6">
          <div className={classes.isred}>
            <h5 className={classes.card_header}>Confirmed</h5>
            <h3 className={classes.card_header_count}>
              {confirmed} <span className={classes.increase}>{parseInt(deltaconfirmed) > 0 ? ` [+${deltaconfirmed}]` : ""}</span>
            </h3>
          </div>
        </div>

        <div className="Home-case col-md-3 col-sm-3 col-6">
          <div className={classes.isblue}>
            <h5 className={classes.card_header}>Active</h5>

            <h3 className={classes.card_header_count}>{active}</h3>
          </div>
        </div>
      </div>
      <div className="row cards justify-content-center">
        <div className="Home-case col-md-3 col-sm-3 col-6">
          <div className={classes.isgreen}>
            <h5 className={classes.card_header}>Recovered</h5>

            <h3 className={classes.card_header_count}>
              {recovered} <span className="increase">{parseInt(deltarecovered) > 0 ? ` [+${deltarecovered}]` : ""}</span>
            </h3>
          </div>
        </div>

        <div className="Home-case col-md-3 col-sm-3 col-6">
          <div className={classes.isgrey}>
            <h5 className={classes.card_header}>Deceased</h5>
            <h3 className={classes.card_header_count}>
              {deceased}
              <span className={classes.increase}> {parseInt(deltadeaths) > 0 ? ` [+${deltadeaths}]` : ""}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
