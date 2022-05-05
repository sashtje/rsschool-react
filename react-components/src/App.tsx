import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';

import { setupStore } from './store';

import './App.scss';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />;
    </Provider>
  );
};

export default App;
