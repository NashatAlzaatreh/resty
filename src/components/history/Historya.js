import React from "react";
import "./history.scss";

function History(props) {
  return (
    <div>
      <h3>History:</h3>
      {props.history.map((elm) => {
        return (
          <div>
            <ul>
              <li>
                <span id="elm">{elm.method}</span>
                <button class="url">{elm.url}</button>
              </li>
            </ul>
            {/* {elm.method.toUpperCase()} {elm.url} <br /> */}
          </div>
        );
      })}
    </div>
  );
}

export default History;
