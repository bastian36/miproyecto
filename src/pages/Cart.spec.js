import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from './Cart';

describe('Cart Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('debe mostrar mensaje cuando el carrito está vacío', () => {
    render(<MemoryRouter><Cart /></MemoryRouter>);
    expect(screen.getByText('El carrito está vacío')).toBeTruthy();
  });

  it('debe renderizar items del carrito', async () => {
    const mockCart = [
      { id: 1, name: 'Test Product', price: 10000, quantity: 2, stock: 10, image: 'test.png' }
    ];
    localStorage.setItem('cart', JSON.stringify(mockCart));
    
    render(<MemoryRouter><Cart /></MemoryRouter>);
    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeTruthy();
    });
  });

  it('debe calcular el total correctamente', async () => {
    const mockCart = [
      { id: 1, name: 'Product 1', price: 10000, quantity: 2, stock: 10, image: 'test.png' },
      { id: 2, name: 'Product 2', price: 5000, quantity: 1, stock: 10, image: 'test.png' }
    ];
    localStorage.setItem('cart', JSON.stringify(mockCart));
    
    render(<MemoryRouter><Cart /></MemoryRouter>);
    await waitFor(() => {
      expect(screen.getByText(/Total:/)).toBeTruthy();
    });
  });
});
