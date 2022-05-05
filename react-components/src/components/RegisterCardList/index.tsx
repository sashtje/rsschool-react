import RegisterCardItem from '../RegisterCardItem';

import './styles.scss';

import { IProps } from './types';

const RegisterCardList = ({ className, cards }: IProps) => {
  return (
    <div
      data-testid="regcards-container"
      className={className ? `registercards ${className}` : 'registercards'}
    >
      {cards.map((card) => (
        <RegisterCardItem card={card} key={card.id} />
      ))}
    </div>
  );
};

export default RegisterCardList;
