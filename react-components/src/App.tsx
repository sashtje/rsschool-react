import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Page404 from './pages/Page404';
import FormPage from './pages/FormPage';
import Layout from './components/Layout';

import './App.scss';

import { routes } from './router';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}

          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
