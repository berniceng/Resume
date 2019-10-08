import React, { createContext } from 'react';
import { MENU } from './data/constants';

export const Context = createContext({});

export const AppContext = (Component: any): any => {
  return (props: object) => {
    return(
      <Context.Consumer>
        {(appProps: object) => <Component {...appProps} {...props} />}
      </Context.Consumer>
    );
  };
};
