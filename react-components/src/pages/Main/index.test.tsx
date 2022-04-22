import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';

import { renderWithRouter } from '../../testAPI';

test('Main page render test', async () => {
  const data = {
    stat: '200',
    message: '',
    photos: { photo: [{ id: '1', title: 'Photo1', url_l: 'https://test.com/1.jpg' }] },
  };

  global.fetch = jest.fn().mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        resolve({
          json: () =>
            new Promise((resolve) => {
              resolve(data);
            }),
        });
      })
  );

  renderWithRouter(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('home');

  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });
});

test('Main page render test', async () => {
  const data = {
    stat: '200',
    message: '',
    photos: { photo: [{ id: '1', title: 'Photo1', url_l: 'https://test.com/1.jpg' }] },
  };

  global.fetch = jest.fn().mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        resolve({
          json: () =>
            new Promise((resolve) => {
              resolve(data);
            }),
        });
      })
  );

  renderWithRouter(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('home');

  const searchBar = screen.getByRole('searchbox') as HTMLInputElement;
  expect(searchBar).toBeInTheDocument();

  searchBar.value = '';
  userEvent.type(searchBar, 'sports');
  fireEvent.submit(searchBar);

  await waitFor(() => {
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });
});
