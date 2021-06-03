import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home page", () => {
  it("should render the home page", () => {
    render(<Home />);

    const home = screen.getByText(
      "Hehe here we are again on a pre holiday studying night",
    );

    expect(home).toBeInTheDocument();
  });
});
