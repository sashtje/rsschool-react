import { createContext, useReducer } from 'react';

import { mainReducer, formReducer } from '../reducer/index';

import { InitialStateType, ContextType } from './types';

import { INITIAL_STATE } from './const';

const AppContext = createContext<ContextType>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const reducer = ({ main, form }: InitialStateType, action) => ({
  main: mainReducer(main, action),
  form: formReducer(form, action),
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
