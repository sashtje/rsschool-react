import { Component } from 'react';

import RegisterCard from '../RegisterCard/RegisterCard';

import './RegisterCards.scss';

import { IRegisterCard } from '../RegisterCard/types';

interface IProps {
  cards: IRegisterCard[];
  className?: string;
}

/* const registercards = [
  {
    id: 1,
    pic: './img/photo_1.png',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    birthday: '21.03.1905',
    country: 'Algeria',
    zipcode: '12345',
    gender: 'F',
    news: true,
  },
  {
    id: new Date().getTime(),
    pic: './img/photo_2.png',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    birthday: '21.03.1905',
    country: 'Algeria',
    zipcode: '12345',
    gender: 'M',
    news: false,
  },
]; */

class RegisterCards extends Component<IProps> {
  returnClass = () => {
    return this.props.className ? `registercards ${this.props.className}` : 'registercards';
  };

  render() {
    return (
      <div className={this.returnClass()}>
        {this.props.cards.map((card) => (
          <RegisterCard card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default RegisterCards;
