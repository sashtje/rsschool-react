import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from './pages/Main/Main';
import About from './pages/About/About';
import Page404 from './pages/Page404/Page404';
import FormPage from './pages/FormPage';
import Layout from './components/Layout';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<FormPage />} />
          <Route path="404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    );
  }
}

export default App;