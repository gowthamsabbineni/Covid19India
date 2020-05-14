import React, { useState, useEffect } from "react";

function Row(props) {
  const [states, setState] = useState(props.states);
  useEffect(() => {
    setState(props.states);
  }, [props.states]);

  return (
    <tr>
      <td>
        <span>{states.state}</span>
      </td>

      <td>
        <span>
          {states.confirmed > 0
            ? `${states.confirmed
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                .replace(/^0+/, "")}`
            : "0"}
          <span className="deltas" style={{ color: "#ff073a" }}>
            {states.deltaconfirmed > 0 ? ` [+${states.deltaconfirmed}]` : ""}
          </span>
        </span>
      </td>

      <td>
        <span>
          {states.active > 0
            ? `${states.active
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                .replace(/^0+/, "")}`
            : "0"}
        </span>
      </td>

      <td>
        <span>
          {states.recovered > 0
            ? `${states.recovered
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                .replace(/^0+/, "")}`
            : "0"}
          <span className="deltas" style={{ color: "#28a745" }}>
            {states.deltarecovered > 0 ? ` [+${states.deltarecovered}]` : ""}
          </span>
        </span>
      </td>

      <td>
        <span>
          {states.deaths > 0
            ? `${states.deaths
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                .replace(/^0+/, "")}`
            : "0"}
          <span className="deltas" style={{ color: "#ff073a" }}>
            {states.deltadeaths > 0 ? ` [+${states.deltadeaths}]` : ""}
          </span>
        </span>
      </td>
    </tr>
  );
}

export default Row;
