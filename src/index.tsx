// import './styles.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

function renderDOM(Component: any) {
  ReactDOM.render(
    <Component />,
    document.getElementById('root'),
  );
}

renderDOM(App);
