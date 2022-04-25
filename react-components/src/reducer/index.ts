import { MainType, FormType } from '../context/types';

export const mainReducer = (state: MainType, action) => {
  switch (action.type) {
    case 'load-main-cards':
    case 'change-per-page':
    case 'change-search':
    case 'change-sort':
      return { ...state, ...action.payload };

    case 'clear-main-cards':
      return { ...state, cards: [] };

    default:
      return state;
  }
};

export const formReducer = (state: FormType, action) => {
  switch (action.type) {
    case '':
      return state;

    default:
      return state;
  }
};
