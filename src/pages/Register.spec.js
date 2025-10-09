import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";
import { renderWithRouter } from "../test-utils/router";

describe("Register Component", () => {
  beforeEach(() => localStorage.clear());

  it("debe renderizar el formulario de registro", () => {
    renderWithRouter(<Register />);
    expect(screen.getByText(/crear cuenta/i)).toBeTruthy();
    expect(screen.getByText(/nombre completo/i)).toBeTruthy();
    expect(screen.getByText(/correo/i)).toBeTruthy();
  });

  it("debe validar que las contraseñas coincidan", async () => {
    const { container } = renderWithRouter(<Register />);
    await userEvent.type(container.querySelector('input[name="pass"]'), "pass123");
    await userEvent.type(container.querySelector('input[name="pass2"]'), "pass456");
    await userEvent.click(screen.getByRole("button", { name: /registrarse/i }));
    expect(await screen.findByText(/contraseñas no coinciden/i)).toBeTruthy();
  });
});
