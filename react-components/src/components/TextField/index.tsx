import { useEffect } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

const TextField = ({ label, inputRef, textError, name, handleChangeInput, autofocus }: IProps) => {
  useEffect(() => {
    if (autofocus) {
      inputRef.current!.focus();
    }
  }, []);

  return (
    <div className="textfield">
      <Label>
        {label}
        <input
          ref={inputRef}
          className="textfield__input"
          type="text"
          onChange={() => handleChangeInput(`${name}Error`, textError)}
        />
      </Label>

      {textError !== '' && <div className="textfield__validation">{textError}</div>}
    </div>
  );
};

export default TextField;
