import { useForm } from 'react-hook-form';

import TextField from '../TextField';
import DateField from '../DateField';
import Select from '../Select';
import Switcher from '../Switcher';
import UploadPhoto from '../UploadPhoto';
import Checkbox from '../Checkbox';
import Submit from '../Submit';

import './styles.scss';

import { IRegisterCardItem } from '../RegisterCardItem/types';
import { IProps, IFormData } from './types';

import { countries } from '../../model/countries';

const Form = ({ addCard, showNotification }: IProps) => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm<IFormData>({ reValidateMode: 'onSubmit' });

  const onSubmit = ({
    name,
    surname,
    email,
    birthday,
    country,
    zipcode,
    gender,
    picture,
    news,
  }: IFormData) => {
    const file = picture[0];
    const downFile = URL.createObjectURL(file!);
    const dateBirth = new Date(birthday);
    const newCard: IRegisterCardItem = {
      id: new Date().getTime(),
      picture: downFile,
      name,
      surname,
      email,
      birthday: dateBirth.toLocaleDateString(),
      country,
      zipcode,
      gender: gender ? 'M' : 'F',
      news,
    };

    addCard(newCard);

    showNotification();

    reset();
  };

  return (
    <form className="form-page__form form-register" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name:"
        name="name"
        register={register}
        textError={errors?.name?.message}
        autofocus
      />
      <TextField
        label="Surname:"
        name="surname"
        register={register}
        textError={errors?.surname?.message}
      />

      <TextField
        label="Email:"
        name="email"
        register={register}
        textError={errors?.email?.message}
      />
      <DateField
        label="Birthday:"
        name="birthday"
        register={register}
        textError={errors?.birthday?.message}
      />

      <Select
        label="Country:"
        name="country"
        options={countries}
        register={register}
        textError={errors?.country?.message}
      />
      <TextField
        label="Zip code:"
        name="zipcode"
        register={register}
        textError={errors?.zipcode?.message}
      />

      <div className="form-register__row">
        <Switcher label="Gender:" name="gender" register={register} />
      </div>

      <div className="form-register__row">
        <UploadPhoto name="picture" register={register} textError={errors?.picture?.message} />
      </div>

      <div className="form-register__row">
        <Checkbox label="I want to receive news" name="news" register={register} />
      </div>

      <div className="form-register__row">
        <Submit isDirty={isDirty} />
      </div>
    </form>
  );
};

export default Form;
