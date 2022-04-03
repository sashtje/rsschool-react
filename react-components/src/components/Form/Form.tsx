import React, { Component } from 'react';

import TextField from '../../components/TextField/TextField';
import DateField from '../../components/DateField/DateField';
import Select from '../../components/Select/Select';
import EmailField from '../../components/EmailField/EmailField';
import Switcher from '../../components/Switcher/Switcher';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import Checkbox from '../../components/Checkbox/Checkbox';
import Submit from '../../components/Submit/Submit';

import './Form.scss';

import { IRegisterCard } from '../RegisterCard/types';

import { countries } from '../../model/countries';

interface IProps {
  addCard: (newCard: IRegisterCard) => void;
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
  }

  errorChange(key: string, value = '') {
    this.setState({ [key]: value } as State);
  }

  validationAll() {
    return true;
  }

  showNotification() {}

  clearForm() {
    this.nameRef.current!.value = '';
    this.nameRef.current!.focus();
    this.surnameRef.current!.value = '';
    this.emailRef.current!.value = '';
    this.birtRef.current!.value = '';
    this.countryRef.current!.value = '';
    this.zipcodeRef.current!.value = '';
    this.genderRef.current!.checked = false;
    this.picRef.current!.value = '';
    this.newsRef.current!.checked = false;
    this.btnSubmitRef.current!.disabled = true;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.validationAll()) {
      const file = this.picRef.current?.files![0];
      const downFile = URL.createObjectURL(file!);
      const newCard: IRegisterCard = {
        id: new Date().getTime(),
        pic: downFile,
        name: this.nameRef.current?.value as string,
        surname: this.surnameRef.current?.value as string,
        email: this.emailRef.current?.value as string,
        birthday: this.birtRef.current?.value as string,
        country: this.countryRef.current?.value as string,
        zipcode: this.zipcodeRef.current?.value as string,
        gender: this.genderRef.current?.checked ? 'M' : 'F',
        news: this.newsRef.current?.checked as boolean,
      };

      this.props.addCard(newCard);

      this.showNotification();
      this.clearForm();
    }
  };

  checkSubmitBtn = () => {
    let pr: string;
    let isHasErrors = false;
    for (pr of Object.keys(this.state)) {
      if (this.state[pr as keyof IState] !== '') {
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

        <EmailField
          label="Email:"
          emailRef={this.emailRef}
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
