import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { renderWithRouter } from "../test-utils/router";

describe("Login Component", () => {
  it("debe renderizar el formulario de login", () => {
    const { container } = renderWithRouter(<Login />);
    expect(screen.getByRole('heading', { name: /iniciar sesión/i })).toBeTruthy();
    expect(screen.getByText(/nombre de usuario/i)).toBeTruthy();
    expect(screen.getByText(/correo/i)).toBeTruthy();
    expect(screen.getByText(/contraseña/i)).toBeTruthy();
  });

  it("debe actualizar el estado cuando se escribe en los inputs", async () => {
    const { container } = renderWithRouter(<Login />);
    const emailInput = container.querySelector('input[name="email"]');
    await userEvent.type(emailInput, "test@test.com");
    expect(emailInput.value).toBe("test@test.com");
  });

  it("debe mostrar error con credenciales incorrectas", async () => {
    const { container } = renderWithRouter(<Login />);
    await userEvent.type(container.querySelector('input[name="username"]'), "wrong");
    await userEvent.type(container.querySelector('input[name="email"]'), "wrong@test.com");
    await userEvent.type(container.querySelector('input[name="password"]'), "wrong");
    await userEvent.click(screen.getByRole("button", { name: /iniciar sesión/i }));
    expect(await screen.findByText(/ingrese su clave/i)).toBeTruthy();
  });
});
