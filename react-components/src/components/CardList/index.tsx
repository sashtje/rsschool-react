import CardItem from '../CardItem';

import './styles.scss';

import IProps from './types';

const CardList = ({ className, data }: IProps) => {
  return (
    <div className={className ? `${className} cards` : 'cards'} data-testid="cards">
      {data.map((item) => (
        <CardItem card={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;
