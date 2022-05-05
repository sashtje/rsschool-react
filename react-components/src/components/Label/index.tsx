import './styles.scss';

import IProps from './types';

const Label = ({ className, children }: IProps) => {
  return <label className={className ? `label ${className}` : 'label'}>{children}</label>;
};

export default Label;
