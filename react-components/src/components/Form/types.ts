import { IRegisterCardItem } from '../RegisterCardItem/types';

export interface IProps {
  addCard: (newCard: IRegisterCardItem) => void;
  showNotification: () => void;
}

export interface IState {
  nameError: string;
  surnameError: string;
  emailError: string;
  birthdayError: string;
  countryError: string;
  zipcodeError: string;
  pictureError: string;
}

export type State = {
  [key in keyof IState]: string;
};

export type InputRefTypes = React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>;
