import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './core/Header';
import Footer from './core/Footer';

ReactDOM.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>,
  document.getElementById('root')
);