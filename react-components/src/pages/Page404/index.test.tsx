import { screen } from '@testing-library/react';

import App from '../../App';

import { renderWithRouter } from '../../testAPI';

test('Page 404 render test', () => {
  renderWithRouter(<App />, { route: '/404' });
  const text = screen.getByText(/page not found/i);
  expect(text).toBeInTheDocument();
});
