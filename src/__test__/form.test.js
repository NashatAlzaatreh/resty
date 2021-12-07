import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// import App from "../App";

import Form from "../components/form/Form";
// import Result from "../results/index";

test("need to run a function on button click", async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId("goooooButton");
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
  expect(callApi).toHaveBeenCalled();
});
