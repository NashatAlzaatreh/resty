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
