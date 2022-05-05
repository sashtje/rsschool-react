import { screen } from '@testing-library/react';

import App from '../../App';

import { renderWithRouter } from '../../testAPI';

test('About page render test', () => {
  renderWithRouter(<App />, { route: '/about' });
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('about');
});
