import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Header component", () => {
  it("should render the footer component", () => {
    render(<Footer />);

    const footer = screen.getByText("Just a footer for test");

    expect(footer).toBeInTheDocument;
  });
});
