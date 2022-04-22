import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseSquare } from 'react-icons/ai';

import './styles.scss';

import { IProps } from './types';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.appendChild(modalRoot);

const ModalWindow = ({ closeWindow, children }: IProps) => {
  const el = document.createElement('div');

  const handleCloseWindow = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeWindow();
  };

  const stopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  });

  return createPortal(
    <div className="modalwindow" onClick={handleCloseWindow} data-testid="modal-window">
      <div className="modalwindow__wrapper" onClick={stopClick} data-testid="modal-window-wrapper">
        <span className="modalwindow__close-icon" onClick={handleCloseWindow}>
          <AiOutlineCloseSquare />
        </span>

        <div className="modalwindow__content">{children}</div>
      </div>
    </div>,
    el
  );
};

export default ModalWindow;
