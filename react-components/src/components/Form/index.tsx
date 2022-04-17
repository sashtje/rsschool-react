import { validationForm, isObjectNotFromEmptyStrings } from '../../utils/validation';

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
import { useEffect, useRef, useState } from 'react';

const Form = ({ addCard, showNotification }: IProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const zipcodeRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const newsRef = useRef<HTMLInputElement>(null);
  const btnSubmitRef = useRef<HTMLButtonElement>(null);

  const [error, setError] = useState<IState>({
    nameError: '',
    surnameError: '',
    emailError: '',
    birthdayError: '',
    countryError: '',
    zipcodeError: '',
    pictureError: '',
  });

  const errorChange = (key: string, value = '') => {
    const changedError = { [key]: value } as State;
    setError({ ...error, ...changedError });
  };

  const handleChangeInput = (inputNameError: string, textError: string) => {
    if (textError !== '') {
      errorChange(inputNameError);
    } else {
      checkSubmitBtn();
    }
  };

  const getInputValue = (inputRef: InputRefTypes): string => {
    return inputRef.current?.value as string;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = getInputValue(nameRef);
    const surnameValue = getInputValue(surnameRef);
    const emailValue = getInputValue(emailRef);
    const birthdayValue = getInputValue(birthdayRef);
    const countryValue = getInputValue(countryRef);
    const zipcodeValue = getInputValue(zipcodeRef);
    const pictureValue = pictureRef.current?.files as FileList;

    const { isValid, validationErrors } = validationForm(
      nameValue,
      surnameValue,
      emailValue,
      birthdayValue,
      countryValue,
      zipcodeValue,
      pictureValue
    );

    if (isValid) {
      const file = pictureValue[0];
      const downFile = URL.createObjectURL(file!);
      const dateBirth = new Date(birthdayValue);
      const newCard: IRegisterCardItem = {
        id: new Date().getTime(),
        picture: downFile,
        name: nameValue,
        surname: surnameValue,
        email: emailValue,
        birthday: dateBirth.toLocaleDateString(),
        country: countryValue,
        zipcode: zipcodeValue,
        gender: genderRef.current?.checked ? 'M' : 'F',
        news: newsRef.current?.checked as boolean,
      };

      addCard(newCard);

      showNotification();

      formRef.current?.reset();
    } else {
      setError(validationErrors);
    }

    btnSubmitRef.current!.disabled = true;
    nameRef.current!.focus();
  };

  const checkSubmitBtn = () => {
    const isHasErrors = isObjectNotFromEmptyStrings(error);
    let isEmpty = true;
    if (
      getInputValue(nameRef) !== '' ||
      getInputValue(surnameRef) !== '' ||
      getInputValue(emailRef) !== '' ||
      getInputValue(zipcodeRef) !== '' ||
      getInputValue(birthdayRef) !== '' ||
      getInputValue(countryRef) !== '' ||
      pictureRef.current!.files?.length !== 0
    ) {
      isEmpty = false;
    }

    if (isHasErrors || isEmpty) {
      (btnSubmitRef.current as HTMLButtonElement).disabled = true;
    } else {
      (btnSubmitRef.current as HTMLButtonElement).disabled = false;
    }
  };

  useEffect(() => {
    checkSubmitBtn();
  }, [error]);

  const {
    nameError,
    surnameError,
    emailError,
    birthdayError,
    countryError,
    zipcodeError,
    pictureError,
  } = error;

  return (
    <form ref={formRef} className="form-page__form form-register" onSubmit={handleSubmit}>
      <TextField
        label="Name:"
        inputRef={nameRef}
        textError={nameError}
        name="name"
        handleChangeInput={handleChangeInput}
        autofocus
      />
      <TextField
        label="Surname:"
        inputRef={surnameRef}
        textError={surnameError}
        name="surname"
        handleChangeInput={handleChangeInput}
      />

      <TextField
        label="Email:"
        inputRef={emailRef}
        textError={emailError}
        name="email"
        handleChangeInput={handleChangeInput}
      />
      <DateField
        label="Birthday:"
        dateRef={birthdayRef}
        textError={birthdayError}
        name="birthday"
        handleChangeInput={handleChangeInput}
      />

      <Select
        label="Country:"
        options={countries}
        selectRef={countryRef}
        textError={countryError}
        name="country"
        handleChangeInput={handleChangeInput}
      />
      <TextField
        label="Zip code:"
        inputRef={zipcodeRef}
        textError={zipcodeError}
        name="zipcode"
        handleChangeInput={handleChangeInput}
      />

      <div className="form-register__row">
        <Switcher label="Gender:" switcherRef={genderRef} />
      </div>

      <div className="form-register__row">
        <UploadPhoto
          pictureRef={pictureRef}
          textError={pictureError}
          name="picture"
          handleChangeInput={handleChangeInput}
        />
      </div>

      <div className="form-register__row">
        <Checkbox label="I want to receive news" checkboxRef={newsRef} />
      </div>

      <div className="form-register__row">
        <Submit refBtn={btnSubmitRef} />
      </div>
    </form>
  );
};

export default Form;
