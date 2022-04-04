import { Component } from 'react';

import RegisterCard from '../RegisterCard/RegisterCard';

import './RegisterCards.scss';

import { IRegisterCard } from '../RegisterCard/types';

interface IProps {
  cards: IRegisterCard[];
  className?: string;
}

class RegisterCards extends Component<IProps> {
  returnClass = () => {
    return this.props.className ? `registercards ${this.props.className}` : 'registercards';
  };

  render() {
    return (
      <div data-testid="regcards-container" className={this.returnClass()}>
        {this.props.cards.map((card) => (
          <RegisterCard card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default RegisterCards;
