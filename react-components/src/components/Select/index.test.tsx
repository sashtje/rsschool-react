import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '.';

test('Check Select component with error', () => {
  const label = 'Birthday:';
  const name = 'birthday';
  const register = jest.fn();
  const options = ['Belgium', 'Germany', 'Russia', 'Serbia'];
  const textError = 'Please choose a country';

  render(
    <Select label={label} name={name} register={register} options={options} textError={textError} />
  );

  const select = screen.getByLabelText(/Birthday:/i) as HTMLSelectElement;

  expect(select).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a country/i);

  expect(errorBlock).toBeInTheDocument();

  userEvent.selectOptions(select, 'Germany');
  expect(select.value).toBe('Germany');
});

test('Check Select component without error', () => {
  const label = 'Birthday:';
  const name = 'birthday';
  const register = jest.fn();
  const options = ['Belgium', 'Germany', 'Russia', 'Serbia'];
  const textError = '';

  render(
    <Select label={label} name={name} register={register} options={options} textError={textError} />
  );

  const select = screen.getByLabelText(/Birthday:/i) as HTMLSelectElement;

  expect(select).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a country/i);

  expect(errorBlock).not.toBeInTheDocument();

  userEvent.selectOptions(select, 'Germany');
  expect(select.value).toBe('Germany');
});
