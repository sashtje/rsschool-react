import { Component } from 'react';

import Form from '../../components/Form/Form';

import './FormPage.scss';

class FormPage extends Component {
  render() {
    return (
      <main className="form-page">
        <Form />

        <div className="form-page__register-cards"></div>
      </main>
    );
  }
}

export default FormPage;
