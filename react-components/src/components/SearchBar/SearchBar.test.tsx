import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';

import { renderWithRouter } from '../../testAPI/testapi';

test('Save to the local storage', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);
  const input = screen.getByRole('searchbox') as HTMLInputElement;
  const value = 'Turkey';

  input.value = '';

  userEvent.type(input, value);
  expect(input).toHaveValue(value);
  userEvent.click(linkAbout);
  userEvent.click(linkHome);
  expect(input).toHaveValue(value);
});
