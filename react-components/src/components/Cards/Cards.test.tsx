import { render, screen } from '@testing-library/react';

import App from '../../App';
import Cards from './Cards';

import { renderWithRouter } from '../../testAPI/testapi';

import { data } from '../../model/model';

test('Cards render test', () => {
  renderWithRouter(<App />);
  const input = screen.getByRole('searchbox') as HTMLInputElement;
  const cards = screen.getAllByTestId('card');
  if (input.value === '') {
    expect(cards.length).toBe(data.length);
  }
});

test('Pass class from props', () => {
  render(<Cards className="home__cards" search={'123'} />);
  const cardsDiv = screen.getByTestId('cards');
  expect(cardsDiv).toHaveClass('home__cards');
  expect(cardsDiv).toHaveClass('cards');
});

test('Cards without props class', () => {
  render(<Cards search={'123'} />);
  const cardsDiv = screen.getByTestId('cards');
  expect(cardsDiv).not.toHaveClass('home__cards');
  expect(cardsDiv).toHaveClass('cards');
});
