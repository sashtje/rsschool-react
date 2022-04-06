import { IRegisterCardItem } from '../RegisterCardItem/types';

export interface IProps {
  addCard: (newCard: IRegisterCardItem) => void;
  showNotification: () => void;
}

export interface IState {
  nameErr: string;
  surnameErr: string;
  emailErr: string;
  birthdayErr: string;
  countryErr: string;
  zipcodeErr: string;
  picErr: string;
}

export type State = {
  [key in keyof IState]: string;
};
