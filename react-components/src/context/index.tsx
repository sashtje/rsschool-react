import { createContext } from 'react';

const initialState = {
  main: {
    search: '',
    sort: '',
    cardsPerPage: 100,
    currentPage: 1,
    totalPages: 0,
    cards: [],
  },
  form: {
    name: '',
    surname: '',
    email: '',
    birthday: '',
    country: '',
    zipcode: '',
    gender: false,
    file: '',
    news: false,
    cards: [],
  },
};

const AppContext = createContext<InitialStateType>(initialState);
