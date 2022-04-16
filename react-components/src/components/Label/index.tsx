import './styles.scss';

import IProps from './types';

const Label = ({ className }: IProps, children: HTMLInputElement) => {
  const returnClass = () => {
    return className ? `label ${className}` : 'label';
  };

  return <label className={returnClass()}>{children}</label>;
};

export default Label;
