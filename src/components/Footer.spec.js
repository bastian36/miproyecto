import React from "react";
import { screen } from "@testing-library/react";
import Footer from "./Footer";
import { renderWithRouter } from "../test-utils/router";

describe("Footer Component", () => {
  it("debe renderizar la información de contacto", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/santiago,\s*chile/i)).toBeTruthy();
    expect(screen.getByText(/contacto@levelup\.cl/i)).toBeTruthy();
    expect(screen.getByText(/\+56\s*2\s*2345\s*6789/i)).toBeTruthy();
  });

  it("debe mostrar el copyright", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/\b\d{4}\b.*levelup/i)).toBeTruthy();
  });
});
