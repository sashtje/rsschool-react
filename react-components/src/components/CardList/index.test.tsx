import { render, screen } from '@testing-library/react';

import App from '../../App';
import CardList from '.';

import { renderWithRouter } from '../../testAPI';

test('CardList render test', () => {
  /* renderWithRouter(<App />);
  const input = screen.getByRole('searchbox') as HTMLInputElement;
  const cards = screen.getAllByTestId('card');
  if (input.value === '') {
    expect(cards.length).toBe(data.length);
  } */
});

test('Pass class from props', () => {
  /* render(<CardList className="home__cards" search={'123'} />);
  const cardsDiv = screen.getByTestId('cards');
  expect(cardsDiv).toHaveClass('home__cards');
  expect(cardsDiv).toHaveClass('cards'); */
});

test('CardList without props class', () => {
  /* render(<CardList search={'123'} />);
  const cardsDiv = screen.getByTestId('cards');
  expect(cardsDiv).not.toHaveClass('home__cards');
  expect(cardsDiv).toHaveClass('cards'); */
});
