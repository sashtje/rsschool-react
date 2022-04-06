import React, { Component } from 'react';
import {
  validationNameAndSurname,
  validationEmail,
  validationBirthday,
  validationCountry,
  validationZipcode,
  validationPicture,
} from '../../utils/validation';

import TextField from '../TextField';
import DateField from '../DateField';
import Select from '../Select';
import Switcher from '../Switcher';
import UploadPhoto from '../UploadPhoto';
import Checkbox from '../Checkbox';
import Submit from '../Submit';

import './styles.scss';

import { IRegisterCardItem } from '../RegisterCardItem/types';
import { IProps, IState, State } from './types';

import { countries } from '../../model/countries';

class Form extends Component<IProps, IState> {
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  birthdayRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLSelectElement>;
  zipcodeRef: React.RefObject<HTMLInputElement>;
  genderRef: React.RefObject<HTMLInputElement>;
  pictureRef: React.RefObject<HTMLInputElement>;
  newsRef: React.RefObject<HTMLInputElement>;
  btnSubmitRef: React.RefObject<HTMLButtonElement>;

  error: IState;

  constructor(props: IProps) {
    super(props);

    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.emailRef = React.createRef();
    this.birthdayRef = React.createRef();
    this.countryRef = React.createRef();
    this.zipcodeRef = React.createRef();
    this.genderRef = React.createRef();
    this.pictureRef = React.createRef();
    this.newsRef = React.createRef();
    this.btnSubmitRef = React.createRef();

    this.state = {
      nameError: '',
      surnameError: '',
      emailError: '',
      birthdayError: '',
      countryError: '',
      zipcodeError: '',
      pictureError: '',
    };

    this.error = { ...this.state };
  }

  errorChange = (key: string, value = '') => {
    this.setState({ [key]: value } as State);
    this.error[key as keyof IState] = value;
  };

  validationAll() {
    const validationNameErrorText = validationNameAndSurname(this.nameRef.current?.value as string);
    const validationSurnameErrorText = validationNameAndSurname(
      this.surnameRef.current?.value as string
    );
    const validationEmailErrorText = validationEmail(this.emailRef.current?.value as string);
    const validationBirthdayErrorText = validationBirthday(
      this.birthdayRef.current?.value as string
    );
    const validationCountryErrorText = validationCountry(this.countryRef.current?.value as string);
    const validationZipcodeErrorText = validationZipcode(this.zipcodeRef.current?.value as string);
    const length = this.pictureRef.current?.files?.length as number;
    const validationPictureErrorText = validationPicture(length);

    if (
      validationNameErrorText === '' &&
      validationSurnameErrorText === '' &&
      validationEmailErrorText === '' &&
      validationBirthdayErrorText === '' &&
      validationCountryErrorText === '' &&
      validationZipcodeErrorText === '' &&
      validationPictureErrorText === ''
    ) {
      return true;
    }

    this.setState({
      nameError: validationNameErrorText,
      surnameError: validationSurnameErrorText,
      emailError: validationEmailErrorText,
      birthdayError: validationBirthdayErrorText,
      countryError: validationCountryErrorText,
      zipcodeError: validationZipcodeErrorText,
      pictureError: validationPictureErrorText,
    });
    this.error = {
      nameError: validationNameErrorText,
      surnameError: validationSurnameErrorText,
      emailError: validationEmailErrorText,
      birthdayError: validationBirthdayErrorText,
      countryError: validationCountryErrorText,
      zipcodeError: validationZipcodeErrorText,
      pictureError: validationPictureErrorText,
    };
    return false;
  }

  clearForm() {
    this.nameRef.current!.value = '';
    this.surnameRef.current!.value = '';
    this.emailRef.current!.value = '';
    this.birthdayRef.current!.value = '';
    this.countryRef.current!.value = '';
    this.zipcodeRef.current!.value = '';
    this.genderRef.current!.checked = false;
    this.pictureRef.current!.value = '';
    this.newsRef.current!.checked = false;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.validationAll()) {
      const file = this.pictureRef.current?.files![0];
      const downFile = URL.createObjectURL(file!);
      const dateBirth = new Date(this.birthdayRef.current?.value as string);
      const newCard: IRegisterCardItem = {
        id: new Date().getTime(),
        pic: downFile,
        name: this.nameRef.current?.value as string,
        surname: this.surnameRef.current?.value as string,
        email: this.emailRef.current?.value as string,
        birthday: dateBirth.toLocaleDateString(),
        country: this.countryRef.current?.value as string,
        zipcode: this.zipcodeRef.current?.value as string,
        gender: this.genderRef.current?.checked ? 'M' : 'F',
        news: this.newsRef.current?.checked as boolean,
      };

      this.props.addCard(newCard);

      this.props.showNotification();
      this.clearForm();
    }

    this.btnSubmitRef.current!.disabled = true;
    this.nameRef.current!.focus();
  };

  checkSubmitBtn = () => {
    let key: string;
    let isHasErrors = false;
    for (key of Object.keys(this.error)) {
      if (this.error[key as keyof IState] !== '') {
        isHasErrors = true;
      }
    }

    let isEmpty = true;
    if (
      this.nameRef.current!.value !== '' ||
      this.surnameRef.current!.value !== '' ||
      this.emailRef.current?.value !== '' ||
      this.zipcodeRef.current!.value !== '' ||
      this.birthdayRef.current!.value !== '' ||
      this.countryRef.current!.value !== '' ||
      this.pictureRef.current!.files?.length !== 0
    ) {
      isEmpty = false;
    }

    if (isHasErrors || isEmpty) {
      (this.btnSubmitRef.current as HTMLButtonElement).disabled = true;
    } else {
      (this.btnSubmitRef.current as HTMLButtonElement).disabled = false;
    }
  };

  render() {
    const {
      nameError,
      surnameError,
      emailError,
      birthdayError,
      countryError,
      zipcodeError,
      pictureError,
    } = this.state;

    return (
      <form className="form-page__form form-register" onSubmit={this.handleSubmit}>
        <TextField
          label="Name:"
          inputRef={this.nameRef}
          textError={nameError}
          name="name"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
          autofocus
        />
        <TextField
          label="Surname:"
          inputRef={this.surnameRef}
          textError={surnameError}
          name="surname"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />

        <TextField
          label="Email:"
          inputRef={this.emailRef}
          textError={emailError}
          name="email"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />
        <DateField
          label="Birthday:"
          dateRef={this.birthdayRef}
          textError={birthdayError}
          name="birthday"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />

        <Select
          label="Country:"
          options={countries}
          selectRef={this.countryRef}
          textError={countryError}
          name="country"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />
        <TextField
          label="Zip code:"
          inputRef={this.zipcodeRef}
          textError={zipcodeError}
          name="zipcode"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />

        <div className="form-register__row">
          <Switcher label="Gender:" switcherRef={this.genderRef} />
        </div>

        <div className="form-register__row">
          <UploadPhoto
            pictureRef={this.pictureRef}
            textError={pictureError}
            name="picture"
            errorReset={this.errorChange}
            checkSubmitBtn={this.checkSubmitBtn}
          />
        </div>

        <div className="form-register__row">
          <Checkbox label="I want to receive news" checkboxRef={this.newsRef} />
        </div>

        <div className="form-register__row">
          <Submit refBtn={this.btnSubmitRef} />
        </div>
      </form>
    );
  }
}

export default Form;
