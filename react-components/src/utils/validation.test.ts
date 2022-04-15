import { validationPicture, validationBirthday } from './validation';

describe('validationPicture tests', () => {
  test('test file was not passed', () => {
    const emptyFiles: FileList = { length: 0 } as FileList;
    const result = validationPicture(emptyFiles);

    expect(result).toBe('Please upload a picture');
  });

  test('test wrong extension', () => {
    const files: FileList = {
      '0': {
        name: 'Test',
        size: 69825,
        type: 'image/svg',
      },
      length: 1,
    } as unknown as FileList;
    const result = validationPicture(files);

    expect(result).toBe('Picture should have .png, .jpg or .jpeg extensions');
  });

  test('test size more than max', () => {
    const files: FileList = {
      '0': {
        name: 'Test',
        size: 169825,
        type: 'image/png',
      },
      length: 1,
    } as unknown as FileList;
    const result = validationPicture(files);

    expect(result).toBe('Max file size = 100 KB');
  });

  test('test correct value', () => {
    const files: FileList = {
      '0': {
        name: 'Test',
        size: 69825,
        type: 'image/jpg',
      },
      length: 1,
    } as unknown as FileList;
    const result = validationPicture(files);

    expect(result).toBe('');
  });
});

//===============================
describe('validationBirthday tests', () => {
  test('test date was not chosen', () => {
    const result = validationBirthday('');

    expect(result).toBe('Please choose a date');
  });

  test('test date is correct', () => {
    const dateNow = new Date();
    const date20Years = new Date(dateNow.setFullYear(dateNow.getFullYear() - 20));

    const result = validationBirthday(date20Years.toString());

    expect(result).toBe('');
  });

  test('test date is more than 100 years', () => {
    const dateNow = new Date();
    const date105Years = new Date(dateNow.setFullYear(dateNow.getFullYear() - 105));

    const result = validationBirthday(date105Years.toString());

    expect(result).toBe('Your age should be from 18 to 100');
  });

  test('test date is less than 18 years', () => {
    const dateNow = new Date();
    const date5Years = new Date(dateNow.setFullYear(dateNow.getFullYear() - 5));

    const result = validationBirthday(date5Years.toString());

    expect(result).toBe('Your age should be from 18 to 100');
  });
});
