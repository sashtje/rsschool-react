import { Component } from 'react';

import RegisterCardItem from '../RegisterCardItem';

import './styles.scss';

import { IProps } from './types';

class RegisterCardList extends Component<IProps> {
  returnClass = () => {
    const { className } = this.props;

    return className ? `registercards ${className}` : 'registercards';
  };

  render() {
    const { cards } = this.props;

    return (
      <div data-testid="regcards-container" className={this.returnClass()}>
        {cards.map((card) => (
          <RegisterCardItem card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default RegisterCardList;
