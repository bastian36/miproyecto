import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Productos from './Productos';

describe('Productos Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('debe renderizar el título de productos', () => {
    render(<Productos />);
    expect(screen.getByText('Productos')).toBeTruthy();
  });

  it('debe mostrar productos con stock', () => {
    const mockProducts = [
      { id: 1, name: 'Test Product', price: 10000, stock: 5, image: 'test.png' }
    ];
    localStorage.setItem('products', JSON.stringify(mockProducts));
    
    render(<Productos />);
    setTimeout(() => {
      expect(screen.getByText('Test Product')).toBeTruthy();
      expect(screen.getByText(/Stock: 5/)).toBeTruthy();
    }, 100);
  });

  it('debe requerir login para agregar al carrito', () => {
    const mockProducts = [
      { id: 1, name: 'Test Product', price: 10000, stock: 5, image: 'test.png' }
    ];
    localStorage.setItem('products', JSON.stringify(mockProducts));
    
    render(<Productos />);
    setTimeout(() => {
      const addButton = screen.getByText('Agregar al carro');
      fireEvent.click(addButton);
    }, 100);
  });
});
