import { Component } from 'react';

import Form from '../../components/Form/Form';
import RegisterCards from '../../components/RegisterCards/RegisterCards';

import './FormPage.scss';

import { IRegisterCard } from '../../components/RegisterCard/types';

interface IState {
  cards: IRegisterCard[];
}

class FormPage extends Component<Record<string, unknown>, IState> {
  state = { cards: [] };

  addCard = (newCard: IRegisterCard) => {
    this.setState((state) => ({ cards: [...state.cards, newCard] }));
  };

  render() {
    return (
      <main className="form-page">
        <Form addCard={this.addCard} />

        <RegisterCards cards={this.state.cards} className="form-page__register-cards" />
      </main>
    );
  }
}

export default FormPage;
