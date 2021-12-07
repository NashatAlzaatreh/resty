import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import "./results.scss";
export default function Results(props) {
  return (
    <section id="scroll">
      <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
      {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
    </section>
  );
}
