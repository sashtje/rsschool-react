import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateField from '.';

test('Check DateField component with error', () => {
  const label = 'Birthday:';
  const name = 'birthday';
  const register = jest.fn();
  const textError = 'Please choose a date';

  render(<DateField label={label} name={name} register={register} textError={textError} />);

  const dateInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(dateInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).toBeInTheDocument();

  userEvent.type(dateInput, '2020-03-03');
  expect(dateInput.value).toBe('2020-03-03');
});

test('Check DateField component without error', () => {
  const label = 'Birthday:';
  const name = 'birthday';
  const register = jest.fn();
  const textError = '';

  render(<DateField label={label} name={name} register={register} textError={textError} />);

  const dateInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;

  expect(dateInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).not.toBeInTheDocument();

  userEvent.type(dateInput, '2020-03-03');
  expect(dateInput.value).toBe('2020-03-03');
});
