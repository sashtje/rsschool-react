import { UseFormRegister } from 'react-hook-form';

import { IFormData, Name } from '../Form/types';

export interface IProps {
  textError: string | undefined;
  name: Name;
  register: UseFormRegister<IFormData>;
}
