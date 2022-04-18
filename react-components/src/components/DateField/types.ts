import { UseFormRegister } from 'react-hook-form';

import { IFormData, Name } from '../Form/types';

export default interface IProps {
  label: string;
  name: Name;
  textError: string | undefined;
  register: UseFormRegister<IFormData>;
}
