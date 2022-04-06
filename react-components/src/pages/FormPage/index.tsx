import { Component } from 'react';

import Form from '../../components/Form';
import RegisterCards from '../../components/RegisterCardList';
import NotificationWindow from '../../components/NotificationWindow';

import './styles.scss';

import { IRegisterCardItem } from '../../components/RegisterCardItem/types';
import { IState } from './types';

class FormPage extends Component<Record<string, unknown>, IState> {
  state = { cards: [], isShowNotification: false };

  addCard = (newCard: IRegisterCardItem) => {
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
