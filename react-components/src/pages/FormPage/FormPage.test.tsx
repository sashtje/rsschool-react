import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';
import FormPage from './FormPage';

import { renderWithRouter } from '../../testAPI/testapi';

test('Navigation Test for Router', () => {
  renderWithRouter(<FormPage />);
  /* const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);

  let main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('home');

  userEvent.click(linkAbout);

  main = screen.getByRole('main');
  expect(main).not.toHaveClass('home');
  expect(main).toHaveClass('about');

  userEvent.click(linkHome);

  main = screen.getByRole('main');
  expect(main).toHaveClass('home');
  expect(main).not.toHaveClass('about'); */
});
