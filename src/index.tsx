// import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import { BrowserRouter } from 'react-router-dom';

function renderDOM(Component: any) {
  ReactDOM.render(
    <Component />,
    document.getElementById('root'),
  );
}

renderDOM(App);
