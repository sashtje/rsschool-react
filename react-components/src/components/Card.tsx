import React, { Component } from 'react';
import { IData } from '../model';
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai';

interface Props {
  card: IData;
}

class Card extends Component<Props> {
  render() {
    const card = this.props.card;

    return (
      <section className="home__card card">
        <div className="card__photo">
          <img src={`./img/${card.photo}`} alt="card photo" />
        </div>
        <h2 className="card__country">{card.country}</h2>
        <div className="card__author">
          by <span className="card__author-name">{card.author}</span>
        </div>
        <div className="card__feedback">
          <div className="card__likes">
            <AiOutlineLike />
            {card.likes}
          </div>
          <div className="card__views">
            <AiOutlineEye />
            {card.views}
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
