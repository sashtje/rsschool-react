import { Component } from 'react';

import RegisterCardItem from '../RegisterCardItem';

import './styles.scss';

import { IProps } from './types';

class RegisterCardList extends Component<IProps> {
  returnClass = () => {
    return this.props.className ? `registercards ${this.props.className}` : 'registercards';
  };

  render() {
    return (
      <div data-testid="regcards-container" className={this.returnClass()}>
        {this.props.cards.map((card) => (
          <RegisterCardItem card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default RegisterCardList;
