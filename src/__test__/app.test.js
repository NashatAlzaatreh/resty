import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Results from "../components/results/Results";
import App from "../App";
import Header from "../components/header/Header";

test("rendering the app", async () => {
  render(<Header />);
  const title = await waitFor(() => screen.getByTestId("title"));
  expect(title).toHaveTextContent("RESTy");
});

it("render results", () => {
  const result = {
    Headers: {
      "content-type": "string application/json",
    },
    count: 2,
    results: [
      {
        name: "fake thing 1",
        url: "http://fakethings.com/1",
      },
      {
        name: "fake thing 2",
        url: "http://fakethings.com/2",
      },
    ],
  };

  render(<Results data={result} />);

  const items = screen.getByTestId("renderedData");

  expect(items).toHaveTextContent("fake thing 1");
  expect(items).toHaveTextContent("http://fakethings.com/2");
  expect(items).toHaveTextContent("Headers");
});

test("can get methods", async () => {
  render(<App />);

  const method = screen.getByTestId("method");

  expect(method).toHaveTextContent("Request Method:");
});
// import React from "react";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

// import App from "../App";
// import Form from "../components/form/Form";

// xtest("loads and displays the starting app", async () => {
//   render(<App />);
//   const personName = await waitFor(() => screen.getByTestId("name"));
//   expect(personName).toHaveTextContent("🍕 man!");
// });

// test("can count", async () => {
//   render(<Form />);

//   const button = screen.getByTestId("goButton");
//   const counter = screen.getByTestId("counter-value");

//   fireEvent.click(button);
//   expect(counter).toHaveTextContent(1);
// });

// test("Does the factor value change", async () => {
//   render(<App />);

//   const input = screen.getByTestId("formInput");
//   const factor = screen.getByTestId("factor");

//   for (let index = 0; index < 5; index++) {
//     fireEvent.click(button);
//   }
//   expect(factor).toHaveTextContent("yes");
// });
