import { Component } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

import ModalWindow from '../ModalWindow';

import './styles.scss';

import { IProps, IState } from './types';

class CardItem extends Component<IProps, IState> {
  state = { isModalWindowShown: false };

  handleClick = () => {
    this.setState((state) => ({
      isModalWindowShown: !state.isModalWindowShown,
    }));
  };

  render() {
    const { title, ownername, views, url } = this.props.card;
    const { isModalWindowShown } = this.state;

    return (
      <section className="card" data-testid="card" onClick={this.handleClick}>
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

        {isModalWindowShown && (
          <ModalWindow closeWindow={this.handleClick} card={this.props.card} />
        )}
      </section>
    );
  }
}

export default CardItem;
