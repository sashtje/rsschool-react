import { Component } from 'react';

import Form from '../../components/Form/Form';
import RegisterCards from '../../components/RegisterCards/RegisterCards';
import NotificationWindow from '../../components/NotificationWindow/NotificationWindow';

import './FormPage.scss';

import { IRegisterCard } from '../../components/RegisterCard/types';

interface IState {
  cards: IRegisterCard[];
  isShowNotification: boolean;
}

class FormPage extends Component<Record<string, unknown>, IState> {
  state = { cards: [], isShowNotification: false };

  addCard = (newCard: IRegisterCard) => {
    this.setState((state) => ({ cards: [...state.cards, newCard] }));
  };

  showNotification = () => {
    this.setState({ isShowNotification: true });

    setTimeout(() => {
      this.setState({ isShowNotification: false });
    }, 3000);
  };

  render() {
    const { cards, isShowNotification } = this.state;

    return (
      <main className="form-page">
        <Form addCard={this.addCard} showNotification={this.showNotification} />

        <RegisterCards cards={cards} className="form-page__register-cards" />

        {isShowNotification && <NotificationWindow />}
      </main>
    );
  }
}

export default FormPage;
