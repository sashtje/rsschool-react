import { useEffect } from 'react';

import './styles.scss';

import { IProps } from './types';

const Submit = ({ refBtn }: IProps) => {
  useEffect(() => {
    (refBtn.current as HTMLButtonElement).disabled = true;
  }, []);

  return (
    <button ref={refBtn} className="submit">
      Submit
    </button>
  );
};

export default Submit;
