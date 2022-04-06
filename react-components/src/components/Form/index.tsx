import React, { Component } from 'react';
import * as val from '../../utils/validation';

import TextField from '../TextField';
import DateField from '../DateField';
import Select from '../Select';
import Switcher from '../Switcher';
import UploadPhoto from '../UploadPhoto';
import Checkbox from '../Checkbox';
import Submit from '../Submit';

import './styles.scss';

import { IRegisterCardItem } from '../RegisterCardItem/types';
import { IProps, IState, State, InputRefTypes } from './types';

import { countries } from '../../model/countries';

class Form extends Component<IProps, IState> {
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  surnameRef: React.RefObject<HTMLInputElement> = React.createRef();
  emailRef: React.RefObject<HTMLInputElement> = React.createRef();
  birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  countryRef: React.RefObject<HTMLSelectElement> = React.createRef();
  zipcodeRef: React.RefObject<HTMLInputElement> = React.createRef();
  genderRef: React.RefObject<HTMLInputElement> = React.createRef();
  pictureRef: React.RefObject<HTMLInputElement> = React.createRef();
  newsRef: React.RefObject<HTMLInputElement> = React.createRef();
  btnSubmitRef: React.RefObject<HTMLButtonElement> = React.createRef();

  state = {
    nameError: '',
    surnameError: '',
    emailError: '',
    birthdayError: '',
    countryError: '',
    zipcodeError: '',
    pictureError: '',
  };

  errorChange = (key: string, value = '') => {
    this.setState({ [key]: value } as State, this.checkSubmitBtn);
  };

  handleChangeInput = (inputNameError: string, textError: string) => {
    if (textError !== '') {
      this.errorChange(inputNameError);
    } else {
      this.checkSubmitBtn();
    }
  };

  getInputValue = (inputRef: InputRefTypes): string => {
    return inputRef.current?.value as string;
  };

  validationAll() {
    const validationNameErrorText = val.validationNameAndSurname(this.getInputValue(this.nameRef));
    const validationSurnameErrorText = val.validationNameAndSurname(
      this.getInputValue(this.surnameRef)
    );
    const validationEmailErrorText = val.validationEmail(this.getInputValue(this.emailRef));
    const validationBirthdayErrorText = val.validationBirthday(
      this.getInputValue(this.birthdayRef)
    );
    const validationCountryErrorText = val.validationCountry(this.getInputValue(this.countryRef));
    const validationZipcodeErrorText = val.validationZipcode(this.getInputValue(this.zipcodeRef));
    const length = this.pictureRef.current?.files?.length as number;
    const validationPictureErrorText = val.validationPicture(length);

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

    return false;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.validationAll()) {
      const file = this.pictureRef.current?.files![0];
      const downFile = URL.createObjectURL(file!);
      const dateBirth = new Date(this.getInputValue(this.birthdayRef));
      const newCard: IRegisterCardItem = {
        id: new Date().getTime(),
        picture: downFile,
        name: this.getInputValue(this.nameRef),
        surname: this.getInputValue(this.surnameRef),
        email: this.getInputValue(this.emailRef),
        birthday: dateBirth.toLocaleDateString(),
        country: this.getInputValue(this.countryRef),
        zipcode: this.getInputValue(this.zipcodeRef),
        gender: this.genderRef.current?.checked ? 'M' : 'F',
        news: this.newsRef.current?.checked as boolean,
      };

      this.props.addCard(newCard);

      this.props.showNotification();

      this.formRef.current?.reset();
    }

    this.btnSubmitRef.current!.disabled = true;
    this.nameRef.current!.focus();
  };

  checkSubmitBtn = () => {
    let key: string;
    let isHasErrors = false;
    for (key of Object.keys(this.state)) {
      if (this.state[key as keyof IState] !== '') {
        isHasErrors = true;
      }
    }

    let isEmpty = true;
    if (
      this.getInputValue(this.nameRef) !== '' ||
      this.getInputValue(this.surnameRef) !== '' ||
      this.getInputValue(this.emailRef) !== '' ||
      this.getInputValue(this.zipcodeRef) !== '' ||
      this.getInputValue(this.birthdayRef) !== '' ||
      this.getInputValue(this.countryRef) !== '' ||
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
      <form
        ref={this.formRef}
        className="form-page__form form-register"
        onSubmit={this.handleSubmit}
      >
        <TextField
          label="Name:"
          inputRef={this.nameRef}
          textError={nameError}
          name="name"
          handleChangeInput={this.handleChangeInput}
          autofocus
        />
        <TextField
          label="Surname:"
          inputRef={this.surnameRef}
          textError={surnameError}
          name="surname"
          handleChangeInput={this.handleChangeInput}
        />

        <TextField
          label="Email:"
          inputRef={this.emailRef}
          textError={emailError}
          name="email"
          handleChangeInput={this.handleChangeInput}
        />
        <DateField
          label="Birthday:"
          dateRef={this.birthdayRef}
          textError={birthdayError}
          name="birthday"
          handleChangeInput={this.handleChangeInput}
        />

        <Select
          label="Country:"
          options={countries}
          selectRef={this.countryRef}
          textError={countryError}
          name="country"
          handleChangeInput={this.handleChangeInput}
        />
        <TextField
          label="Zip code:"
          inputRef={this.zipcodeRef}
          textError={zipcodeError}
          name="zipcode"
          handleChangeInput={this.handleChangeInput}
        />

        <div className="form-register__row">
          <Switcher label="Gender:" switcherRef={this.genderRef} />
        </div>

        <div className="form-register__row">
          <UploadPhoto
            pictureRef={this.pictureRef}
            textError={pictureError}
            name="picture"
            handleChangeInput={this.handleChangeInput}
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
