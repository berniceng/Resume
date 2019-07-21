import React, { createContext } from 'react';
import { InitialProps } from './initialProps';

export const Context = createContext(InitialProps);

export const AppContext = (Component: any): any => {
  return (props: object) => {
    return(
      <Context.Consumer>
        {(appProps: object) => <Component {...appProps} {...props} />}
      </Context.Consumer>
    );
  };
};
