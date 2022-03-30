import { screen } from '@testing-library/react';

import App from '../../App';

import { renderWithRouter } from '../../testAPI/testapi';

test('Main page render test', () => {
  renderWithRouter(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('home');
});
