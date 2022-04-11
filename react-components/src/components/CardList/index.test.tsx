import { render, screen } from '@testing-library/react';

import CardList from '.';

import { IData } from '../../pages/Main/types';

const data: IData[] = [
  {
    id: '123',
    title: 'Test',
    ownername: 'Owner',
    views: '124',
    url: '',
  },
  {
    id: '345',
    title: 'Art',
    ownername: 'Yellow',
    views: '500',
    url: '',
  },
];

test('Pass class from props', () => {
  render(<CardList className="home__cards" data={data} />);
  const cardsDiv = screen.getByTestId('cards');
  expect(cardsDiv).toHaveClass('home__cards');
  expect(cardsDiv).toHaveClass('cards');

  const card = screen.getAllByTestId('card');
  expect(card.length).toBe(2);
});

test('CardList without props class', () => {
  render(<CardList data={data} />);
  const cardsDiv = screen.getByTestId('cards');
  expect(cardsDiv).not.toHaveClass('home__cards');
  expect(cardsDiv).toHaveClass('cards');

  const card = screen.getAllByTestId('card');
  expect(card.length).toBe(2);
});
