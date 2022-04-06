import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '.';

test('Check handleChange of Select component with error', () => {
  const label = 'Birthday:';
  const options = ['Belgium', 'Germany', 'Russia', 'Serbia'];
  const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
  const textError = 'Please choose a country';
  const name = 'birthday';
  const errorReset = jest.fn();
  const checkSubmitBtn = jest.fn();

  render(
    <Select
      label={label}
      options={options}
      selectRef={selectRef}
      textError={textError}
      name={name}
      errorReset={errorReset}
      checkSubmitBtn={checkSubmitBtn}
    />
  );

  const select = screen.getByLabelText(/Birthday:/i) as HTMLSelectElement;

  expect(select).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a country/i);

  expect(errorBlock).toBeInTheDocument();

  userEvent.selectOptions(select, 'Germany');
  expect(select.value).toBe('Germany');
  expect(errorReset).toHaveBeenCalledTimes(1);
  expect(checkSubmitBtn).toBeCalledTimes(1);
});

test('Check handleChange of Select component without error', () => {
  const label = 'Birthday:';
  const options = ['Belgium', 'Germany', 'Russia', 'Serbia'];
  const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
  const textError = '';
  const name = 'birthday';
  const errorReset = jest.fn();
  const checkSubmitBtn = jest.fn();

  render(
    <Select
      label={label}
      options={options}
      selectRef={selectRef}
      textError={textError}
      name={name}
      errorReset={errorReset}
      checkSubmitBtn={checkSubmitBtn}
    />
  );

  const select = screen.getByLabelText(/Birthday:/i) as HTMLSelectElement;

  expect(select).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a country/i);

  expect(errorBlock).not.toBeInTheDocument();

  userEvent.selectOptions(select, 'Germany');
  expect(select.value).toBe('Germany');
  expect(errorReset).toHaveBeenCalledTimes(0);
  expect(checkSubmitBtn).toBeCalledTimes(1);
});
