import {
  validationNameAndSurname,
  validationEmail,
  validationBirthday,
  validationCountry,
  validationZipcode,
  validationPicture,
} from './validation';

describe('validationNameAndSurname tests', () => {
  test('wrong value', () => {
    const result = validationNameAndSurname('Ro');

    expect(result).toBe('Field must consist of 3 - 15 English letters');
  });

  test('correct value', () => {
    const result = validationNameAndSurname('Harry');

    expect(result).toBe(true);
  });
});

//===============================

describe('validationEmail tests', () => {
  test('wrong value', () => {
    const result = validationEmail('Ro');

    expect(result).toBe('Email must consist of 0-9, a-z, _, -, @ symbols');
  });

  test('correct value', () => {
    const result = validationEmail('Harry@mail.ru');

    expect(result).toBe(true);
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

    expect(result).toBe(true);
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

//===============================

describe('validationCountry tests', () => {
  test('wrong value', () => {
    const result = validationCountry('');

    expect(result).toBe('Please choose a country');
  });

  test('correct value', () => {
    const result = validationCountry('Spain');

    expect(result).toBe(true);
  });
});

//===============================

describe('validationZipcode tests', () => {
  test('wrong value', () => {
    const result = validationZipcode('Ro');

    expect(result).toBe('Field must consist of 5 or 6 figures');
  });

  test('correct value', () => {
    const result = validationZipcode('12345');

    expect(result).toBe(true);
  });
});

//===============================

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

    expect(result).toBe(true);
  });
});
