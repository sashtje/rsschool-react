import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { renderWithRouter } from './testAPI';

test('Navigation Test for Router', () => {
  /* renderWithRouter(<App />);
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);
  const linkForm = screen.getByText(/Form/i);

  let main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('home');

  userEvent.click(linkForm);

  main = screen.getByRole('main');
  expect(main).not.toHaveClass('home');
  expect(main).not.toHaveClass('about');
  expect(main).toHaveClass('form-page');

  userEvent.click(linkAbout);

  main = screen.getByRole('main');
  expect(main).not.toHaveClass('home');
  expect(main).not.toHaveClass('form-page');
  expect(main).toHaveClass('about');

  userEvent.click(linkHome);

  main = screen.getByRole('main');
  expect(main).not.toHaveClass('about');
  expect(main).not.toHaveClass('form-page');
  expect(main).toHaveClass('home'); */
});
