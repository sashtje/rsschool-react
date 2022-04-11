import { IState, IValidation } from '../components/Form/types';

function validationNameAndSurname(value: string) {
  const regexp = /^[a-z]{3,15}$/i;
  return regexp.test(value) ? '' : 'Field must consist of 3 - 15 English letters';
}

function validationEmail(value: string) {
  const regexp = /^[0-9a-z_\-.]{3,15}@[a-z]{3,5}\.[a-z]{2,4}$/i;
  return regexp.test(value) ? '' : 'Email must consist of 0-9, a-z, _, -, @ symbols';
}

export function validationBirthday(value: string) {
  if (value === '') {
    return 'Please choose a date';
  }

  const date = new Date(value).getTime();
  const dateNow = new Date();
  const copyDateNow = new Date();
  const date100Years = new Date(dateNow.setFullYear(dateNow.getFullYear() - 100)).getTime();
  const date18Years = new Date(copyDateNow.setFullYear(copyDateNow.getFullYear() - 18)).getTime();

  return date >= date100Years && date <= date18Years ? '' : 'Your age should be from 18 to 100';
}

function validationCountry(value: string) {
  return value === '' ? 'Please choose a country' : '';
}

function validationZipcode(value: string) {
  const regexp = /^\d{5,6}$/;
  return regexp.test(value) ? '' : 'Field must consist of 5 or 6 figures';
}

export function validationPicture(files: FileList) {
  if (files.length === 0) {
    return 'Please upload a picture';
  }

  const { type, size } = files[0];

  if (type !== 'image/png' && type !== 'image/jpg' && type !== 'image/jpeg') {
    return 'Picture should have .png, .jpg or .jpeg extensions';
  }

  if (size > 100000) {
    return 'Max file size = 100 KB';
  }

  return '';
}

export function isObjectNotFromEmptyStrings(obj: IState): boolean {
  let key: string;
  let isHasNotEmptyStrings = false;
  for (key of Object.keys(obj)) {
    if (obj[key as keyof typeof obj] !== '') {
      isHasNotEmptyStrings = true;
    }
  }

  return isHasNotEmptyStrings;
}

export function validationForm(
  nameValue: string,
  surnameValue: string,
  emailValue: string,
  birthdayValue: string,
  countryValue: string,
  zipcodeValue: string,
  pictureValue: FileList
): IValidation {
  const validationErrors = {
    nameError: validationNameAndSurname(nameValue),
    surnameError: validationNameAndSurname(surnameValue),
    emailError: validationEmail(emailValue),
    birthdayError: validationBirthday(birthdayValue),
    countryError: validationCountry(countryValue),
    zipcodeError: validationZipcode(zipcodeValue),
    pictureError: validationPicture(pictureValue),
  };

  return { isValid: !isObjectNotFromEmptyStrings(validationErrors), validationErrors };
}
