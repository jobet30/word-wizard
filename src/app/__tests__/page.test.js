// App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders title and start button", () => {
    render(<App />);
    expect(screen.getByText(/word wizard/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /start game/i }),
    ).toBeInTheDocument();
  });

  test("button click triggers alert", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.click(screen.getByRole("button", { name: /start game/i }));
    expect(window.alert).toHaveBeenCalledWith("Button clicked!");
    window.alert.mockRestore();
  });
});
