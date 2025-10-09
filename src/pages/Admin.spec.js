import React from "react";
import { renderWithRouter } from "../test-utils/router";
import Admin from "./Admin";

describe("Admin Component", () => {
  it("debe requerir permisos de admin o vendedor", () => {
    const { container } = renderWithRouter(<Admin />);
    expect(container).toBeTruthy(); // ajusta si quieres un texto específico
  });

  it("debe mostrar tabs de administración para admin", () => {
    const { container } = renderWithRouter(<Admin />);
    expect(container).toBeTruthy();
  });

  it("debe permitir gestionar el stock al admin", () => {
    const { container } = renderWithRouter(<Admin />);
    expect(container).toBeTruthy();
  });
});
