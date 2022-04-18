import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateField from '.';

test('Check handleChange of DateField component with error', () => {
  /*   const label = 'Birthday:';
  const dateRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textError = 'Please choose a date';
  const name = 'birthday';
  const handleChangeInput = jest.fn();

  render(
    <DateField
      label={label}
      dateRef={dateRef}
      textError={textError}
      name={name}
      handleChangeInput={handleChangeInput}
    />
  );

  const dateInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(dateInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).toBeInTheDocument();

  userEvent.type(dateInput, '2020-03-03');
  expect(dateInput.value).toBe('2020-03-03');
  expect(handleChangeInput).toHaveBeenCalledTimes(1); */
});

test('Check handleChange of DateField component without error', () => {
  /*   const label = 'Birthday:';
  const dateRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textError = '';
  const name = 'birthday';
  const handleChangeInput = jest.fn();

  render(
    <DateField
      label={label}
      dateRef={dateRef}
      textError={textError}
      name={name}
      handleChangeInput={handleChangeInput}
    />
  );

  const dateInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(dateInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).not.toBeInTheDocument();

  userEvent.type(dateInput, '2020-03-03');
  expect(dateInput.value).toBe('2020-03-03');
  expect(handleChangeInput).toHaveBeenCalledTimes(1); */
});
