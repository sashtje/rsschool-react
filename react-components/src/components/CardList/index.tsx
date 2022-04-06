import { Component } from 'react';

import CardItem from '../CardItem';

import './styles.scss';

import IProps from './types';

import { data } from '../../model/model';

class CardList extends Component<IProps> {
  render() {
    const { className } = this.props;

    return (
      <div className={className ? className + ' cards' : 'cards'} data-testid="cards">
        {data.map((item) => (
          <CardItem card={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
