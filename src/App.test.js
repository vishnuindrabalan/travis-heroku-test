import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Hello react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello Sammy/i);
  expect(linkElement).toBeInTheDocument();
});
