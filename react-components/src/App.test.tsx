import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { data } from './model';
import Card from './components/Card';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

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

test('Main page render test', () => {
  renderWithRouter(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('home');
});

test('About page render test', () => {
  renderWithRouter(<App />, { route: '/about' });
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('about');
});

test('Page 404 render test', () => {
  renderWithRouter(<App />, { route: '/404' });
  const text = screen.getByText(/page not found/i);
  expect(text).toBeInTheDocument();
});

test('Navigation Test for Router', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByText(/Home/i);
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
  expect(main).not.toHaveClass('about');
});

test('Cards render test', () => {
  renderWithRouter(<App />);
  const input = screen.getByRole('textbox') as HTMLInputElement;
  const cards = screen.getAllByTestId('card');
  if (input.value === '') {
    expect(cards.length).toBe(data.length);
  }
});

test('Card render test', () => {
  render(<Card card={data[0]} />);
  const img = screen.getByAltText(/card photo/i);
  expect(img).toBeInTheDocument();

  const title = screen.getByTestId('card-title');
  expect(title).toBeInTheDocument();

  const author = screen.getByTestId('card-author');
  expect(author).toBeInTheDocument();

  const likes = screen.getByTestId('card-likes');
  expect(likes).toBeInTheDocument();

  const views = screen.getByTestId('card-views');
  expect(views).toBeInTheDocument();
});

test('Save to the local storage', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);
  const input = screen.getByRole('textbox') as HTMLInputElement;
  const value = 'Turkey';

  userEvent.type(input, value);
  expect(input).toHaveValue(value);
  userEvent.click(linkAbout);
  userEvent.click(linkHome);
  expect(input).toHaveValue(value);
});
