import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Page404 from './pages/Page404';
import Header from './components/Header';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
