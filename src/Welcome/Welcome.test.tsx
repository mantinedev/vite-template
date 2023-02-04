import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

it('displays welcome text', () => {
  render(<Welcome />);
  expect(screen.getByText('Welcome to Mantine!')).toBeInTheDocument();
});
