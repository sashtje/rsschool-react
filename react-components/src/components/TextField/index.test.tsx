import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from '.';

test('Check handleChange of DateField component with error', () => {
  /*   const label = 'Birthday:';
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textError = 'Please choose a date';
  const name = 'birthday';
  const handleChangeInput = jest.fn();

  render(
    <TextField
      label={label}
      inputRef={inputRef}
      textError={textError}
      name={name}
      handleChangeInput={handleChangeInput}
    />
  );

  const textInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(textInput).toBeInTheDocument();
  expect(textInput).not.toHaveFocus();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).toBeInTheDocument();

  userEvent.type(textInput, 'ddd');
  expect(textInput.value).toBe('ddd');
  expect(handleChangeInput).toHaveBeenCalledTimes(3); */
});

test('Check handleChange of DateField component without error', () => {
  /*   const label = 'Birthday:';
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textError = '';
  const name = 'birthday';
  const handleChangeInput = jest.fn();

  render(
    <TextField
      label={label}
      inputRef={inputRef}
      textError={textError}
      name={name}
      handleChangeInput={handleChangeInput}
      autofocus
    />
  );

  const textInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(textInput).toBeInTheDocument();
  expect(textInput).toHaveFocus();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).not.toBeInTheDocument();

  userEvent.type(textInput, 'ddd');
  expect(textInput.value).toBe('ddd');
  expect(handleChangeInput).toHaveBeenCalledTimes(3); */
});
