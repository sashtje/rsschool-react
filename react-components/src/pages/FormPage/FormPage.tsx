import { Component } from 'react';

import Form from '../../components/Form/Form';
import RegisterCards from '../../components/RegisterCards/RegisterCards';

import './FormPage.scss';

class FormPage extends Component {
  render() {
    return (
      <main className="form-page">
        <Form />

        <RegisterCards className="form-page__register-cards" />
      </main>
    );
  }
}

export default FormPage;
