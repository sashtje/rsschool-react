import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from '.';

test('Check TextField component with error', () => {
  const label = 'Birthday:';
  const name = 'birthday';
  const register = jest.fn();
  const textError = 'Please choose a date';

  render(<TextField label={label} name={name} register={register} textError={textError} />);

  const textInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(textInput).toBeInTheDocument();
  expect(textInput).not.toHaveFocus();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).toBeInTheDocument();

  userEvent.type(textInput, 'ddd');
  expect(textInput.value).toBe('ddd');
});

test('Check TextField component without error', () => {
  const label = 'Birthday:';
  const name = 'birthday';
  const register = jest.fn();
  const textError = '';

  render(
    <TextField label={label} name={name} register={register} textError={textError} autofocus />
  );

  const textInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(textInput).toBeInTheDocument();
  expect(textInput).toHaveFocus();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).not.toBeInTheDocument();

  userEvent.type(textInput, 'ddd');
  expect(textInput.value).toBe('ddd');
});
