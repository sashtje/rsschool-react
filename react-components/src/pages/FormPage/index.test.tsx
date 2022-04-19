import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormPage from '.';

test('Test render of FormPage without errors of Validation with male', async () => {
  render(<FormPage />);

  const nameInput = screen.getByLabelText(/^Name:/i) as HTMLInputElement;
  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveFocus();

  const surnameInput = screen.getByLabelText(/^Surname:/i) as HTMLInputElement;
  expect(surnameInput).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/Email:/i) as HTMLInputElement;
  expect(emailInput).toBeInTheDocument();

  const birthInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;
  expect(birthInput).toBeInTheDocument();

  const country = screen.getByLabelText(/Country:/i) as HTMLSelectElement;
  expect(country).toBeInTheDocument();

  const zipcodeInput = screen.getByLabelText(/Zip code:/i) as HTMLInputElement;
  expect(zipcodeInput).toBeInTheDocument();

  const genderInput = screen.getByLabelText(/Gender:/i) as HTMLInputElement;
  expect(genderInput).toBeInTheDocument();

  const picInput = screen.getByTestId('uploadphoto') as HTMLInputElement;
  expect(picInput).toBeInTheDocument();

  const newsInput = screen.getByLabelText('I want to receive news') as HTMLInputElement;
  expect(newsInput).toBeInTheDocument();

  const btnSubmit = screen.getByRole('button') as HTMLInputElement;
  expect(btnSubmit).toBeInTheDocument();

  const containerCards = screen.getByTestId('regcards-container');
  expect(containerCards).toBeInTheDocument();
  expect(containerCards).toBeEmptyDOMElement();

  expect(nameInput.value).toBe('');
  expect(surnameInput.value).toBe('');
  expect(emailInput.value).toBe('');
  expect(birthInput.value).toBe('');
  expect(country.value).toBe('');
  expect(zipcodeInput.value).toBe('');
  expect(genderInput.checked).toBe(false);
  expect(picInput.files).toHaveLength(0);
  expect(newsInput.checked).toBe(false);
  expect(btnSubmit.disabled).toBe(true);

  userEvent.type(nameInput, 'John');
  expect(nameInput.value).toBe('John');
  expect(btnSubmit.disabled).toBe(false);
  userEvent.type(surnameInput, 'Doe');
  expect(surnameInput.value).toBe('Doe');
  userEvent.type(emailInput, 'john@gmail.com');
  expect(emailInput.value).toBe('john@gmail.com');
  userEvent.type(birthInput, '1970-09-20');
  expect(birthInput.value).toBe('1970-09-20');
  userEvent.selectOptions(country, 'Germany');
  expect(country.value).toBe('Germany');
  userEvent.type(zipcodeInput, '123456');
  expect(zipcodeInput.value).toBe('123456');
  userEvent.click(genderInput);
  expect(genderInput.checked).toBe(true);
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  global.URL.createObjectURL = jest.fn();
  userEvent.upload(picInput, file);
  expect(picInput?.files![0]).toStrictEqual(file);
  expect(picInput.files).toHaveLength(1);

  jest.useFakeTimers();

  userEvent.click(btnSubmit);

  const notificationMessage = await screen.findByText(/The data was saved successfully!/i);
  expect(notificationMessage).toBeInTheDocument();
  expect(containerCards).not.toBeEmptyDOMElement();

  jest.advanceTimersByTime(4000);

  const notMess = screen.queryByText(/The data was saved successfully!/i);
  expect(notMess).not.toBeInTheDocument();

  const male = screen.getByTestId('male');
  expect(male).toBeInTheDocument();
  jest.clearAllTimers();
  jest.clearAllMocks();
  jest.useRealTimers();
});

test('Test render of FormPage without errors of Validation with female', async () => {
  render(<FormPage />);

  const nameInput = screen.getByLabelText(/^Name:/i) as HTMLInputElement;
  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveFocus();

  const surnameInput = screen.getByLabelText(/^Surname:/i) as HTMLInputElement;
  expect(surnameInput).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/Email:/i) as HTMLInputElement;
  expect(emailInput).toBeInTheDocument();

  const birthInput = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;
  expect(birthInput).toBeInTheDocument();

  const country = screen.getByLabelText(/Country:/i) as HTMLSelectElement;
  expect(country).toBeInTheDocument();

  const zipcodeInput = screen.getByLabelText(/Zip code:/i) as HTMLInputElement;
  expect(zipcodeInput).toBeInTheDocument();

  const genderInput = screen.getByLabelText(/Gender:/i) as HTMLInputElement;
  expect(genderInput).toBeInTheDocument();

  const picInput = screen.getByTestId('uploadphoto') as HTMLInputElement;
  expect(picInput).toBeInTheDocument();

  const newsInput = screen.getByLabelText('I want to receive news') as HTMLInputElement;
  expect(newsInput).toBeInTheDocument();

  const btnSubmit = screen.getByRole('button') as HTMLInputElement;
  expect(btnSubmit).toBeInTheDocument();

  const containerCards = screen.getByTestId('regcards-container');
  expect(containerCards).toBeInTheDocument();
  expect(containerCards).toBeEmptyDOMElement();

  expect(nameInput.value).toBe('');
  expect(surnameInput.value).toBe('');
  expect(emailInput.value).toBe('');
  expect(birthInput.value).toBe('');
  expect(country.value).toBe('');
  expect(zipcodeInput.value).toBe('');
  expect(genderInput.checked).toBe(false);
  expect(picInput.files).toHaveLength(0);
  expect(newsInput.checked).toBe(false);
  expect(btnSubmit.disabled).toBe(true);

  userEvent.type(nameInput, 'John');
  expect(nameInput.value).toBe('John');
  expect(btnSubmit.disabled).toBe(false);
  userEvent.type(surnameInput, 'Doe');
  expect(surnameInput.value).toBe('Doe');
  userEvent.type(emailInput, 'john@gmail.com');
  expect(emailInput.value).toBe('john@gmail.com');
  userEvent.type(birthInput, '1970-09-20');
  expect(birthInput.value).toBe('1970-09-20');
  userEvent.selectOptions(country, 'Germany');
  expect(country.value).toBe('Germany');
  userEvent.type(zipcodeInput, '123456');
  expect(zipcodeInput.value).toBe('123456');
  expect(genderInput.checked).toBe(false);
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  global.URL.createObjectURL = jest.fn();
  userEvent.upload(picInput, file);
  expect(picInput?.files![0]).toStrictEqual(file);
  expect(picInput.files).toHaveLength(1);

  await waitFor(() => userEvent.click(btnSubmit));

  expect(containerCards).not.toBeEmptyDOMElement();

  /* const female = screen.getByTestId('female');
  expect(female).toBeInTheDocument(); */
});
