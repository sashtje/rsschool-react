import { MainType, FormType } from '../context/types';

export const mainReducer = (state: MainType, action) => {
  switch (action.type) {
    case 'load-main-cards':
      return { ...state, ...action.payload };

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
