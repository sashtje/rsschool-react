import { Component } from 'react';

import RegisterCard from '../RegisterCard/RegisterCard';

import './RegisterCards.scss';

interface IProps {
  className?: string;
}

interface IRegisterCard {
  id: number;
  pic: string;
  name: string;
  surname: string;
  email: string;
  birthday: string;
  country: string;
  zipcode: string;
  gender: string;
  news: boolean;
}

const registercards = [
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
];

class RegisterCards extends Component<IProps> {
  returnClass = () => {
    return this.props.className ? `registercards ${this.props.className}` : 'registercards';
  };

  render() {
    return (
      <div className={this.returnClass()}>
        {registercards.map((card) => (
          <RegisterCard card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default RegisterCards;
