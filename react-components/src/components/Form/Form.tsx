import { Component } from 'react';

import TextField from '../../components/TextField/TextField';
import DateField from '../../components/DateField/DateField';
import Select from '../../components/Select/Select';
import EmailField from '../../components/EmailField/EmailField';
import Switcher from '../../components/Switcher/Switcher';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import Checkbox from '../../components/Checkbox/Checkbox';
import Submit from '../../components/Submit/Submit';

import './Form.scss';
import { countries } from '../../model/countries';

class Form extends Component {
  render() {
    return (
      <form className="form-page__form form-register">
        <TextField label="Name:" />
        <TextField label="Surname:" />

        <EmailField label="Email:" />
        <DateField label="Birthday:" />

        <Select label="Country:" options={countries} />
        <TextField label="Zip code:" />

        <div className="form-register__row">
          <Switcher label="Gender:" />
        </div>

        {/* <div className="form-register__row">
          <UploadPhoto />
        </div> */}

        {/* <div className="form-register__row">
          <Checkbox />
        </div> */}

        {/* <div className="form-register__row">
          <Submit />
        </div> */}
      </form>
    );
  }
}

export default Form;
