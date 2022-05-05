import { screen } from '@testing-library/react';

import App from '../../App';

import { renderWithRouter } from '../../testAPI';

test('Header render test from main page', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByText(/Home/i);
  const linkForm = screen.getByText(/Form/i);
  const linkAbout = screen.getByText(/About us/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkForm).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});

test('Header render test from form page', () => {
  renderWithRouter(<App />, { route: '/form' });

  const linkHome = screen.getByText(/Home/i);
  const linkForm = screen.getByText(/Form/i);
  const linkAbout = screen.getByText(/About us/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkForm).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});

test('Header render test from about page', () => {
  renderWithRouter(<App />, { route: '/about' });
  const linkHome = screen.getByText(/Home/i);
  const linkForm = screen.getByText(/Form/i);
  const linkAbout = screen.getByText(/About us/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkForm).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});

test('Header render test from page 404', () => {
  renderWithRouter(<App />, { route: '/404' });
  const linkHome = screen.getByText(/Home/i);
  const linkForm = screen.getByText(/Form/i);
  const linkAbout = screen.getByText(/About us/i);
  expect(linkHome).toBeInTheDocument();
  expect(linkForm).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});
