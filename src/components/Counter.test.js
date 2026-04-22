import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('incrementa duas vezes e decrementa uma, resultando em 1', () => {
  render(<Counter />);
  const botaoMais = screen.getByRole('button', { name: '+' });
  const botaoMenos = screen.getByRole('button', { name: '−' });

  fireEvent.click(botaoMais);
  fireEvent.click(botaoMais);
  fireEvent.click(botaoMenos);

  expect(screen.getByText('1')).toBeInTheDocument();
});
