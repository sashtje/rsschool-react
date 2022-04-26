import { createContext, useReducer } from 'react';

import { mainReducer, formReducer } from '../reducer/index';

import { InitialStateType, ContextType, ActionType, MainActionType, FormActionType } from './types';

import { INITIAL_STATE } from './const';

const AppContext = createContext<ContextType>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const reducer = ({ main, form }: InitialStateType, action: ActionType) => ({
  main: mainReducer(main, action as MainActionType),
  form: formReducer(form, action as FormActionType),
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
