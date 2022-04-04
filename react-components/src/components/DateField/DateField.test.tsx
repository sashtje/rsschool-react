import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateField from './DateField';

test('Check handleChange of DateField component with error', () => {
  const label = 'Birthday:';
  const dateRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textErr = 'Please choose a date';
  const name = 'birthday';
  const errorReset = jest.fn();
  const checkSubmitBtn = jest.fn();

  render(
    <DateField
      label={label}
      dateRef={dateRef}
      textErr={textErr}
      name={name}
      errorReset={errorReset}
      checkSubmitBtn={checkSubmitBtn}
    />
  );

  const dateInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(dateInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).toBeInTheDocument();

  userEvent.type(dateInput, '2020-03-03');
  expect(dateInput.value).toBe('2020-03-03');
  expect(errorReset).toHaveBeenCalledTimes(1);
  expect(checkSubmitBtn).toBeCalledTimes(1);
});

test('Check handleChange of DateField component without error', () => {
  const label = 'Birthday:';
  const dateRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textErr = '';
  const name = 'birthday';
  const errorReset = jest.fn();
  const checkSubmitBtn = jest.fn();

  render(
    <DateField
      label={label}
      dateRef={dateRef}
      textErr={textErr}
      name={name}
      errorReset={errorReset}
      checkSubmitBtn={checkSubmitBtn}
    />
  );

  const dateInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(dateInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).not.toBeInTheDocument();

  userEvent.type(dateInput, '2020-03-03');
  expect(dateInput.value).toBe('2020-03-03');
  expect(errorReset).toHaveBeenCalledTimes(0);
  expect(checkSubmitBtn).toBeCalledTimes(1);
});