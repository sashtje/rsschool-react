import { Component } from 'react';
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai';

import './Card.scss';

import { IData } from '../../model/model';

interface Props {
  card: IData;
}

class Card extends Component<Props> {
  render() {
    const { photo, country, author, likes, views } = this.props.card;

    return (
      <section className="card" data-testid="card">
        <div className="card__photo">
          <img src={`./img/${photo}`} alt="card photo" />
        </div>
        <h2 className="card__country" data-testid="card-title">
          {country}
        </h2>
        <div className="card__author">
          by{' '}
          <span className="card__author-name" data-testid="card-author">
            {author}
          </span>
        </div>
        <div className="card__feedback">
          <div className="card__likes" data-testid="card-likes">
            <AiOutlineLike />
            {likes}
          </div>
          <div className="card__views" data-testid="card-views">
            <AiOutlineEye />
            {views}
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
