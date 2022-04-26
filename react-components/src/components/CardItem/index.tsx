import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles.scss';

import { IProps } from './types';

const CardItem = (props: IProps) => {
  const { title, ownername, views, url, id } = props.card;

  return (
    <Link to={`/photo/${id}`} className="card" data-testid="card">
      <div
        className="card__photo"
        data-testid="card-photo"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <h2 className="card__country" data-testid="card-title">
        {title}
      </h2>
      <div className="card__author">
        by{' '}
        <span className="card__author-name" data-testid="card-author">
          {ownername}
        </span>
      </div>
      <div className="card__feedback" data-testid="card-views">
        <AiOutlineEye />
        {views}
      </div>
    </Link>
  );
};

export default CardItem;
