import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UploadPhoto from '.';

test('Check handleChange of DateField component with error', () => {
  const pictureRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textError = 'Please choose a date';
  const name = 'birthday';
  const errorReset = jest.fn();
  const checkSubmitBtn = jest.fn();

  render(
    <UploadPhoto
      pictureRef={pictureRef}
      textError={textError}
      name={name}
      errorReset={errorReset}
      checkSubmitBtn={checkSubmitBtn}
    />
  );

  const pictureInput = screen.getByTestId('uploadphoto') as HTMLInputElement;

  expect(pictureInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).toBeInTheDocument();

  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.upload(pictureInput, file);
  expect(pictureInput?.files![0]).toStrictEqual(file);
  expect(pictureInput.files).toHaveLength(1);

  expect(errorReset).toHaveBeenCalledTimes(1);
  expect(checkSubmitBtn).toBeCalledTimes(1);
});

test('Check handleChange of DateField component without error', () => {
  const pictureRef: React.RefObject<HTMLInputElement> = React.createRef();
  const textError = '';
  const name = 'birthday';
  const errorReset = jest.fn();
  const checkSubmitBtn = jest.fn();

  render(
    <UploadPhoto
      pictureRef={pictureRef}
      textError={textError}
      name={name}
      errorReset={errorReset}
      checkSubmitBtn={checkSubmitBtn}
    />
  );

  const pictureInput = screen.getByTestId('uploadphoto') as HTMLInputElement;

  expect(pictureInput).toBeInTheDocument();

  const errorBlock = screen.queryByText(/Please choose a date/i);

  expect(errorBlock).not.toBeInTheDocument();

  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  userEvent.upload(pictureInput, file);
  expect(pictureInput?.files![0]).toStrictEqual(file);
  expect(pictureInput.files).toHaveLength(1);
  expect(errorReset).toHaveBeenCalledTimes(0);
  expect(checkSubmitBtn).toBeCalledTimes(1);
});
