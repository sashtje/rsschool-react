import { IData } from '../../pages/Main/types';
import { IRegisterCardItem } from '../../components/RegisterCardItem/types';

export interface MainState {
  search: string;
  sort: string;
  cardsPerPage: string;
  currentPage: string;
  totalPages: string;
  cards: IData[];
  isLoading: boolean;
  error: string;
}

export interface FormState {
  cards: IRegisterCardItem[];
}

export type SetSearchAction = {
  search: string;
  currentPage: string;
};

export type SetPerPageAction = {
  cardsPerPage: string;
  currentPage: string;
};

export interface IFetchDataParams {
  search: string;
  sort: string;
  cardsPerPage: string;
  currentPage: string;
}
