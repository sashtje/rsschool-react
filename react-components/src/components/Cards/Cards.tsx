import { Component } from 'react';

import Card from '../Card/Card';

import './Cards.scss';

import { data } from '../../model/model';

interface Props {
  search: string;
  className?: string;
}
class Cards extends Component<Props> {
  render() {
    return (
      <div className={this.props.className ? this.props.className + ' cards' : 'cards'}>
        {data.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Cards;
