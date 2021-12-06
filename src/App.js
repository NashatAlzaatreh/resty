import React, { useState } from "react";
import "./app.scss";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Results from "./components/results/Results";
import { BeatLoader } from "react-spinners";

export default function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (formData, resData) => {
    setData(resData);
    setRequestParams(formData);
  };
  function handleLoad(load) {
    setLoading(load);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} handleLoading={handleLoad} />
      {loading ? <BeatLoader loading /> : <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}
