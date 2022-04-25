import { IData } from '../pages/Main/types';
import { IRegisterCardItem } from '../components/RegisterCardItem/types';

export type MainType = {
  search: string;
  sort: string;
  cardsPerPage: string;
  currentPage: string;
  totalPages: string;
  cards: IData[];
};

export type FormType = {
  name: string;
  surname: string;
  email: string;
  birthday: string;
  country: string;
  zipcode: string;
  gender: boolean;
  file: string;
  news: boolean;
  cards: IRegisterCardItem[];
};

export type InitialStateType = {
  main: MainType;
  form: FormType;
};

export type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};
