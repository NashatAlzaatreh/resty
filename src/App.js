import React, { useState } from "react";
import "./app.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Results from "./components/results/Results";
import { BeatLoader } from "react-spinners";
import History from "./components/history/Historya";

export default function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const callApi = async (formData, resData) => {
    setLoading(true);

    setData(resData);
    setRequestParams(formData);
    history.push(formData);
    setHistory(history);

    setLoading(false);
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {history.length ? <History history={history} /> : null}
      {loading ? <BeatLoader loading /> : null}
      {data ? <Results data={data} /> : null}
      <Footer />
    </React.Fragment>
  );
}
