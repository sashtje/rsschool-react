import { Component } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

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
      url,
    } = this.props.card;

    return (
      <section className="card" data-testid="card">
        <div className="card__photo" style={{ backgroundImage: `url(${url})` }}></div>
        <h2 className="card__country" data-testid="card-title">
          {title}
        </h2>
        <div className="card__author">
          by{' '}
          <span className="card__author-name" data-testid="card-author">
            {ownername}
          </span>
        </div>
        <div className="card__feedback">
          <AiOutlineEye />
          {views}
        </div>
      </section>
    );
  }
}

export default CardItem;
