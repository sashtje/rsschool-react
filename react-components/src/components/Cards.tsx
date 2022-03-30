import React, { Component } from 'react';

import Card from './Card';

import { data } from '../model';

interface Props {
  search: string;
}
class Cards extends Component<Props> {
  render() {
    return (
      <div className="home__cards">
        {data.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Cards;
