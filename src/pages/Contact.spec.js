import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  it('debe renderizar el formulario de contacto', () => {
    render(<Contact />);
    expect(screen.getByText('Contacto')).toBeTruthy();
    expect(screen.getByPlaceholderText('Nombre completo')).toBeTruthy();
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeTruthy();
    expect(screen.getByPlaceholderText('Escribe tu mensaje...')).toBeTruthy();
  });

  it('debe actualizar el estado al escribir en los campos', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText('Nombre completo');
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    expect(nameInput.value).toBe('Test User');
  });

  it('debe tener un botón de enviar', () => {
    render(<Contact />);
    const submitButton = screen.getByText('Enviar Mensaje');
    expect(submitButton).toBeTruthy();
  });
});
