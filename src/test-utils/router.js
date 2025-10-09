import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export function renderWithRouter(ui, { route = "/", historyEntries = [route] } = {}) {
  return render(<MemoryRouter initialEntries={historyEntries}>{ui}</MemoryRouter>);
}
