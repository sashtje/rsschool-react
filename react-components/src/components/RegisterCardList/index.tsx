import RegisterCardItem from '../RegisterCardItem';

import './styles.scss';

import { IProps } from './types';

const RegisterCardList = ({ className, cards }: IProps) => {
  const returnClass = () => {
    return className ? `registercards ${className}` : 'registercards';
  };

  return (
    <div data-testid="regcards-container" className={returnClass()}>
      {cards.map((card) => (
        <RegisterCardItem card={card} key={card.id} />
      ))}
    </div>
  );
};

export default RegisterCardList;
