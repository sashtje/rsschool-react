import { MainType, FormType, MainActionType, FormActionType } from '../context/types';

export const mainReducer = (state: MainType, action: MainActionType) => {
  switch (action.type) {
    case 'load-main-cards':
    case 'change-per-page':
    case 'change-search':
    case 'change-sort':
    case 'change-current-page':
      return { ...state, ...action.payload };

    case 'clear-main-cards':
      return { ...state, cards: [] };

    default:
      return state;
  }
};

export const formReducer = (state: FormType, action: FormActionType) => {
  switch (action.type) {
    case 'add-form-card':
      state.cards.push(action.payload);
      return state;

    default:
      return state;
  }
};
