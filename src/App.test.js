import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app correctly', () => {
  render(<App />);
  expect(screen.getByAltText(/level[-\s]?up gamer/i)).toBeInTheDocument();
});
