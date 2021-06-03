import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  it("should render the header component", () => {
    render(<Header />);

    const header = screen.getAllByText("New link");

    expect(header).toBeInTheDocument;
  });
});
