import React, { Component } from 'react';

import TextField from '../../components/TextField/TextField';
import DateField from '../../components/DateField/DateField';
import Select from '../../components/Select/Select';
import Switcher from '../../components/Switcher/Switcher';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import Checkbox from '../../components/Checkbox/Checkbox';
import Submit from '../../components/Submit/Submit';

import './Form.scss';

import { IRegisterCard } from '../RegisterCard/types';

import { countries } from '../../model/countries';

interface IProps {
  addCard: (newCard: IRegisterCard) => void;
  showNotification: () => void;
}

interface IState {
  nameErr: string;
  surnameErr: string;
  emailErr: string;
  birthdayErr: string;
  countryErr: string;
  zipcodeErr: string;
  picErr: string;
}

type State = {
  [key in keyof IState]: string;
};

class Form extends Component<IProps, IState> {
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  birtRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLSelectElement>;
  zipcodeRef: React.RefObject<HTMLInputElement>;
  genderRef: React.RefObject<HTMLInputElement>;
  picRef: React.RefObject<HTMLInputElement>;
  newsRef: React.RefObject<HTMLInputElement>;
  btnSubmitRef: React.RefObject<HTMLButtonElement>;

  error: IState;

  constructor(props: IProps) {
    super(props);

    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.emailRef = React.createRef();
    this.birtRef = React.createRef();
    this.countryRef = React.createRef();
    this.zipcodeRef = React.createRef();
    this.genderRef = React.createRef();
    this.picRef = React.createRef();
    this.newsRef = React.createRef();
    this.btnSubmitRef = React.createRef();

    this.state = {
      nameErr: '',
      surnameErr: '',
      emailErr: '',
      birthdayErr: '',
      countryErr: '',
      zipcodeErr: '',
      picErr: '',
    };

    this.error = { ...this.state };
  }

  errorChange = (key: string, value = '') => {
    this.setState({ [key]: value } as State);
    this.error[key as keyof IState] = value;
  };

  validationNameAndSurname(value: string) {
    const regexp = /^[a-z]{3,15}$/i;
    return regexp.test(value) ? '' : 'Field must consist of 3 - 15 English letters';
  }

  validationEmail(value: string) {
    const regexp = /^[0-9a-z_\-.]{3,15}@[a-z]{3,5}\.[a-z]{2,4}$/i;
    return regexp.test(value) ? '' : 'Email must consist of 0-9, a-z, _, -, @ symbols';
  }

  validationBirt(value: string) {
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

  validationCountry(value: string) {
    return value === '' ? 'Please choose a country' : '';
  }

  validationZipcode(value: string) {
    const regexp = /^\d{5,6}$/;
    return regexp.test(value) ? '' : 'Field must consist of 5 or 6 figures';
  }

  validationPic(len: number) {
    return len === 0 ? 'Please upload a picture' : '';
  }

  validationAll() {
    const resValidName = this.validationNameAndSurname(this.nameRef.current?.value as string);
    const resValidSurname = this.validationNameAndSurname(this.surnameRef.current?.value as string);
    const resValidEmail = this.validationEmail(this.emailRef.current?.value as string);
    const resValidBirt = this.validationBirt(this.birtRef.current?.value as string);
    const resValidCountry = this.validationCountry(this.countryRef.current?.value as string);
    const resValidZipcode = this.validationZipcode(this.zipcodeRef.current?.value as string);
    const len = this.picRef.current?.files?.length as number;
    const resValidPic = this.validationPic(len);

    if (
      resValidName === '' &&
      resValidSurname === '' &&
      resValidEmail === '' &&
      resValidBirt === '' &&
      resValidCountry === '' &&
      resValidZipcode === '' &&
      resValidPic === ''
    ) {
      return true;
    }

    this.setState({
      nameErr: resValidName,
      surnameErr: resValidSurname,
      emailErr: resValidEmail,
      birthdayErr: resValidBirt,
      countryErr: resValidCountry,
      zipcodeErr: resValidZipcode,
      picErr: resValidPic,
    });
    this.error = {
      nameErr: resValidName,
      surnameErr: resValidSurname,
      emailErr: resValidEmail,
      birthdayErr: resValidBirt,
      countryErr: resValidCountry,
      zipcodeErr: resValidZipcode,
      picErr: resValidPic,
    };
    return false;
  }

  clearForm() {
    this.nameRef.current!.value = '';
    this.surnameRef.current!.value = '';
    this.emailRef.current!.value = '';
    this.birtRef.current!.value = '';
    this.countryRef.current!.value = '';
    this.zipcodeRef.current!.value = '';
    this.genderRef.current!.checked = false;
    this.picRef.current!.value = '';
    this.newsRef.current!.checked = false;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.validationAll()) {
      const file = this.picRef.current?.files![0];
      const downFile = URL.createObjectURL(file!);
      const dateBirth = new Date(this.birtRef.current?.value as string);
      const newCard: IRegisterCard = {
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
    let pr: string;
    let isHasErrors = false;
    for (pr of Object.keys(this.error)) {
      if (this.error[pr as keyof IState] !== '') {
        isHasErrors = true;
      }
    }

    let isEmpty = true;
    if (
      this.nameRef.current!.value !== '' ||
      this.surnameRef.current!.value !== '' ||
      this.emailRef.current?.value !== '' ||
      this.zipcodeRef.current!.value !== '' ||
      this.birtRef.current!.value !== '' ||
      this.countryRef.current!.value !== '' ||
      this.picRef.current!.files?.length !== 0
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
    return (
      <form className="form-page__form form-register" onSubmit={this.handleSubmit}>
        <TextField
          label="Name:"
          inputRef={this.nameRef}
          textErr={this.state.nameErr}
          name="name"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
          autofocus
        />
        <TextField
          label="Surname:"
          inputRef={this.surnameRef}
          textErr={this.state.surnameErr}
          name="surname"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />

        <TextField
          label="Email:"
          inputRef={this.emailRef}
          textErr={this.state.emailErr}
          name="email"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />
        <DateField
          label="Birthday:"
          dateRef={this.birtRef}
          textErr={this.state.birthdayErr}
          name="birthday"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />

        <Select
          label="Country:"
          options={countries}
          selectRef={this.countryRef}
          textErr={this.state.countryErr}
          name="country"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />
        <TextField
          label="Zip code:"
          inputRef={this.zipcodeRef}
          textErr={this.state.zipcodeErr}
          name="zipcode"
          errorReset={this.errorChange}
          checkSubmitBtn={this.checkSubmitBtn}
        />

        <div className="form-register__row">
          <Switcher label="Gender:" switcherRef={this.genderRef} />
        </div>

        <div className="form-register__row">
          <UploadPhoto
            picRef={this.picRef}
            textErr={this.state.picErr}
            name="pic"
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
