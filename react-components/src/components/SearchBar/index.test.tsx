import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';

import { renderWithRouter } from '../../testAPI';

interface IStorage {
  [key: string]: string;
}

const localStorageMock = (() => {
  let store: IStorage = { searchbar: 'happiness' };

  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

test('test with mock local storage with initial value', () => {
  /* const getItem = jest.spyOn(window.localStorage, 'getItem');
  const setItem = jest.spyOn(window.localStorage, 'setItem');
  renderWithRouter(<App />);

  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About us/i);
  const input = screen.getByRole('searchbox') as HTMLInputElement;
  expect(input).toHaveValue('happiness');

  expect(getItem).toHaveBeenCalledTimes(1);

  const value = 'love';

  input.value = '';

  userEvent.type(input, value);
  expect(input).toHaveValue(value);
  userEvent.click(linkAbout);

  expect(setItem).toHaveBeenCalledTimes(6);

  userEvent.click(linkHome);
  expect(input).toHaveValue(value);
  expect(getItem).toHaveBeenCalledTimes(2); */
});
