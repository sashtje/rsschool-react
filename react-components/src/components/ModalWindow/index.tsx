import React, { Component } from 'react';
import { AiOutlineCloseSquare, AiOutlineEye } from 'react-icons/ai';

import './styles.scss';

import { IProps } from './types';

class ModalWindow extends Component<IProps> {
  handleCloseWindow = (e: React.MouseEvent) => {
    const { closeWindow } = this.props;

    e.stopPropagation();
    closeWindow();
  };

  stopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  getLocalDateTaken = (date: string) => {
    let dateLocal;

    try {
      dateLocal = new Date(date).toLocaleString();
    } catch {
      dateLocal = date;
    }

    return dateLocal;
  };

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
      <div className="modalwindow" onClick={this.handleCloseWindow} data-testid="modal-window">
        <div className="modalwindow__content" onClick={this.stopClick}>
          <span className="modalwindow__close-icon" onClick={this.handleCloseWindow}>
            <AiOutlineCloseSquare />
          </span>

          <div className="modalwindow__photo">
            <img src={url} alt={`flickr photo ${tags}`} />
          </div>

          <h2 className="modalwindow__title">{title}</h2>

          <div className="modalwindow__author">
            by <span className="modalwindow__author-name">{ownername}</span>
          </div>

          <div className="modalwindow__feedback">
            <AiOutlineEye />
            {views}
          </div>

          {description?._content && (
            <div className="modalwindow__description">
              <b>Description:</b> {description?._content}
            </div>
          )}

          {datetaken && (
            <div className="modalwindow__block">
              <b>Date taken:</b> {this.getLocalDateTaken(datetaken)}
            </div>
          )}

          {dateupload && (
            <div className="modalwindow__block">
              <b>Date upload:</b> {new Date(+dateupload).toLocaleString()}
            </div>
          )}

          {lastupdate && (
            <div className="modalwindow__block">
              <b>Last update:</b> {new Date(+lastupdate).toLocaleString()}
            </div>
          )}

          <div className="modalwindow__block">
            <b>Geo:</b> <i>lat</i> {latitude}, <i>lon</i> {longitude}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
