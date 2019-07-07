import * as React from 'react';
import { InitialProps } from './initialProps';

export const Context = React.createContext(InitialProps);

export const AppContext = (Component: any): any => {
  return (props: object) => {
    return(
      <Context.Consumer>
        {(appProps: object) => <Component {...appProps} {...props} />}
      </Context.Consumer>
    );
  };
};
