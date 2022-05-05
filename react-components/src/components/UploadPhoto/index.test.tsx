import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UploadPhoto from '.';

test('Check UploadPhoto component with error', () => {
  const name = 'birthday';
  const register = jest.fn();
  const textError = 'Please choose a date';

  render(<UploadPhoto name={name} register={register} textError={textError} />);

  const pictureInput = screen.getByTestId('uploadphoto') as HTMLInputElement;

  expect(pictureInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).toBeInTheDocument();

  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.upload(pictureInput, file);
  expect(pictureInput?.files![0]).toStrictEqual(file);
  expect(pictureInput.files).toHaveLength(1);
});

test('Check UploadPhoto component without error', () => {
  const name = 'birthday';
  const register = jest.fn();
  const textError = '';

  render(<UploadPhoto textError={textError} register={register} name={name} />);

  const pictureInput = screen.getByTestId('uploadphoto') as HTMLInputElement;

  expect(pictureInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).not.toBeInTheDocument();

  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.upload(pictureInput, file);
  expect(pictureInput?.files![0]).toStrictEqual(file);
  expect(pictureInput.files).toHaveLength(1);
});
