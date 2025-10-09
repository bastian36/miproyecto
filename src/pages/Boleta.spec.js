import React from 'react';
import { render, screen } from '@testing-library/react';
import Boleta from './Boleta';

describe('Boleta Component', () => {
  beforeEach(() => localStorage.clear());

  it('debe mostrar mensaje cuando no hay compras', () => {
    render(<Boleta />);
    expect(screen.getByText(/no hay compras recientes/i)).toBeTruthy();
  });

  it('debe renderizar la boleta con datos de compra', async () => {
    const mockBoleta = {
      fecha: '01/08/2024',
      cliente: 'Test User',
      email: 'test@test.com',
      items: [{ id: 1, name: 'Product 1', price: 10000, quantity: 2 }],
      total: 20000,
    };
    localStorage.setItem('purchaseHistory', JSON.stringify([mockBoleta]));

    render(<Boleta />);
    expect(await screen.findByText('Test User')).toBeTruthy();
    expect(await screen.findByText('test@test.com')).toBeTruthy();
    expect(await screen.findByText('Product 1')).toBeTruthy();
  });

  it('debe mostrar información de la empresa', async () => {
    const mockBoleta = {
      fecha: '01/08/2024',
      cliente: 'Test',
      email: 'test@test.com',
      items: [],
      total: 0,
    };
    localStorage.setItem('purchaseHistory', JSON.stringify([mockBoleta]));

    render(<Boleta />);
    expect(await screen.findByText(/levelup gamer/i)).toBeTruthy();
    expect(await screen.findByText(/santiago,\s*chile/i)).toBeTruthy();
  });
});
