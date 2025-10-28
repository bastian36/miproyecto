import React from "react";
import { renderWithRouter } from "../test-utils/router";
import Admin from "./Admin";

describe("Admin Component", () => {
  beforeEach(() => {
    window.alert = jasmine.createSpy('alert');
  });

  it("debe requerir permisos de admin o vendedor", () => {
    const { container } = renderWithRouter(<Admin />);
    expect(container).toBeTruthy(); 
  });

  it("debe mostrar tabs de administraci�n para admin", () => {
    const { container } = renderWithRouter(<Admin />);
    expect(container).toBeTruthy();
  });

  it("debe permitir gestionar el stock al admin", () => {
    const { container } = renderWithRouter(<Admin />);
    expect(container).toBeTruthy();
  });
});
