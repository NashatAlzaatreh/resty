import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import "./results.scss";
export default function Results(props) {
  const mock = {
    type: `mock ${props.method} data`,
    "cache-control": "public, max-age=86400, s-maxage=86400",
    "content-type": "application/json; charset=utf-8",
  };
  console.log(props.data);
  return (
    <section>
      <section id="scroll" data-testid="renderedData">
        <h2>Headers</h2>
        <JSONPretty
          data={props.data.headers ? props.data.headers : mock}
        ></JSONPretty>
        <h2>Results</h2>

        <JSONPretty
          id="json-pretty"
          data={props.data.results ? props.data.results : props.data}
        ></JSONPretty>
      </section>
    </section>
  );
}
