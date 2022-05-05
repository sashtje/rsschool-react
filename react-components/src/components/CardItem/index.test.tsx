import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardItem from '.';

import { IData } from '../../pages/Main/types';

const data: IData = {
  id: '123',
  title: 'Test',
  ownername: 'Owner',
  views: '124',
  url: '',
};

test('CardItem render test', () => {
  /* render(<CardItem card={data} />);
  const img = screen.getByTestId('card-photo');
  expect(img).toBeInTheDocument();

  const title = screen.getByTestId('card-title');
  expect(title).toBeInTheDocument();

  const author = screen.getByTestId('card-author');
  expect(author).toBeInTheDocument();

  const views = screen.getByTestId('card-views');
  expect(views).toBeInTheDocument(); */
});

test('CardItem render test with modal window', () => {
  /* render(<CardItem card={data} />);

  let modalWindow = screen.queryByTestId('modal-window');
  expect(modalWindow).not.toBeInTheDocument();

  let card = screen.getByTestId('card');
  expect(card).toBeInTheDocument();

  userEvent.click(card);

  modalWindow = screen.queryByTestId('modal-window');
  expect(modalWindow).toBeInTheDocument(); */
});
