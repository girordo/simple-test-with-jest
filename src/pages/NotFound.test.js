import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./404.js";

describe("Not Found page", () => {
  it("should render the not found page", () => {
    render(<NotFound />);

    const notFound = screen.getByText("Not Found Page");

    expect(notFound).toBeInTheDocument();
  });
});
