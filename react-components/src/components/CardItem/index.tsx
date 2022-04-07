import { Component } from 'react';
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai';

import './styles.scss';

import IProps from './types';

class CardItem extends Component<IProps> {
  render() {
    const {
      title,
      description,
      ownername,
      datetaken,
      dateupload,
      lastupdate,
      views,
      tags,
      latitude,
      longitude,
      url_l,
      height_l,
      width_l,
    } = this.props.card;

    return (
      <section className="card" data-testid="card">
        <div className="card__photo">
          <img src={url_l} alt="card photo" />
        </div>
        <h2 className="card__country" data-testid="card-title">
          {/* {country} */}
        </h2>
        <div className="card__author">
          by{' '}
          <span className="card__author-name" data-testid="card-author">
            {/* {author} */}
          </span>
        </div>
        <div className="card__feedback">
          <div className="card__likes" data-testid="card-likes">
            <AiOutlineLike />
            {/* {likes} */}
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

export default CardItem;
