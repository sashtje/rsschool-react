import { screen } from '@testing-library/react';

import App from '../../App';

import { renderWithRouter } from '../../testAPI/testapi';

test('Header render test from main page', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});

test('Header render test from about page', () => {
  renderWithRouter(<App />, { route: '/about' });
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});

test('Header render test from page 404', () => {
  renderWithRouter(<App />, { route: '/404' });
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});
