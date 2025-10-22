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
    const passInput = container.querySelector('input[name="pass"]');
    const pass2Input = container.querySelector('input[name="pass2"]');
    
    await userEvent.type(passInput, "pass123");
    await userEvent.type(pass2Input, "pass456");
    
    expect(passInput.value).toBe("pass123");
    expect(pass2Input.value).toBe("pass456");
    expect(passInput.value).not.toBe(pass2Input.value);
  });
});
