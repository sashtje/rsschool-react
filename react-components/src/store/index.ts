import { combineReducers, configureStore } from '@reduxjs/toolkit';

import mainReducer from './reducers/mainSlice';
import formReducer from './reducers/formSlice';

const rootReducer = combineReducers({ mainReducer, formReducer });

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
