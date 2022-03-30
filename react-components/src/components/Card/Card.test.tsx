import { render, screen } from '@testing-library/react';

import Card from '../../components/Card/Card';

import { data } from '../../model/model';

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
