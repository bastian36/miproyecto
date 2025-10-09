import React from "react";
import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { renderWithRouter } from "../test-utils/router";

describe("Navbar Component", () => {
  beforeEach(() => localStorage.clear());

  it("debe renderizar el logo correctamente", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByAltText(/level[-\s]?up gamer/i)).toBeTruthy();
  });

  it("debe mostrar los enlaces de navegación", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByRole("link", { name: /productos/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /nosotros/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /blog/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /contacto/i })).toBeTruthy();
  });

  it("debe mostrar enlaces de login cuando no hay usuario", () => {
    localStorage.removeItem("currentUser");
    renderWithRouter(<Navbar />);
    expect(screen.getByRole("link", { name: /iniciar sesión/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /registrarse/i })).toBeTruthy();
  });
});
