import React, { useState, useReducer } from "react";
import "./app.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Results from "./components/results/Results";
// import { BeatLoader } from "react-spinners";
import History from "./components/history/Historya";
import {
  initialState,
  historyReducer,
  historyAction,
} from "./components/history/History";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(historyReducer, initialState);

  const callApi = async (formData, resData) => {
    // setLoading(true);
    dispatch(historyAction(formData, resData));
    if (formData) {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <Header />
      <div data-testid="method">
        Request Method:{state.requestParams.method}
      </div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} setLoading={setLoading} />
      {state.history.length ? <History history={state.history} /> : null}
      {/* {history.length ? <History history={history} /> : null} */}
      {/* {loading ? <BeatLoader /> : null} */}
      {state.data ? (
        state.requestParams.method === "GET" ? (
          <Results data={state.data} />
        ) : (
          <>
            {/* <BeatLoader /> */}
            {/* <div class="sbl-dot-slide"></div> */}
            <div class="cp-spinner cp-round"></div>
          </>
        )
      ) : null}

      <Footer />
    </React.Fragment>
  );
}
