import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

import ModalWindow from '../ModalWindow';

import './styles.scss';

import { IProps } from './types';

const CardItem = (props: IProps) => {
  const [isModalWindowShown, setIsModalWindowShown] = useState(false);

  const handleClick = () => {
    setIsModalWindowShown(!isModalWindowShown);
  };

  const { title, ownername, views, url } = props.card;

  return (
    <section className="card" data-testid="card" onClick={handleClick}>
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

      {isModalWindowShown && <ModalWindow closeWindow={handleClick} card={props.card} />}
    </section>
  );
};

export default CardItem;
