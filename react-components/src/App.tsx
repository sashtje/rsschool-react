import AppRouter from './components/AppRouter';
import { AppProvider } from './context';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <AppRouter />;
    </AppProvider>
  );
};

export default App;
