import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { name, company, address } from "faker";

import FormTest from "./formtest";

describe("rendering and submitting formik form", () => {
  it("should be able to add data into inputs", () => {
    render(<FormTest />);

    const form = screen.getByTestId("form-test");

    userEvent.type(screen.getByLabelText(/first name/i), "Tarcisio");
    userEvent.type(screen.getByLabelText(/second name/i), "Siqueira");
    userEvent.type(screen.getByLabelText(/address/i), "Guilherme Ventureli");
    userEvent.type(screen.getByLabelText(/company/i), "dasa");
    userEvent.type(screen.getByLabelText(/birthday/i), "1990-10-14");

    fireEvent.submit(form);

    expect(screen.getByLabelText(/first name/i)).toBeTruthy();
  });
});
