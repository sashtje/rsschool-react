import './styles.scss';

import { IProps } from './types';

const Submit = ({ isDirty }: IProps) => {
  return (
    <button type="submit" className="submit" disabled={!isDirty}>
      Submit
    </button>
  );
};

export default Submit;
