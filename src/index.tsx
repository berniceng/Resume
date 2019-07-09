// import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

function renderDOM(Component: any) {
  ReactDOM.render(
    <Component />,
    document.getElementById('root'),
  );
}

renderDOM(App);
